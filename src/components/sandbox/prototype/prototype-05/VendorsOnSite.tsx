import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import VendorCard from "./components/VendorCard";
import card1 from "./assets/card-image-example/1.svg";
import card2 from "./assets/card-image-example/2.svg";
import TabSection from "./components/TabSection";
import { useState } from "react";
import SortModal from "./components/SortModal";

const VendorsOnSite: React.FC = () => {
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
                    <HeaderSection title="Vendors" onBack={() => {}} />
                    <TabSection
                        selected={activeTab}
                        onChange={(e) => setActiveTab(e)}
                        tabs={["ON-SITE", "VIRTUAL", "PARTNERS"]}
                        onFilter={activeTab > 0 ? sortHandle : undefined}
                    />
                </div>
                <div className="flex-1 m-4 overflow-auto pr-2">
                    {activeTab == 0 && (
                        <>
                            <VendorCard
                                category="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                            />
                            <VendorCard
                                category="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                            <VendorCard
                                category="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                            <VendorCard
                                category="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                            />
                            <VendorCard
                                category="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                            <VendorCard
                                category="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                        </>
                    )}
                    {activeTab == 1 && (
                        <>
                            <VendorCard
                                category="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                            <VendorCard
                                category="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                            />
                            <VendorCard
                                category="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                            />
                            <VendorCard
                                category="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />

                            <VendorCard
                                category="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                            <VendorCard
                                category="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                        </>
                    )}
                    {activeTab == 2 && (
                        <>
                            <VendorCard
                                category="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                            />
                            <VendorCard
                                category="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                            <VendorCard
                                category="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />

                            <VendorCard
                                category="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                            <VendorCard
                                category="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                            />
                            <VendorCard
                                category="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
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
export default VendorsOnSite;
