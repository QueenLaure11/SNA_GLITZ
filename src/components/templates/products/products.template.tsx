"use client";
import { Heading } from "@/components/atoms/heading/heading.atom";
import ProductCategoryDescription from "@/components/molecules/productCategory/productCategoryDescription.molecule";
import JewelryTabs from "@/components/molecules/tabs/jewelryTabs.molecule";
import ProductCardOrganism from "@/components/organisms/products/productCardGrid.organism";
import ReviewList from "@/components/organisms/reviews/reviewCard.organism";
import { ProductsTemplateProps } from "@/types/templates.type";


const ProductsTemplate = ({handleTabClick, activeTab, productsData, reviewsData}:ProductsTemplateProps) => {

  return (
    <div className="flex flex-col items-center bg-zinc-50 gap-6">
      <JewelryTabs
        handleTabClick={handleTabClick}
        activeTab={activeTab}
        tabs={["Earrings", "Rings", "Bracelets", "Necklaces", "Watches"]}
      />
            <ProductCategoryDescription heading={"Diamond Glitzz"} description={"Make your fingers stunning with Diamond Glitzz - the perfect gift for yourself!"} buttonText={"Shop Diamond Glitzz"} />

      <ProductCardOrganism activeTab={activeTab} productsData={productsData} />
      <div className="flex flex-col items-center my-12 gap-10">
        <Heading variant="secondSubHeading">REVIEWS</Heading>
        <ReviewList reviews={reviewsData} />
      </div>
    </div>
  );
}

export default ProductsTemplate
