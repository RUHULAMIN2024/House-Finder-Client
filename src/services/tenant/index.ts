"use server";

// get all products
export const fetchTenantRequests = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenant/request`,
      {
        next: {
          tags: ["REQUEST"],
        },
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
