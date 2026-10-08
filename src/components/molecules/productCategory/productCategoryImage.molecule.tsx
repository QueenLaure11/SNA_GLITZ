import ShopButton from "@/components/atoms/button/button.atom";
import { Heading } from "@/components/atoms/heading/heading.atom";
import { TextAtom } from "@/components/atoms/texts/texts.atom";
import { ProductCategoryDescriptionProps } from "@/types/productCategory.type";

const ProductCategoryImage = ({ heading, description, buttonText, onClick }: ProductCategoryDescriptionProps) => {
  return (
   <div className="flex flex-col gap-4 items-center justify-center text-center w-full max-w-2xl mx-auto">
    <Heading variant="firstSubHeading">{heading}</Heading>
    <TextAtom variant="centralizedDescriptionText">{description}</TextAtom>
    <div className="w-full max-w-xs">
        <ShopButton onClick={onClick}>
      {buttonText}
    </ShopButton>
    </div>
    
   </div>
  );
};

export default ProductCategoryImage;
