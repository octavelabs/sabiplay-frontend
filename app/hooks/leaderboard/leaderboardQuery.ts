import { getLeaderboard } from "@/app/lib/api/leaderboard";
import { GET_LEADERBOARD_KEY } from "@/app/lib/react-query/query-keys";
import { ListLeaderboardParams } from "@/app/lib/types/leaderboard";
import { useQuery } from "@tanstack/react-query";


export function useGetLeaderboardQuery(params: ListLeaderboardParams) {
  return useQuery({
    queryKey: [GET_LEADERBOARD_KEY, params],
    queryFn: () => getLeaderboard(params),
    placeholderData: (previousData) => previousData,
  });
}