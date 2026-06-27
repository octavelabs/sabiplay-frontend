import { Toast } from "@/app/components/Alert/toast";
import { login, signup } from "@/app/lib/api/auth";
import { ApiError } from "@/app/lib/api/errors";
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "@/app/lib/types/auth";
import { useMutation } from "@tanstack/react-query";

export function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof ApiError) return error.message;
  if (error instanceof Error) return error.message;
  return fallback;
}

export function useSignupMutation() {
  return useMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: (payload) => signup(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Failed to sign up"));
    },
  });
}

export function useLoginMutation() {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (payload) => login(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Failed to login"));
    },
  });
}
