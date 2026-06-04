import api from "./api";

type CreateSettlementData = {
  groupId: string;
  payerId: string;
  receiverId: string;
  amount: number;
};

export async function createSettlement(data: CreateSettlementData) {
  const response = await api.post("/settlements", data);
  return response.data;
}