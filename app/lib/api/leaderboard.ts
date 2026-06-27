import { ApiResponse } from "../types/global";
import { ListLeaderboardParams, ListLeaderboardResponse } from "../types/leaderboard";
import { api } from "./client";



export async function getLeaderboard(
  params: ListLeaderboardParams = {},
) {
  const res = await api.get<ApiResponse<ListLeaderboardResponse>>(`/users/leaderboard`, {
    query: params
  });
  return res.data
}