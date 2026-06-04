import api from "./api";
import type {
    CreateExpensePayload,
    CreateExpenseResponse, 
    GetGroupExpensesResponse
 } from "../types/expense";

export async function getGroupExpenses(groupId: string) {
  const response = await api.get<GetGroupExpensesResponse>(
    `/groups/${groupId}/expenses`
  );

  return response.data;
}

export async function createExpense(payload: CreateExpensePayload) {
  const response = await api.post<CreateExpenseResponse>(
    "/expenses",
    payload
  );

  return response.data;
}