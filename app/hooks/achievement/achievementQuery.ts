import { getAchievements } from "@/app/lib/api/achievement";
import { GET_ACHIEVEMENTS_KEY, GET_COMPETITIONS_KEY } from "@/app/lib/react-query/query-keys";
import { useQuery } from "@tanstack/react-query";


export function useGetAchievementQuery() {
  return useQuery({
    queryKey: [GET_ACHIEVEMENTS_KEY],
    queryFn: () => getAchievements(),
    placeholderData: (previousData) => previousData,
  });
}