import { ButtonProps } from "@/types/button.type";


const ShopButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        border-red-200
        bg-transparent
        h-10.5
        w-full
        px-7.5
        rounded-3xl
        border-[0.5px]
        py-2.5
        font-['Poppins']
        text-sm
        font-normal
        leading-none
        text-red-200
        transition
        hover:bg-[#FFF5F5]
      "
    >
      {children}
    </button>
  );
};

export default ShopButton;