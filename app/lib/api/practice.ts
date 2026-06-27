import { SabiResponse } from "../types/global";
import { ListPracticeQuestionResponse, ListPracticeQuestionsParams } from "../types/practice";
import { api } from "./client";

export async function getPracticeQuestion(params: ListPracticeQuestionsParams = {}) {
  const res = await api.get<SabiResponse<ListPracticeQuestionResponse>>(`/questions/practice`, {
    query: params,
  });
  return res.data;
}