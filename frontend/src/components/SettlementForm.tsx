import { useState } from "react";
import { createSettlement } from "../services/settlementService";

type GroupMember = {
  user: {
    id: string;
    fullName: string;
    email?: string;
  };
};

type SettlementFormProps = {
  groupId: string;
  members: GroupMember[];
  onSettlementCreated: () => void;
};

type ApiError = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

function SettlementForm({
  groupId,
  members,
  onSettlementCreated,
}: SettlementFormProps) {
  const [payerId, setPayerId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!payerId || !receiverId || !amount) {
      alert("Please fill all fields");
      return;
    }

    if (payerId === receiverId) {
      alert("Payer and receiver cannot be the same");
      return;
    }

    const numericAmount = Number(amount);

    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    try {
      setLoading(true);

      await createSettlement({
        groupId,
        payerId,
        receiverId,
        amount: numericAmount,
      });

      setPayerId("");
      setReceiverId("");
      setAmount("");

      onSettlementCreated();
    } catch (error: unknown) {
    console.log("SETTLEMENT ERROR:", error);

    const apiError = error as ApiError;

    alert(
        apiError.response?.data?.message ||
        JSON.stringify(apiError.response?.data) ||
        "Failed to record settlement"
    );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-4 rounded-lg space-y-4"
    >
      <h2 className="text-xl font-semibold">Record Settlement</h2>

      <div>
        <label className="block mb-1">Paid by</label>
        <select
          value={payerId}
          onChange={(e) => setPayerId(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
        >
          <option value="">Select payer</option>
          {members.map((member) => (
            <option key={member.user.id} value={member.user.id}>
              {member.user.fullName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">Paid to</label>
        <select
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
        >
          <option value="">Select receiver</option>
          {members.map((member) => (
            <option key={member.user.id} value={member.user.id}>
              {member.user.fullName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Enter amount"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Recording..." : "Record Settlement"}
      </button>
    </form>
  );
}

export default SettlementForm;