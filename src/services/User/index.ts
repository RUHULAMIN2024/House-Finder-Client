"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllUsers = async (page?: string, limit?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user?limit=${limit}&page=${page}`,
      {
        next: {
          tags: ["USER"],
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
export const updateProfile = async (updateData: FormData) => {
  try {
    console.log(updateData);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/update-profile`,
      {
        method: "PATCH",
        body: updateData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    revalidateTag("USER");

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
