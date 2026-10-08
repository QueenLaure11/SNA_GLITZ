import { ButtonProps } from "@/types/button.type";

const ShopButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        border-primary-200
        bg-transparent
        h-10.5
        w-full
        px-7.5
        rounded-3xl
        border-[0.5px]
        py-2.5
        font-poppins
        text-lg
        font-normal
        leading-none 
        text-primary-200
        transition
        hover:bg-primary-50
      "
    >
      {children}
    </button>
  );
};

export default ShopButton;
