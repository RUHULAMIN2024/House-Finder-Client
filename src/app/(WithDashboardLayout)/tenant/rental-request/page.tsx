"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchTenantRequests } from "@/services/tenant";
import { IRequest } from "@/types";
import { CreditCardIcon } from "lucide-react";
import { useState, useEffect } from "react";

const TenantDashboard = () => {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadTenantRequests = async () => {
      try {
        const { data } = await fetchTenantRequests();
        setRequests(data);
      } catch (err) {
        setError("Failed to load rental requests.");
      } finally {
        setLoading(false);
      }
    };

    loadTenantRequests();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Rental Request</h2>

      <Card className="shadow-lg border">
        <CardContent className="p-4">
          {loading ? (
            <p className="text-center text-gray-600 py-6">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-600 py-6">{error}</p>
          ) : requests?.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="w-[40%]">Rental House</TableHead>
                  <TableHead className="w-[20%] text-center">Status</TableHead>
                  <TableHead className="w-[20%] text-center">
                    Landlord Contact
                  </TableHead>
                  <TableHead className="w-[20%] text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request: IRequest) => (
                  <TableRow key={request._id} className="border-b">
                    <TableCell className="font-medium">
                      {request.listingId?.title || "N/A"}
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-semibold 
                          ${
                            request.status === "approved"
                              ? "bg-green-100 text-green-600"
                              : request.status === "pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                          }`}
                      >
                        {request.status.charAt(0).toUpperCase() +
                          request.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      {request.status === "approved"
                        ? request.landlordPhone || "Not provided"
                        : "--"}
                    </TableCell>
                    <TableCell className="text-center">
                      {request.status === "approved" ? (
                        <Link href={`/payment/${request._id}`}>
                          <Button size="sm">
                            <CreditCardIcon className="w-4 h-4" />
                            Payment
                          </Button>
                        </Link>
                      ) : (
                        <span className="text-gray-400 text-sm">N/A</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-gray-600 py-6">
              No rental requests found.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantDashboard;
