import ProductCardMolecule from "@/components/molecules/productCard/productCard.molecule";
// import { productsData } from "@/lib/data/productData";
import { ProductCardOrganismProps } from "@/types/productCard.type";

const ProductCardOrganism = ({ activeTab, productsData }: ProductCardOrganismProps) => {
    const rings = productsData.filter((p) => p.category === "Rings");
    const earrings = productsData.filter((p) => p.category === "Earrings");
    const bracelets = productsData.filter((p) => p.category === "Bracelets");
  return (
    <div className="grid grid-cols-4 gap-10 w-full">
        {activeTab === "Rings" && rings.map((product) => (
        <ProductCardMolecule
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image} id={product.id}        />
      ))}
        {activeTab === "Earrings" && earrings.map((product) => (
        <ProductCardMolecule
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image} id={product.id}        />
      ))}
        {activeTab === "Bracelets" && bracelets.map((product) => (
        <ProductCardMolecule
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image} id={product.id}        />
      ))}
    </div>
  );
};

export default ProductCardOrganism;
