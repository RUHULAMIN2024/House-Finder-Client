"use client";

import { useState, useEffect } from "react";
import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import { Search, DollarSign, Bed } from "lucide-react";

const AllRentalHousePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return (
        (filters.location === "" ||
          product.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (filters.minPrice === "" ||
          product.rentAmount >= parseFloat(filters.minPrice)) &&
        (filters.maxPrice === "" ||
          product.rentAmount <= parseFloat(filters.maxPrice)) &&
        (filters.bedrooms === "" ||
          product.bedrooms === parseInt(filters.bedrooms))
      );
    });
    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <NMContainer>
      <ProductBanner title="All Rental House" path="Home - Rental House" />
      <h2 className="text-xl font-bold my-5">Featured Collection</h2>

      {/* 🔍 Search and Filter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5 p-4 bg-gray-100 rounded-lg shadow-sm">
        {[
          {
            icon: <Search size={18} />,
            type: "text",
            placeholder: "Search by location",
            key: "location",
          },
          {
            icon: <DollarSign size={18} />,
            type: "number",
            placeholder: "Min Price",
            key: "minPrice",
          },
          {
            icon: <DollarSign size={18} />,
            type: "number",
            placeholder: "Max Price",
            key: "maxPrice",
          },
          {
            icon: <Bed size={18} />,
            type: "number",
            placeholder: "Bedrooms",
            key: "bedrooms",
          },
        ].map((field) => (
          <div key={field.key} className="relative flex items-center">
            <span className="absolute left-3 text-gray-400">{field.icon}</span>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={filters[field.key as keyof typeof filters]}
              onChange={(e) =>
                handleFilterChange(
                  field.key as keyof typeof filters,
                  e.target.value
                )
              }
              className="pl-10 p-2 w-full border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      {/* Filtered Products */}
      <AllProducts products={filteredProducts} />
    </NMContainer>
  );
};

export default AllRentalHousePage;
