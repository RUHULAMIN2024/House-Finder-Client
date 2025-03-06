import ProductBanner from "@/components/modules/products/banner";
import ProductDetails from "@/components/modules/products/productDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/Product";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);
  console.log(product, productId);

  return (
    <NMContainer>
      <ProductBanner
        title="Rental House Details"
        path="Home - Rental Houses - Rental House Details"
      />
      <ProductDetails product={product} />
    </NMContainer>
  );
};

export default ProductDetailsPage;
