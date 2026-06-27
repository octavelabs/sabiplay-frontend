

import { ForgotPasswordRequest, InviteRequest, LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "../types/auth";
import { ApiResponse, SabiResponse } from "../types/global";
import { api } from "./client";

export async function login(payload: LoginRequest) {
  const res = await api.post<ApiResponse<LoginResponse>>("/auth/login", payload);
  return res.data
}

export function signup(payload: SignupRequest) {
  return api.post<SignupResponse>("/auth/register", payload);
}
export function reset(payload: LoginRequest) {
  return api.post<any>("/auth/reset-password", payload);
}
export function invite(payload: InviteRequest) {
  return api.post<any>("/auth/accept-invite", payload);
}
export function forgotPassword(payload: ForgotPasswordRequest) {
  return api.post<any>("/auth/forgot-password", payload);
}
export function refreshAccessToken() {
  return api.post<LoginResponse>("/auth/refresh-token");
}

