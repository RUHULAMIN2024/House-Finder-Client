"use server";
import { cookies } from "next/headers";

import { revalidateTag } from "next/cache";

// get all products
export const getAllProducts = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  if (query?.price) {
    params.append("minPrice", "0");
    params.append("maxPrice", query?.price.toString());
  }

  if (query?.category) {
    params.append("categories", query?.category.toString());
  }
  if (query?.brand) {
    params.append("brands", query?.brand.toString());
  }
  if (query?.rating) {
    params.append("ratings", query?.rating.toString());
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/listings?limit=${limit}&page=${page}&${params}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
        headers: { Authorization: (await cookies()).get("accessToken")!.value },
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getAllUsers = async (page?: string, limit?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users?limit=${limit}&page=${page}`,
      {
        next: {
          tags: ["PRODUCT"],
        },
        headers: { Authorization: (await cookies()).get("accessToken")!.value },
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
