import { getCompetition, getCompetitions } from "@/app/lib/api/compete";
import { GET_COMPETITION_KEY, GET_COMPETITIONS_KEY } from "@/app/lib/react-query/query-keys";
import { ListCompetitionsParams } from "@/app/lib/types/compete";
import { useQuery } from "@tanstack/react-query";


export function useGetCompetitonsQuery(params: ListCompetitionsParams = {}) {
  return useQuery({
    queryKey: [GET_COMPETITIONS_KEY, params],
    queryFn: () => getCompetitions(params),
    placeholderData: (previousData) => previousData,
  });
}

export function useGetCompetitionQuery(id: string) {
  return useQuery({
    queryKey: [GET_COMPETITION_KEY],
    queryFn: () => getCompetition(id),
    placeholderData: (previousData) => previousData,
  });
}