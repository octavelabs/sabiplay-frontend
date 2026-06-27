import { Toast } from "@/app/components/Alert/toast";
import { ApiError } from "@/app/lib/api";
import { joinCompetition } from "@/app/lib/api/compete";
import { JoinCompetitionResponse, JoinCompetitonRequest } from "@/app/lib/types/compete";
import { useMutation } from "@tanstack/react-query";

export function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof ApiError) return error.message;
  if (error instanceof Error) return error.message;
  return fallback;
}

export function useJoinCompetitionMutation() {
  return useMutation<JoinCompetitionResponse, Error, JoinCompetitonRequest>({
    mutationFn: (payload) => joinCompetition(payload),
    onError: (error: unknown) => {
      Toast("error", getErrorMessage(error, "Failed to sign up"));
    },
  });
}