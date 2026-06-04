import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  acceptOwnershipTransfer,
  getPendingOwnershipTransfers,
  rejectOwnershipTransfer,
} from "../services/ownershipTransferService";

type PendingTransfer = {
  id: string;
  groupId: string;
  status: string;
  group: {
    id: string;
    name: string;
  };
  currentOwner: {
    id: string;
    fullName: string;
    email: string;
  };
};

function OwnershipTransfers() {
  const [transfers, setTransfers] = useState<PendingTransfer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTransfers() {
        try {
        const data =
            await getPendingOwnershipTransfers();

        setTransfers(data.transfers);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    loadTransfers();
    }, []);

  async function handleAccept(transferId: string) {
    try {
      await acceptOwnershipTransfer(transferId);
      await refreshTransfers();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleReject(transferId: string) {
    try {
      await rejectOwnershipTransfer(transferId);
      await refreshTransfers();
    } catch (error) {
      console.error(error);
    }
  }

  async function refreshTransfers() {
    try {
        const data =
        await getPendingOwnershipTransfers();

        setTransfers(data.transfers);
    } catch (error) {
        console.error(error);
    }
    }

  if (loading) {
    return <p>Loading ownership requests...</p>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-indigo-50 to-amber-50 px-4 py-6">
        <div className="mx-auto max-w-4xl space-y-6">
        <header className="rounded-3xl bg-linear-to-r from-indigo-600 via-cyan-600 to-teal-600 p-6 text-white shadow-lg">
            <Link
            to="/dashboard"
            className="text-sm font-medium text-indigo-100 hover:text-white"
            >
            ← Back to Dashboard
            </Link>

            <h1 className="mt-4 text-3xl font-bold">
            Ownership Requests
            </h1>

            <p className="mt-2 text-indigo-50">
            Review group ownership transfer requests sent to you.
            </p>
        </header>

        <section className="rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-sm backdrop-blur">
            {transfers.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-600">
                No pending ownership transfer requests.
            </p>
            ) : (
            <ul className="space-y-4">
                {transfers.map((transfer) => (
                <li
                    key={transfer.id}
                    className="rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5"
                >
                    <p className="text-slate-700">
                    <strong className="text-slate-900">
                        {transfer.currentOwner.fullName}
                    </strong>{" "}
                    wants to transfer ownership of{" "}
                    <strong className="text-indigo-700">
                        {transfer.group.name}
                    </strong>{" "}
                    to you.
                    </p>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => handleAccept(transfer.id)}
                        className="rounded-xl bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700"
                    >
                        Accept
                    </button>

                    <button
                        type="button"
                        onClick={() => handleReject(transfer.id)}
                        className="rounded-xl bg-rose-600 px-4 py-2 font-medium text-white hover:bg-rose-700"
                    >
                        Reject
                    </button>

                    <Link
                        to={`/groups/${transfer.group.id}`}
                        className="rounded-xl border border-slate-300 px-4 py-2 text-center font-medium text-slate-700 hover:bg-slate-50"
                    >
                        Open Group
                    </Link>
                    </div>
                </li>
                ))}
            </ul>
            )}
        </section>
        </div>
    </div>
    );
}

export default OwnershipTransfers;