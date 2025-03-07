import { getAllRequest } from "@/services/landlord";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import RequestTableRow from "@/components/modules/dashboard/landlord/RequestTableRow";
import { IRequest } from "@/types";

const RequestManagement = async () => {
  const { data } = await getAllRequest();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Manage Rental Request</h1>
      <Card>
        <CardContent className="p-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>House</TableHead>
                <TableHead>Tenant Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Landlord Phone</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((req: IRequest) => (
                <RequestTableRow req={req} key={req._id} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestManagement;
