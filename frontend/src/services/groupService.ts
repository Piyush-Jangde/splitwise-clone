import api from "./api";
import type {
  CreateGroupResponse,
  GetGroupsResponse,
} from "../types/group";
import type {
    GetGroupDetailResponse
} from "../types/groupDetail";


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

export async function joinGroupByInviteCode(inviteCode: string) {
  const response = await api.post(`/groups/join/${inviteCode}`);
  return response.data;
}

export async function getGroupDetail(groupId: string) {
  const response =
    await api.get<GetGroupDetailResponse>(
      `/groups/${groupId}`
    );

  return response.data;
}

export async function renameGroup(
  groupId: string,
  name: string
) {
  const response = await api.patch(
    `/groups/${groupId}`,
    { name }
  );

  return response.data;
}

export async function removeMember(
  groupId: string,
  userId: string
) {
  const response = await api.delete(
    `/groups/${groupId}/members/${userId}`
  );

  return response.data;
}