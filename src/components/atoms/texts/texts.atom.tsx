import { TextProps } from "@/types/textVariant.type";
export const TextAtom = ({ children, variant }: TextProps) => {
    return (
    <div className="text-secondary-500">
      {variant === "descriptionText" && (
        <div className="font-montserrat font-medium text-xs leading-none tracking-normal">
          {children}
        </div>
      )}

      {variant === "centralizedDescriptionText" && (
        <div className="font-montserrat font-light text-lg leading-none tracking-normal text-center">
          {children}
        </div>
      )}

      {variant === "reviewCardText" && (
        <div className="font-nunito font-light italic text-sm leading-6 tracking-normal">
          {children}
        </div>
      )}

      {variant === "sampleCardText" && (
        <div className="font-poppins font-light text-lg leading-none tracking-normal">
          {children}
        </div>
      )}


    </div>
  );
};