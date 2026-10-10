"use client";
import ProductsTemplate from "@/components/templates/products/products.template";
import { productsData } from "@/lib/data/productData";
import { reviewsData } from "@/lib/data/reviewsData";
import { ProductCardProps } from "@/types/productCard.type";
import { Tab } from "@/types/tabs.type";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("Rings");
  const [selectedProduct, setSelectedProduct] = useState<ProductCardProps | null>(null);

  const handleSelect = (productId: string) => {
    const product = productsData.find((p) => p.id === productId);
    setSelectedProduct(product || null);
    console.log("Selected product ID:", productId);
  };

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col items-center px-80 bg-zinc-50 gap-6 py-6">
      <ProductsTemplate
        handleTabClick={handleTabClick}
        activeTab={activeTab}
        productsData={productsData}
        reviewsData={reviewsData}
        selectedProduct={selectedProduct}
        handleCardClick={handleSelect}
      />
    </div>
  );
}
