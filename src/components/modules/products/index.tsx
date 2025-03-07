import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map((product: IProduct, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
