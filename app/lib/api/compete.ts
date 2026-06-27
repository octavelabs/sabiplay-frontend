import { Competition, JoinCompetitionResponse, JoinCompetitonRequest, ListCompetitonResponse, ListCompetitionsParams } from "../types/compete";
import { ApiResponse, PaginatedResponse } from "../types/global";
import { api } from "./client";




export async function getCompetitions(
  params: ListCompetitionsParams = {},
) {
  const res = await api.get<ApiResponse<ListCompetitonResponse>>(`/competitions`, {
    query: params
  });
  return res.data
}

export function getCompetition(
  id: string,
) {
  return api.get<ApiResponse<Competition>>(`/competitions/${id}`, {});
}

export function joinCompetition(payload: JoinCompetitonRequest) {
  return api.post<JoinCompetitionResponse>("/competitions/join", payload);
}