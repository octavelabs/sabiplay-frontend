import { SabiResponse } from "../types/global";
import { GetMyProfileResponse } from "../types/home";
import { api } from "./client";

export function getMyProfile() {
  return api.get<SabiResponse<GetMyProfileResponse>>("/auth/me");
}