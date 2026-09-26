export type Tab = "Earrings" | "Rings" | "Bracelets" | "Necklaces" | "Watches";

export interface JewelryTabsProps {
  tabs: Tab[];
  handleTabClick: (tab: Tab) => void;
  activeTab: string;
}