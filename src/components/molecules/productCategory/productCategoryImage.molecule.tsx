import Image from "next/image";
import { ProductCategoryImageProps } from "@/types/productCategory.type";

const ProductCategoryImage = ({image,title }: ProductCategoryImageProps) => {
  return (
       <div className="items-center rounded-2xl overflow-hidden w-full max-h-80">
          <Image
            src={image}
            alt={title}
            width={576}
            height={320}
            className="object-cover w-full h-full"
          />
        </div>
  );
};

export default ProductCategoryImage;
