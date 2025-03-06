import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllProducts } from "@/services/Product";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const AllRentalHousePage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;

  const { data: products } = await getAllProducts(undefined, undefined, query);

  return (
    <NMContainer>
      <ProductBanner title="All Rental House" path="Home - Rental House" />
      <h2 className="text-xl font-bold my-5">Featured Collection </h2>
      <AllProducts products={products} />
    </NMContainer>
  );
};

export default AllRentalHousePage;
