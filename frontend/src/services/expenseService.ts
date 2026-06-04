import api from "./api";
import type { GetGroupExpensesResponse } from "../types/expense";

export async function getGroupExpenses(groupId: string) {
  const response = await api.get<GetGroupExpensesResponse>(
    `/groups/${groupId}/expenses`
  );

  return response.data;
}