import api from "./api";
import type { GroupBalancesResponse } from "../types/balance";

export async function getGroupBalances(groupId: string) {
  const response = await api.get<GroupBalancesResponse>(
    `/groups/${groupId}/balances`
  );

  return response.data;
}