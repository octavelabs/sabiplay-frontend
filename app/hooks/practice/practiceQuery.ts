import { getPracticeQuestion } from "@/app/lib/api/practice";
import { GET_PRACTICE_QUESTION_KEY } from "@/app/lib/react-query/query-keys";
import { ListPracticeQuestionsParams } from "@/app/lib/types/practice";
import { useQuery } from "@tanstack/react-query";


export function useGetPracticeQuestionsQuery(
  params: ListPracticeQuestionsParams,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: [GET_PRACTICE_QUESTION_KEY, params],
    queryFn: () => getPracticeQuestion(params),
    placeholderData: (previousData) => previousData,
    enabled: options?.enabled ?? true,
  });
}