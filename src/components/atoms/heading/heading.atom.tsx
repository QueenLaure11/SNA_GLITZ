
import { HeadingProps, HeadingVariant } from "@/types/headingVariant.type";
export const Heading = ({ children, variant }: HeadingProps) => {
  const getHeadingClassName = (variable:HeadingVariant)=>{
          switch(variable){
            case "mainHeading":
              return "font-cinzel font-bold text-[25px] leading-none tracking-normal"
              case "firstSubHeading":
                return "font-montserrat font-medium text-[24px] leading-none tracking-normal"
                case "secondSubHeading":
                  return "font-cinzel font-normal text-[20px] leading-none tracking-normal"
                  case "thirdSubHeading":
                    return "font-cinzel font-normal text-[25px] leading-none tracking-normal"
                    case "faintHeading":
                      return "font-poppins font-light text-sm leading-none tracking-normal"
                      case "cardHeading":
                        return "font-poppins font-semibold text-sm leading-none tracking-normal"
          }
  }
    return (
    <div className="text-primary-500">
      
        <div className={getHeadingClassName(variant)}>
          {children}
        </div>

 
    </div>
  );
};
