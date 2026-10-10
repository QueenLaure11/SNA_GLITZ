import { TextAtom } from "@/components/atoms/texts/texts.atom";
import { ProductCardProps } from "@/types/productCard.type";
import Image from "next/image";

const ProductCardMolecule = ({ image, title, price, id, onClick }: ProductCardProps) => {
  return (
    <div
      className="
        rounded-2xl 
        overflow-hidden 
        cursor-pointer 
        transition 
        duration-300 
        border-[0.5px]
        border-primary-200
        bg-transparent
        hover:bg-primary-50
        w-full
        max-w-65
      "
      onClick={() => onClick?.(id)}
    >
      <div className="w-full h-64 overflow-hidden p-2 rounded-2xl">
        <Image
          src={image}
          alt={title}
          width={350}
          height={250}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="px-4 pb-4 pt-2 flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <TextAtom variant="sampleCardText">{title}</TextAtom>
          <TextAtom variant="sampleCardText">${price}</TextAtom>
        </div>
        <Image
          src={"./images/icons/Shop.svg"}
          alt={title}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default ProductCardMolecule;
