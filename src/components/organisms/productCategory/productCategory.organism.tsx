import ProductCategoryDescription from "@/components/molecules/productCategory/productCategoryDescription.molecule";
import ProductCategoryImage from "@/components/molecules/productCategory/productCategoryImage.molecule";
// import { productsData } from "@/lib/data/productData";
import { ProductCategoryOrganismProps } from "@/types/productCategory.type";

const ProductCategoryOrganism = ({
  activeTab,
  productsData,
  heading,
  buttonText,
}: ProductCategoryOrganismProps) => {
  const rings = productsData.filter((p) => p.category === "Rings")[0];
  const earrings = productsData.filter((p) => p.category === "Earrings")[0];
  const bracelets = productsData.filter((p) => p.category === "Bracelets")[0];
  const watches = productsData.filter((p) => p.category === "Watches")[0];
  const necklaces = productsData.filter((p) => p.category === "Necklaces")[0];
  return (
    <>
      {activeTab === "Rings" && (
        <div className="flex gap-2 w-full items-center justify-between">
          <ProductCategoryDescription
            heading={heading}
            description={rings.description || ""}
            buttonText={buttonText}
          />
          <ProductCategoryImage image={rings?.image} title={rings?.title} />
        </div>
      )}
      {activeTab === "Earrings" && (
        <div className="flex gap-2 items-center justify-between">
          <ProductCategoryDescription
            heading={heading}
            description={earrings.description || ""}
            buttonText={buttonText}
          />
          <ProductCategoryImage image={earrings?.image} title={rings?.title} />
        </div>
      )}
      {activeTab === "Bracelets" && (
        <div className="flex gap-2 items-center justify-between">
          <ProductCategoryDescription
            heading={heading}
            description={bracelets.description || ""}
            buttonText={buttonText}
          />
          <ProductCategoryImage image={bracelets?.image} title={bracelets?.title} />
        </div>
      )}
      {activeTab === "Watches" && (
        <div className="flex gap-2 items-center justify-between">
          <ProductCategoryDescription
            heading={heading}
            description={watches.description || ""}
            buttonText={buttonText}
          />
          <ProductCategoryImage image={watches?.image} title={watches?.title} />
        </div>
      )}
      {activeTab === "Necklaces" && (
        <div className="flex gap-2 items-center justify-between">
          <ProductCategoryDescription
            heading={heading}
            description={necklaces.description || ""}
            buttonText={buttonText}
          />
          <ProductCategoryImage image={necklaces?.image} title={necklaces?.title} />
        </div>
      )}
    </>
  );
};

export default ProductCategoryOrganism;
