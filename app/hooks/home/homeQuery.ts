import { getMyProfile } from "@/app/lib/api/home";
import { GET_MY_PROFILE_KEY } from "@/app/lib/react-query/query-keys";
import { useQuery } from "@tanstack/react-query";

export function useGetUserProfileQuery() {
  return useQuery({
    queryKey: [GET_MY_PROFILE_KEY],
    queryFn: () => getMyProfile(),
    placeholderData: (previousData) => previousData,
  });
}
