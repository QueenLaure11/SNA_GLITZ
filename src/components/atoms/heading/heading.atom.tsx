
import { HeadingProps } from "@/types/headingVariant.type";
export const Heading = ({ children, variant }: HeadingProps) => {
    return (
    <div className="text-red-500">
      {variant === "mainHeading" && (
        <div className="font-['Cinzel'] font-bold text-[25px] leading-none tracking-normal">
          {children}
        </div>
      )}

      {variant === "firstSubHeading" && (
        <div className="font-['Montserrat'] font-medium text-[24px] leading-none tracking-normal">
          {children}
        </div>
      )}

      {variant === "secondSubHeading" && (
        <div className="font-['Cinzel'] font-normal text-[20px] leading-none tracking-normal">
          {children}
        </div>
      )}

      {variant === "thirdSubHeading" && (
        <div className="font-['Cinzel'] font-normal text-[25px] leading-none tracking-normal">
          {children}
        </div>
      )}

      {variant === "faintHeading" && (
        <div className="font-['poppins'] font-light text-sm leading-none tracking-normal">
          {children}
        </div>
      )}
      {variant === "cardHeading" && (
        <div className="font-['poppins'] font-semibold text-sm leading-none tracking-normal">
          {children}
        </div>
      )}
    </div>
  );
};
