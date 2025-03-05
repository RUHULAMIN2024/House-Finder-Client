export interface IRequest {
  _id: string;
  listingId: {
    _id: string;
    title: string;
  };
  tenantId: {
    _id: string;
    email: string;
  };
  message: string;
  status: "pending" | "approved" | "rejected";
  landlordPhone?: string;
  paymentStatus: "pending" | "paid";
  createdAt?: Date;
  updatedAt?: Date;
}
