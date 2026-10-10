"use client";
import { Heading } from "@/components/atoms/heading/heading.atom";
import JewelryTabs from "@/components/molecules/tabs/jewelryTabs.molecule";
import ProductCategoryOrganism from "@/components/organisms/productCategory/productCategory.organism";
import ProductCardOrganism from "@/components/organisms/products/productCardGrid.organism";
import ReviewList from "@/components/organisms/reviews/reviewCard.organism";
import { ProductsTemplateProps } from "@/types/templates.type";

const ProductsTemplate = ({
  handleTabClick,
  activeTab,
  productsData,
  reviewsData,
  selectedProduct,
  handleCardClick
}: ProductsTemplateProps) => {
  return (
    <div className="flex flex-col items-center bg-zinc-50 gap-6">
      <JewelryTabs
        handleTabClick={handleTabClick}
        activeTab={activeTab}
        tabs={["Earrings", "Rings", "Bracelets", "Necklaces", "Watches"]}
      />
      {selectedProduct ? (
        <div>
          <p>Selected Product ID: {selectedProduct.description}</p>
        </div>
      ) : (
        <ProductCategoryOrganism
          activeTab={activeTab}
          productsData={productsData}
          heading={"Diamond Glitzz"}
          buttonText={"Shop Diamond Glitzz"}
        />
      )}

      <ProductCardOrganism handleCardClick={handleCardClick} activeTab={activeTab} productsData={productsData} />
      <div className="flex flex-col items-center my-12 gap-10">
        <Heading variant="secondSubHeading">REVIEWS</Heading>
        <ReviewList reviews={reviewsData} />
      </div>
    </div>
  );
};

export default ProductsTemplate;
