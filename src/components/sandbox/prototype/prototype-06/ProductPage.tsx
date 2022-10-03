import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import TabSection from "./components/TabSection";
import { useState } from "react";
import ProductPageCard from "./components/ProductPageCard";
import dealImage1 from "./assets/deal-image-1.png";
import dealImage2 from "./assets/deal-image-2.png";
import dealImage3 from "./assets/deal-image-3.png";
import productImage1 from "./assets/product-image-1.png";
import productImage2 from "./assets/product-image-2.png";
import productImage3 from "./assets/product-image-3.png";
import noProduct from "./assets/no-product.svg";

const ProductPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="">
                    <HeaderSection
                        title="Products"
                        onBack={() => {}}
                        onAdd={() => {}}
                    />
                    <TabSection
                        selected={activeTab}
                        onChange={(e) => setActiveTab(e)}
                        tabs={["DEALS", "PRODUCTS", "DRAFTS"]}
                    />
                </div>
                <div className="flex-1 m-4 overflow-auto pr-2 gap-4">
                    {activeTab === 0 && (
                        <>
                            <ProductPageCard
                                category="APPAREL"
                                title="Casual dual tone uCasual dual tone u"
                                price="$125"
                                tag="SHOW365"
                                url="ariat.com/apparel/showa/apparel/showa"
                                image={dealImage1}
                            />
                            <ProductPageCard
                                category="SAFETY"
                                title="Show helmet, safety Show helmet, safety"
                                price="$250"
                                tag="SAFE15"
                                url="ariat.com/safety/showa/apparel/showa"
                                image={dealImage2}
                            />
                            <ProductPageCard
                                category="APPAREL"
                                title="Tarten Riding Gloves"
                                price="$95"
                                tag="SHOW365"
                                url="ariat.com/apparel/showa/apparel/showa"
                                image={dealImage3}
                            />
                        </>
                    )}
                    {activeTab === 1 && (
                        <div className="flex flex-col items-center gap-10 h-full min-h-[300px] justify-center">
                            <div> You have no products.</div>
                            <img
                                src={noProduct}
                                alt="No Product"
                                className="max-w-[192px]"
                            />
                        </div>
                        // when there is products
                        // <>
                        //     <ProductPageCard
                        //         category="LUGGAGE"
                        //         title="Ariat Team Carryal Ariat Team Carryal..."
                        //         price="$74.95"
                        //         tag="N/A"
                        //         url="ariat.com/apparel/showa/apparel/showa"
                        //         image={productImage1}
                        //     />
                        //     <ProductPageCard
                        //         category="APPAREL"
                        //         title="Kick Up Your Heels Kick Up Your Heels..."
                        //         price="$49.95"
                        //         tag="N/A"
                        //         url="ariat.com/safety/showa/apparel/showa"
                        //         image={productImage2}
                        //     />
                        //     <ProductPageCard
                        //         category="APPAREL"
                        //         title="Slim Trouser Vivian"
                        //         price="$79.95"
                        //         tag="N/A"
                        //         url="ariat.com/apparel/showa/apparel/showa"
                        //         image={productImage3}
                        //     />
                        // </>
                    )}
                    {activeTab === 2 && (
                        <>
                            <ProductPageCard
                                category="LUGGAGE"
                                title="Ariat Team Carryal Ariat Team Carryal..."
                                price="N/A"
                                tag="N/A"
                                url="N/A"
                                image={productImage1}
                            />
                            <ProductPageCard
                                category="APPAREL"
                                title="Kick Up Your Heels Kick Up Your Heels..."
                                price="$49.95"
                                tag="N/A"
                                url="N/A"
                                image={productImage2}
                            />
                            <ProductPageCard
                                category="APPAREL"
                                title="Slim Trouser Vivian"
                                price="$79.95"
                                tag="N/A"
                                url="N/A"
                                image={productImage3}
                            />
                        </>
                    )}
                </div>
                <div className="">
                    <FooterSection selected="vendors" />
                </div>
            </div>
        </>
    );
};
export default ProductPage;
