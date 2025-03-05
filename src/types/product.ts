export interface IProduct {
  _id: string;

  title: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  images: string[];
  landlordId: {
    _id: string;
    email: string;
  };
  amenities?: string[];
  createdAt: Date;
  updatedAt: Date;
}
