export interface IUser {
  _id: string;
  userId: string;
  name: string;
  email: string;
  photo: string;
  phone?: string;
  hasShop?: boolean;
  isActive?: boolean;
  role: "tenant" | "landlord" | "admin";
  iat?: number;
  exp?: number;
}
