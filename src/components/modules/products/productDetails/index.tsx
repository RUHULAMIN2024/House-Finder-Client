"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addrequest } from "@/services/Request";
import { IProduct } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [requestMessage, setRequestMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRentRequest = async () => {
    try {
      const res = await addrequest({
        listingId: product?._id,
        message: requestMessage,
      });
      if (res.success) {
        setLoading(false);
        console.error(res);

        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.message);

      console.error(err);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-4 border border-white p-4 rounded-md my-5 shadow-sm">
      <div>
        <Image
          src={product?.images[0]}
          alt="product image"
          width={500}
          height={500}
          className="rounded-md w-full object-cover h-80"
        />
        <div className="grid grid-cols-3 gap-4 mt-5">
          {product?.images.slice(0, 3).map((image: string, idx: number) => (
            <Image
              key={idx}
              src={image}
              alt="product image"
              width={500}
              height={500}
              className="rounded-md w-full object-cover h-40"
            />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-md p-4">
        <h2 className="font-bold text-xl mb-4">{product?.title}</h2>
        <p className="text-justify text-gray-500 font-light text-sm">
          {product?.description}
        </p>
        <div className="flex items-center justify-between my-5 text-gray-500 text-xs">
          <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            {4} Ratings
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Bed Rooms: {product?.bedrooms}
          </p>
          <p className="rounded-full px-4 py-1 bg-gray-100">
            Location: {product?.location}
          </p>
        </div>
        <hr />
        <p className="my-2 font-bold">
          Rent:
          <span className="font-semibold">$ {product?.rentAmount}</span>
        </p>
        <hr />

        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant="default" className="mt-5 w-full">
              Rent Request
            </Button>
          </DialogTrigger>
          <DialogContent className="p-4">
            <DialogTitle className="text-lg font-semibold">
              Send Rental Request
            </DialogTitle>
            <textarea
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter move-in date, duration, and any special requests..."
              value={requestMessage}
              onChange={(e) => setRequestMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                variant="default"
                onClick={handleRentRequest}
                disabled={loading}
                className="w-full"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductDetails;
