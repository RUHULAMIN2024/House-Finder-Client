"use client";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { IRequest } from "@/types";
import { Tooltip } from "@/components/ui/tooltip";
import { CheckCircle, XCircle } from "lucide-react";
import { updateRequestStatus } from "@/services/landlord";
import { toast } from "sonner";

const RequestTableRow = ({ req }: { req: IRequest }) => {
  const handleStatusUpdate = async (
    id: string,
    status: "approved" | "rejected"
  ) => {
    console.log(status);
    const res = await updateRequestStatus(id, status);
    if (res.success) {
      toast.success(res.message);
    }
  };

  return (
    <TableRow>
      <TableCell>{req.listingId?.title || "N/A"}</TableCell>
      <TableCell>{req.tenantId?.email || "N/A"}</TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded text-white text-sm ${
            req.status === "pending"
              ? "bg-yellow-500"
              : req.status === "approved"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {req.status}
        </span>
      </TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded text-white text-sm ${
            req.paymentStatus === "pending" ? "bg-gray-500" : "bg-blue-500"
          }`}
        >
          {req.paymentStatus}
        </span>
      </TableCell>
      <TableCell>
        {req.landlordPhone ? (
          <Tooltip>
            <span className="text-blue-600">{req.landlordPhone}</span>
          </Tooltip>
        ) : (
          "N/A"
        )}
      </TableCell>

      <TableCell className="flex">
        <Tooltip>
          <Button
            title="Approve"
            variant="ghost"
            className="text-green-600 hover:bg-green-100"
            onClick={() => handleStatusUpdate(req._id, "approved")}
            disabled={req.status !== "pending"}
          >
            <CheckCircle className="w-5 h-5" />
          </Button>
        </Tooltip>
        <Tooltip>
          <Button
            title="Reject"
            variant="ghost"
            className="text-red-600 hover:bg-red-100"
            onClick={() => handleStatusUpdate(req._id, "rejected")}
            disabled={req.status !== "pending"}
          >
            <XCircle className="w-5 h-5" />
          </Button>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default RequestTableRow;
