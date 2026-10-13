import { DescriptionHeading } from "@/components/atoms/heading/descriptionHeading.atom";
import { IconRepository } from "@/lib/repository/iconRepository";
import { ProductDetailsDescriptionProps } from "@/types/productDetails.type";


const ProductDetailsDescription = ({ heading, productName, productDescription, productDetails, quantity, size, price, }: ProductDetailsDescriptionProps) => {
  return (
   <div className="flex flex-col gap-2.5 w-full">
      <DescriptionHeading icon={<IconRepository.BackwardArrow />}>Description & Details</DescriptionHeading>
    
   </div>
  );
};

export default ProductDetailsDescription;
