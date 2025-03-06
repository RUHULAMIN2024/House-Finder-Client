"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { IProduct } from "@/types";
import { Heart, KeyRound, Star, MapPin, Bed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { addrequest } from "@/services/Request";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: IProduct }) => {
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
    <Card className="p-3 shadow-md rounded-2xl border border-gray-200">
      <CardHeader className="relative p-0 h-52 rounded-lg overflow-hidden">
        <Image
          src={
            product?.images[0] ||
            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          }
          width={500}
          height={500}
          alt="product image"
          className="h-52 object-cover w-full"
        />
      </CardHeader>

      <CardContent className="p-3">
        <Link href={`/rental-house/${product?._id}`} passHref>
          <CardTitle
            title={product?.title}
            className="font-semibold cursor-pointer text-md text-gray-800 hover:underline"
          >
            {product?.title.length > 25
              ? product?.title?.slice(0, 25) + "..."
              : product?.title}
          </CardTitle>
        </Link>

        <div className="flex items-center justify-between my-2 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span>{product?.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-gray-500" />
            <span>{product?.bedrooms} Beds</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-lg font-semibold text-gray-900">
            $ {product?.rentAmount.toFixed(2)} /mo
          </p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            <span className="text-sm font-medium text-gray-700">4.5</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 flex gap-2 items-center justify-between">
        <Link href={`/rental-house/${product?._id}`} passHref>
          <Button size="sm" variant="outline" className="w-32">
            View Details
          </Button>
        </Link>
        <Button
          variant="outline"
          size="sm"
          className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
        >
          <KeyRound />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
        >
          <Heart />
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="default" className="w-32">
              Rent Request
            </Button>
          </DialogTrigger>
          <DialogContent className="p-4">
            <h2 className="text-lg font-semibold">Send Rental Request</h2>
            <textarea
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter move-in date, duration, and any special requests..."
              value={requestMessage}
              onChange={(e) => setRequestMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline">Cancel</Button>
              <Button
                variant="default"
                onClick={handleRentRequest}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
