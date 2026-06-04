export type SplitType = "EQUAL" | "UNEQUAL" | "PERCENTAGE" | "SHARE";

export interface ExpenseParticipant {
  id?: string;
  userId: string;
  amountOwed?: number;
  percentage?: number;
  shares?: number;
  user?: {
    id: string;
    fullName: string;
    email: string;
  };
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  splitType: SplitType;
  payerId: string;
  groupId: string;
  createdById?: string;
  createdAt?: string;
  updatedAt?: string;
  payer?: {
    id: string;
    fullName: string;
    email: string;
  };
  createdBy?: {
    id: string;
    fullName: string;
    email: string;
  };
  participants?: ExpenseParticipant[];
}

export interface GetGroupExpensesResponse {
  success: boolean;
  expenses: Expense[];
}

export interface CreateExpensePayload {
  description: string;
  amount: number;
  splitType: SplitType;
  payerId: string;
  groupId: string;
  participants: {
    userId: string;
    amountOwed?: number;
    percentage?: number;
    shares?: number;
  }[];
}

export interface CreateExpenseResponse {
  success: boolean;
  message: string;
  expense: Expense;
}