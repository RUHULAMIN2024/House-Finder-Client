import ManageHouses from "@/components/modules/dashboard/landlord/ManageHouses";
import { getAllProducts } from "@/services/Product";

const HousesManagement = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllProducts(page, "3");
  return (
    <div>
      <ManageHouses products={data} meta={meta} />
    </div>
  );
};

export default HousesManagement;
