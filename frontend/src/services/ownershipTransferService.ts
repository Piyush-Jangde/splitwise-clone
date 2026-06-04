import api from "./api";

export async function createOwnershipTransfer(
  groupId: string,
  proposedOwnerId: string
) {
  const response = await api.post(
    `/groups/${groupId}/ownership-transfer`,
    {
      proposedOwnerId,
    }
  );

  return response.data;
}

export async function getPendingOwnershipTransfers() {
  const response = await api.get(
    "/ownership-transfers/pending"
  );

  return response.data;
}

export async function acceptOwnershipTransfer(
  transferId: string
) {
  const response = await api.post(
    `/ownership-transfers/${transferId}/accept`
  );

  return response.data;
}

export async function rejectOwnershipTransfer(
  transferId: string
) {
  const response = await api.post(
    `/ownership-transfers/${transferId}/reject`
  );

  return response.data;
}