import api from "./api";

export async function getGroupActivity(groupId: string) {
  const response = await api.get(
    `/groups/${groupId}/activity`
  );

  return response.data;
}