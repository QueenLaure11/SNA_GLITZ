import { DescriptionHeadingProps } from "@/types/headingVariant.type";


export const DescriptionHeading = ({ children, icon }: DescriptionHeadingProps) => {
    return (
    <div className="flex p-2.5 gap-2.5 text-red-600 justify-center items-center">
      {icon && <span>{icon}</span>}
      <p className="font-['Montserrat'] font-medium text-lg leading-none tracking-normal">{children}</p>
    </div>
  );
};
