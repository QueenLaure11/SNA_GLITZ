export type Tab = "Earrings" | "Rings" | "Bracelets" | "Necklaces" | "Watches";

export interface JewelryTabsProps {
  tabs: Tab[];
  onTabClick: (tab: Tab) => void;
}