"use client";

import { NMTable } from "@/components/ui/core/NMTable/index";
import { IMeta, IUser } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";
import { toast } from "sonner";
import { deleteUser } from "@/services/User";

const ManageUser = ({ users, meta }: { users: IUser[]; meta: IMeta }) => {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[] | []>([]);

  const handleDelete = async (userId: string) => {
    const res = await deleteUser(userId);
    if (res.success) {
      toast.success(res.message);
    }
  };

  const columns: ColumnDef<IUser>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            if (value) {
              setSelectedIds((prev) => [...prev, row.original._id]);
            } else {
              setSelectedIds(
                selectedIds.filter((id) => id !== row.original._id)
              );
            }
            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <span>{row.original.role}</span>,
    },

    {
      accessorKey: "isActive",
      header: "IsActive",
      cell: ({ row }) => (
        <span> {row.original?.isActive ? "True" : "False"}</span>
      ),
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Users</h1>
      </div>
      <NMTable columns={columns} data={users || []} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageUser;
