import { TextProps } from "@/types/textVariant.type";
export const TextAtom = ({ children, variant }: TextProps) => {
    return (
    <div className="text-gray-600">
      {variant === "descriptionText" && (
        <div className="font-['Montserrat'] font-medium text-xs leading-none tracking-normal">
          {children}
        </div>
      )}

      {variant === "centralizedDescriptionText" && (
        <div className="font-['Montserrat'] font-light text-lg leading-none tracking-normal text-center">
          {children}
        </div>
      )}

      {variant === "reviewCardText" && (
        <div className="font-['Nunito'] font-light italic text-sm leading-none tracking-normal">
          {children}
        </div>
      )}

      {variant === "sampleCardText" && (
        <div className="font-['Poppins'] font-light text-lg leading-none tracking-normal">
          {children}
        </div>
      )}


    </div>
  );
};