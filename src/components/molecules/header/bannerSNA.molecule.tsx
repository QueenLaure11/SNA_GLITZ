
import { Heading } from "@/components/atoms/heading/heading.atom";
import { bannerSNAMoleculeProps } from "@/types/layout.type";
import Image from "next/image";

const BannerSNAMolecule = ({ bannerTitle }: bannerSNAMoleculeProps) => {

  return (
    <div className=" flex w-full h-20 bg-white items-center">
        <div className="w-full flex items-center justify-between px-6 py-4 bg-white">
            <div className="flex items-center gap-4">
                <Image
          src="/images/icons/Paint Palette.svg"
          alt="Paint Palette Icon"
          width={24}
          height={24}
        />
                <Image
          src="/images/icons/Favorite.svg"
          alt="Favorite Icon"
          width={24}
          height={24}
        />
            </div>
            <Heading variant="mainHeading">{bannerTitle}</Heading>
            <div className="flex items-center gap-4">
                              <Image
          src="/images/icons/Union.svg"
          alt="Union Icon"
          width={22}
          height={22}
        />
        <div className="flex items-center gap-2.5">
                                <Image
          src="/images/icons/Items Quantity.svg"
          alt="Items Quantity Icon"
          width={24}
          height={24}
        />
                                <Image
          src="/images/icons/Shop.svg"
          alt="Shop Icon"
          width={24}
          height={24}
        />
        </div>
            </div>

        </div>
    </div>
  );
};

export default BannerSNAMolecule;
