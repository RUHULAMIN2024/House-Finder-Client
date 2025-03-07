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

export const updatePassword = async (
  currentPassword: string,
  newPassword: string
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/update-password`,
      {
        method: "PUT",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      }
    );

    const data = await res.json();
    console.log(data);

    // Return data or handle errors
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.message || "Password update failed");
    }
  } catch (error: any) {
    console.error(error);
    return { error: error.message };
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/${userId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    revalidateTag("USER");

    const data = await res.json();
    console.log(data);

    // Return success or error message
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.message || "User deletion failed");
    }
  } catch (error: any) {
    console.error(error);
    return { error: error.message };
  }
};
