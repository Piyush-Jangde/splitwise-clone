import api from "./api";
import type {
  CreateGroupResponse,
  GetGroupsResponse,
} from "../types/group";

export async function getMyGroups() {
  const response = await api.get<GetGroupsResponse>("/groups");
  return response.data;
}

export async function createGroup(name: string) {
  const response = await api.post<CreateGroupResponse>("/groups", {
    name,
  });

  return response.data;
}

export async function joinGroup(inviteCode: string) {
  const response = await api.post(`/groups/join/${inviteCode}`);
  return response.data;
}