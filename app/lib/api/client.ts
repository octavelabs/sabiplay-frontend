import { ApiError } from "../api/errors";
import { getStoredAccessToken } from "../auth";



type Primitive = string | number | boolean;
type QueryValue = Primitive | Primitive[] | null | undefined;

type RequestConfig = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Record<string, string>;
  body?: unknown;
  query?: Record<string, QueryValue>;
  cache?: RequestCache;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
  signal?: AbortSignal;
};

function isAuthEndpoint(path: string) {
  return path.startsWith("/auth");
}

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

function buildUrl(
  path: string,
  query?: Record<string, QueryValue>,
  baseUrl = DEFAULT_BASE_URL,
) {
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured");
  }

  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const url = new URL(`${normalizedBaseUrl}${normalizedPath}`);

  if (query) {
    Object.entries(query).forEach(([key, rawValue]) => {
      if (rawValue === null || rawValue === undefined) return;

      if (Array.isArray(rawValue)) {
        rawValue.forEach((value) =>
          url.searchParams.append(key, String(value)),
        );
        return;
      }

      url.searchParams.set(key, String(rawValue));
    });
  }

  return url.toString();
}

function tryParseJson(text: string) {
  if (!text) return null;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}

function extractErrorMessage(payload: unknown, fallback: string) {
  if (!payload || typeof payload !== "object") return fallback;

  const maybeMessage = (payload as { message?: unknown }).message;
  if (typeof maybeMessage === "string" && maybeMessage.trim()) {
    return maybeMessage;
  }

  const maybeError = (payload as { error?: unknown }).error;
  if (typeof maybeError === "string" && maybeError.trim()) {
    return maybeError;
  }

  return fallback;
}

export async function apiRequest<T>(
  path: string,
  config: RequestConfig = {},
): Promise<T> {
  const { method = "GET", headers, body, query, cache, next, signal } = config;
  const authRequest = isAuthEndpoint(path);
  const accessToken = authRequest ? null : getStoredAccessToken();

  // FormData must be sent as-is so the browser can set the multipart
  // boundary; forcing a JSON content-type would corrupt the request.
  const isFormData =
    typeof FormData !== "undefined" && body instanceof FormData;

  const requestHeaders: Record<string, string> = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    ...headers,
  };

    const response = await fetch(buildUrl(path, query), {
      method,
      headers: requestHeaders,
      body:
        body === undefined
          ? undefined
          : isFormData
            ? (body as FormData)
            : JSON.stringify(body),

      cache,
      next,
      signal,
    });

    const rawText = await response.text();
    const parsed = tryParseJson(rawText);

    if (!response.ok) {
      // if (
      //   response.status === 401 &&
      //   !authRequest &&
      //   typeof window !== "undefined"
      // ) {

      //   window.location.replace('/login');
      // }
      const fallbackMessage = `Request failed with status ${response.status}`;
      throw new ApiError(
        extractErrorMessage(parsed, fallbackMessage),
        response.status,
        (parsed as { code?: string } | null)?.code,
        parsed,
      );
    }

    if (!parsed) {
      return {} as T;
    }

    if (typeof parsed === "object" && parsed !== null) {
      return parsed as T;
    }

    return parsed as T;

}

/**
 * Fetches a file endpoint (follows 302 redirects automatically) and returns
 * the response as a Blob along with a best-effort filename.
 * Use this for any endpoint that redirects to a pre-signed download URL.
 */
export async function apiDownload(
  path: string,
  config: Omit<RequestConfig, "body"> = {},
): Promise<{ blob: Blob; filename: string }> {
  const { headers, query, signal } = config;
  const accessToken = getStoredAccessToken();

  const requestHeaders: Record<string, string> = {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    ...headers,
  };

  const response = await fetch(buildUrl(path, query), {
    method: "GET",
    headers: requestHeaders,
    signal,
    // "follow" is the fetch default — the 302 Location redirect is followed
    // automatically and the final response (the actual file) is returned.
    redirect: "follow",
  });

  if (!response.ok) {
    const rawText = await response.text();
    const parsed = tryParseJson(rawText);
    const fallbackMessage = `Download failed with status ${response.status}`;
    throw new ApiError(
      extractErrorMessage(parsed, fallbackMessage),
      response.status,
      (parsed as { code?: string } | null)?.code,
      parsed,
    );
  }

  // Try to derive a filename from the Content-Disposition header; fall back
  // to "report" with a sensible extension based on content-type.
  const disposition = response.headers.get("Content-Disposition") ?? "";
  const match = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
  const contentType = response.headers.get("Content-Type") ?? "";
  const ext = contentType.includes("csv")
    ? "csv"
    : contentType.includes("pdf")
      ? "pdf"
      : contentType.includes("sheet") || contentType.includes("excel")
        ? "xlsx"
        : "csv";
  const filename =
    match?.[1]?.replace(/['"]/g, "").trim() || `report.${ext}`;

  const blob = await response.blob();
  return { blob, filename };
}

export const api = {
  get: <T>(path: string, config?: Omit<RequestConfig, "method" | "body">) =>
    apiRequest<T>(path, { ...config, method: "GET" }),
  post: <T>(
    path: string,
    body?: unknown,
    config?: Omit<RequestConfig, "method" | "body">,
  ) => apiRequest<T>(path, { ...config, method: "POST", body }),
  put: <T>(
    path: string,
    body?: unknown,
    config?: Omit<RequestConfig, "method" | "body">,
  ) => apiRequest<T>(path, { ...config, method: "PUT", body }),
  patch: <T>(
    path: string,
    body?: unknown,
    config?: Omit<RequestConfig, "method" | "body">,
  ) => apiRequest<T>(path, { ...config, method: "PATCH", body }),
  delete: <T>(path: string, config?: Omit<RequestConfig, "method" | "body">) =>
    apiRequest<T>(path, { ...config, method: "DELETE" }),
};
