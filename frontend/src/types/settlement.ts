export interface CreateSettlementPayload {
  amount: number;
  payerId: string;
  receiverId: string;
  groupId: string;
  note?: string;
}

export interface Settlement {
  id: string;
  amount: number;
  payerId: string;
  receiverId: string;
  groupId: string;
  note?: string | null;
  createdAt?: string;
}

export interface CreateSettlementResponse {
  success: boolean;
  message: string;
  settlement: Settlement;
}