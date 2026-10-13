import Image from "next/image";
import { ProductDetailsImageProps } from "@/types/productDetails.type";

const ProductDetailsImage = ({image,title }: ProductDetailsImageProps) => {
  return (
       <div className="items-center rounded-2xl overflow-hidden w-full max-h-1/4">
          <Image
            src={image}
            alt={title}
            width={610}
            height={610}
            className="object-cover w-full h-full"
          />
        </div>
  );
};

export default ProductDetailsImage;
