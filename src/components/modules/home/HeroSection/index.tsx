import { Button } from "@/components/ui/button";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import banner from "@/assets/banner.png";
import NMContainer from "@/components/ui/core/NMContainer";
import Link from "next/link";

const HeroSection = () => {
  return (
    <NMContainer>
      <div
        className={`${styles.banner} border-2 border-white rounded-3xl  mt-10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="pl-12">
            <h1 className="text-4xl font-bold leading-normal">
              Don&apos;t Miss Out <br />
              Find Your Perfect Rental House Today!
            </h1>
            <p className="my-5">
              Save big this Black Friday with unbeatable deals on tech, home
              essentials, fashion, and more! Limited stock.
            </p>
            <Link href="/add-rental-house">
              <Button size="lg" className="mr-5 rounded-full">
                Add Rental House
              </Button>
            </Link>
            <Link href="/rental-house">
              <Button
                size="lg"
                className="rounded-full bg-white text-black hover:bg-gray-100"
              >
                All Rental Houses
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image src={banner} alt="room img" />
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default HeroSection;
