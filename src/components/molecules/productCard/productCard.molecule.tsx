import { TextAtom } from "@/components/atoms/texts/texts.atom";
import { ProductCardProps } from "@/types/productCard.type";
import Image from "next/image";

const ProductCardMolecule = ({ image, title, price }: ProductCardProps) => {
  return (
    <div
      className="
        rounded-2xl 
        overflow-hidden 
        shadow-md 
        cursor-pointer 
        transition 
        duration-300 
        hover:scale-[1] 
        hover:shadow-xl
        border-[0.5px]
        border-red-200
        bg-transparent
        hover:bg-[#FFF5F5]
        w-full
      "
    >
      <div className="w-full overflow-hidden p-2 rounded-2xl">
        <Image
          src={image}
          alt={title}
          width={350}
          height={250}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>

      <div className="px-4 pb-4 flex justify-between items-center">
        <div className="flex flex-col gap-1">
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
