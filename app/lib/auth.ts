export const ACCESS_TOKEN_STORAGE_KEY = "token";

export function getStoredAccessToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
}