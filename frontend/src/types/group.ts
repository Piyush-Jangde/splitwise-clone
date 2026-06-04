export interface Group {
  id: string;
  name: string;
  ownerId: string;
  inviteCode: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetGroupsResponse {
  success: boolean;
  groups: Group[];
}

export interface CreateGroupResponse {
  success: boolean;
  message: string;
  group: Group;
}

export interface JoinGroupResponse {
  success: boolean;
  message: string;
  group: Group;
}