export interface RawBalance {
  debtorId: string;
  creditorId: string;
  amount: number;
}

export interface SimplifiedBalance {
  debtorId: string;
  creditorId: string;
  amount: number;
}

export interface GroupBalancesResponse {
  success: boolean;
  rawBalances: RawBalance[];
  simplifiedBalances: SimplifiedBalance[];
}