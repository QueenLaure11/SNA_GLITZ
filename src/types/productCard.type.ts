import { Tab } from "./tabs.type";
export interface ProductCardProps {
    id: string;
  category?: Tab;
  title: string;
  price: number;
  image: string;
  description?: string;
  details?: string;
  onClick?: (id: string) => void;
  sizes?: string | string[];
}
export interface ProductCardOrganismProps {
activeTab: string;
productsData: ProductCardProps[]
handleCardClick?: (id: string) => void;
}