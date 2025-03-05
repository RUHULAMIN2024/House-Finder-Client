"use server";
import { IRequest } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// get my requests
export const getTenantRequest = async (tenantId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/request/${tenantId}`,
      {
        next: {
          tags: ["request"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single request
export const getSingleRequest = async (requestId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/request/${requestId}`,
      {
        next: {
          tags: ["request"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// add request
export const addrequest = async (requestData: FormData): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/request`, {
      method: "POST",
      body: requestData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("request");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// update request
export const updaterequest = async (
  requestData: FormData,
  requestId: Partial<IRequest>
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/request/${requestId}`,
      {
        method: "PATCH",
        body: requestData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("request");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
