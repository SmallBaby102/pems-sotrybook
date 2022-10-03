import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import NewsCard from "./components/NewsCard";
import card1 from "./assets/card-image-example/news1.svg";
import card2 from "./assets/card-image-example/news2.svg";
import card3 from "./assets/card-image-example/news3.svg";
import deal1 from "./assets/card-image-example/deals1.svg";
import deal2 from "./assets/card-image-example/deals2.svg";
import deal3 from "./assets/card-image-example/deals3.svg";
import product1 from "./assets/card-image-example/products1.svg";
import product2 from "./assets/card-image-example/products2.svg";
import product3 from "./assets/card-image-example/products3.svg";
import TabSection from "./components/TabSection";
import { useState } from "react";
import SortModal from "./components/SortModal";
import sortIcon from "./assets/sort-icon.svg";
import messageIcon from "./assets/message-icon.svg";
import mapIcon from "./assets/map-icon.svg";
import ariatIcon from "./assets/sponsers/ariat.png";
import DealsCard from "./components/DealsCard";
import AboutPage from "./AboutPage";

const VendorsAriat: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [sortModalShow, setSortModalShow] = useState(false);
    const sortHandle = () => {
        setSortModalShow(true);
    };
    const [sortValue, setSortValue] = useState([{ id: 1, caption: "Popular" }]);
    return (
        <>
            <SortModal
                show={sortModalShow}
                onHide={() => setSortModalShow(false)}
                onChange={(e) => setSortValue(e)}
                value={sortValue}
            />
            <div className="flex flex-col h-screen">
                <div className="">
                    <HeaderSection title="" onBack={() => {}} />
                    <div className="m-4 flex items-center gap-1">
                        <div className="flex items-center gap-2 flex-1">
                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                <img
                                    src={ariatIcon}
                                    alt="icon"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="leading-tight">
                                <div className="text-[24px] text-[#122B46] font-bold">
                                    Ariat
                                </div>
                                <div className="text-[#979797]">Vendor</div>
                            </div>
                        </div>
                        <div>
                            <button>
                                <img src={messageIcon} alt="icon" />
                            </button>
                        </div>
                        <div>
                            <button>
                                <img src={mapIcon} alt="icon" />
                            </button>
                        </div>
                    </div>
                    <TabSection
                        selected={activeTab}
                        onChange={(e) => setActiveTab(e)}
                        tabs={["NEWS", "DEALS", "PRODUCTS", "ABOUT"]}
                    />
                    {activeTab < 3 && (
                        <div className="flex items-center mx-4 mt-6">
                            {activeTab == 0 && (
                                <div className="flex-1 text-lg font-bold">
                                    NEWS
                                </div>
                            )}
                            {activeTab == 1 && (
                                <div className="flex-1 text-lg font-bold">
                                    Show deals
                                </div>
                            )}
                            {activeTab == 2 && (
                                <div className="flex-1 text-lg font-bold">
                                    Products
                                </div>
                            )}
                            <button onClick={() => setSortModalShow(true)}>
                                <img src={sortIcon} alt="icon" />
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex-1 m-4 overflow-auto pr-2">
                    {activeTab == 0 && (
                        <>
                            <NewsCard
                                description="Ariat CEO Beth Cross signing at Ariat tent at 12:30, Day 2, Rolex 2022...More"
                                caption="Beth Cross signing at Ariat tent today!"
                                icon={card1}
                            />
                            <NewsCard
                                description="Never before seen boots are on display at the Ariat tent today. Come over for a sneak pe...More"
                                caption="Ariat’s not yet released boots on display at tent"
                                icon={card2}
                            />
                            <NewsCard
                                description="Boyd Martin, Rolex Champion signing at Ariat tent at 8:30, Day 1, Rolex 2022...More"
                                caption="Boyd Martin signing at Ariat tent 8:30 today!"
                                icon={card3}
                            />
                        </>
                    )}
                    {activeTab == 1 && (
                        <>
                            <DealsCard
                                category="APPAREL"
                                description="Casual dual tone undershirt"
                                price="$125 USD"
                                offPrice="$180"
                                icon={deal1}
                            />
                            <DealsCard
                                category="SAFETY"
                                description="Show Helmet, Safety Lvl 6"
                                price="$125 USD"
                                offPrice="$180"
                                icon={deal2}
                            />
                            <DealsCard
                                category="APPAREL"
                                description="Tarten Riding Gloves, Winter"
                                price="$125 USD"
                                offPrice="$180"
                                icon={deal3}
                            />
                        </>
                    )}
                    {activeTab == 2 && (
                        <>
                            <DealsCard
                                category="APPAREL"
                                description="Ariat Team Carryall Tote"
                                price="$74.95 USD"
                                icon={product1}
                            />
                            <DealsCard
                                category="APPAREL"
                                description="Kick Up Your Heels Dress"
                                price="$49.95 USD"
                                icon={product2}
                            />
                            <DealsCard
                                category="APPAREL"
                                description="Slim Trouser Vivianne Wide Leg"
                                price="$79.95 USD"
                                icon={product3}
                            />
                            <DealsCard
                                category="APPAREL"
                                description="Ariat Team Carryall Tote"
                                price="$74.95 USD"
                                icon={product1}
                            />
                            <DealsCard
                                category="APPAREL"
                                description="Kick Up Your Heels Dress"
                                price="$49.95 USD"
                                icon={product2}
                            />
                        </>
                    )}
                    {activeTab === 3 && <AboutPage />}
                </div>
                <div className="">
                    <FooterSection selected="vendors" />
                </div>
            </div>
        </>
    );
};
export default VendorsAriat;
