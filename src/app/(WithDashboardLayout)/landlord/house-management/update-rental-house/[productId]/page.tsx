import UpdateHouseForm from "@/components/modules/products/upadate-house-form/UpdateHouseForm";
import { getSingleProduct } from "@/services/landlord";

const UpdateHousePage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);
  console.log(product);

  return (
    <div className="flex justify-center items-center">
      <UpdateHouseForm product={product} />
    </div>
  );
};

export default UpdateHousePage;
