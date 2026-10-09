import { ProductCardProps } from "./productCard.type";

export interface ProductCategoryDescriptionProps {
   heading: string;
    description: string;
    buttonText: string;
    onClick?: () => void;
}
export interface ProductCategoryImageProps {
   image: string;
   title: string;
}
export interface ProductCategoryOrganismProps {
   activeTab: string;
    productsData: ProductCardProps[]
    heading: string;
    buttonText: string;
}