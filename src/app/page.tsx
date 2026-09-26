"use client";
import JewelryTabs from '@/components/molecules/tabs/jewelryTabs.molecule';
import ProductCardOrganism from '@/components/organisms/products/productCardGrid.organism';
import { Tab } from '@/types/tabs.type';
import { useState } from 'react';

export default function Home() {
  
    const [activeTab, setActiveTab] = useState<Tab>("Rings");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col items-center px-80 bg-zinc-50 gap-6 py-6">
      <JewelryTabs
      handleTabClick={handleTabClick}
      activeTab={activeTab}
        tabs={["Earrings", "Rings", "Bracelets", "Necklaces", "Watches"]}
      />
      <div>
        <ProductCardOrganism activeTab={activeTab} />
      </div>
      
    </div>
  );
}
