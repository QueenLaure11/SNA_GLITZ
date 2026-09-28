import { ProductCardProps } from "./productCard.type";
import { ReviewCardProps } from "./reviewCard.type";
import { Tab } from "./tabs.type";

export interface ProductsTemplateProps {
     handleTabClick: (tab: Tab) => void;
  activeTab: string;
  productsData: ProductCardProps[]
  reviewsData: ReviewCardProps[];
}