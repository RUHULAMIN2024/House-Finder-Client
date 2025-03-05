import ManageUser from "@/components/modules/dashboard/admin/ManageUser";
import { getAllUsers } from "@/services/User";

const HousesManagement = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllUsers(page, "3");
  return (
    <div>
      <ManageUser users={data} meta={meta} />
    </div>
  );
};

export default HousesManagement;
