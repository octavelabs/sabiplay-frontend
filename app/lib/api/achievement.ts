import { ListAchievementsResponse } from "../types/achievement";
import { ApiResponse } from "../types/global";
import { api } from "./client";



export async function getAchievements(
) {
  const res = await api.get<ApiResponse<ListAchievementsResponse>>(`/achievements`, {});
  return res.data
}