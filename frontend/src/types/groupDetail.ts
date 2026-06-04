import type { Expense } from "./expense";

export interface GroupMember {
  userId: string;
  user: {
    id: string;
    fullName: string;
    email: string;
    phoneNumber?: string | null;
    profilePhotoUrl?: string | null;
  };
}

export interface GroupDetailData {
  id: string;
  name: string;
  ownerId: string;
  inviteCode: string;

  owner: {
    id: string;
    fullName: string;
    email: string;
  };

  members: GroupMember[];
  expenses: Expense[];
  settlements: unknown[];
  activities: unknown[];
}

export interface GetGroupDetailResponse {
  success: boolean;
  group: GroupDetailData;
}