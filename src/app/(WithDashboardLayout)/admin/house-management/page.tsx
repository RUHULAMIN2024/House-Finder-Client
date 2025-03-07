import ManageHouses from "@/components/modules/dashboard/admin/ManageHouses";
import { getAllProducts } from "@/services/Product";

const HousesManagement = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllProducts(page, "10");
  return (
    <div>
      <ManageHouses products={data} meta={meta} />
    </div>
  );
};

export default HousesManagement;
