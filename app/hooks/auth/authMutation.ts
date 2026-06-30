import { Toast } from "@/app/components/Alert/toast";
import { forgotPassword, login, resendOTP, resetPassword, signup, verifyOTP } from "@/app/lib/api/auth";
import { ApiError } from "@/app/lib/api/errors";
import { ForgotPasswordRequest, LoginRequest, LoginResponse, ResetPasswordRequest, SignupRequest, SignupResponse, VerifyOTPRequest } from "@/app/lib/types/auth";
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

export function useForgotPasswordMutation() {
  return useMutation<SignupResponse, Error, ForgotPasswordRequest>({
    mutationFn: (payload) => forgotPassword(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Request Failed"));
    },
  });
}

export function useResetPasswordMutation() {
  return useMutation<SignupResponse, Error, ResetPasswordRequest>({
    mutationFn: (payload) => resetPassword(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Request Failed"));
    },
  });
}

export function useResendOTPMutation() {
  return useMutation<SignupResponse, Error, ForgotPasswordRequest>({
    mutationFn: (payload) => resendOTP(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Request Failed"));
    },
  });
}

export function useVerifyOTPMutation() {
  return useMutation<SignupResponse, Error, VerifyOTPRequest>({
    mutationFn: (payload) => verifyOTP(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Request Failed"));
    },
  });
}