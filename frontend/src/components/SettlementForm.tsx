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
  <section className="rounded-3xl bg-white p-6 shadow-sm">
    <div className="mb-5">
      <p className="text-sm font-medium text-teal-600">
        Mark money as paid
      </p>
      <h2 className="text-xl font-semibold text-slate-900">
        Record Settlement
      </h2>
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="text-sm font-medium text-slate-700">
            Paid by
          </label>
          <select
            value={payerId}
            onChange={(e) => setPayerId(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
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
          <label className="text-sm font-medium text-slate-700">
            Paid to
          </label>
          <select
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
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
          <label className="text-sm font-medium text-slate-700">
            Amount
          </label>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-teal-600 px-5 py-2 font-medium text-white shadow-sm hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Recording..." : "Record Settlement"}
      </button>
    </form>
  </section>
);
}

export default SettlementForm;