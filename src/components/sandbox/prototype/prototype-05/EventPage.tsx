import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import EventCard from "./components/EventCard";
import card1 from "./assets/sponsers/ariat.png";
import card2 from "./assets/sponsers/dover.png";
import TabSection from "./components/TabSection";
import { useState } from "react";
import sortIcon from "./assets/sort-icon.svg";
import SortModal from "./components/SortModal";

const EventPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);
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
                    <HeaderSection
                        title="Wellington Winter Long Title Goes Here"
                        onBack={() => {}}
                        onMore={() => {}}
                    />
                    <TabSection
                        selected={activeTab}
                        onChange={(e) => setActiveTab(e)}
                        tabs={["DETAILS", "PRIZE LIST"]}
                    />
                    <div className="flex items-center mx-4 mt-4 text-sm text-[#747688]">
                        <div className="flex-1">Green Hunter</div>
                        <button onClick={() => setSortModalShow(true)}>
                            <img src={sortIcon} alt="icon" />
                        </button>
                    </div>
                </div>
                <div className="flex-1 m-4 overflow-auto pr-2">
                    {activeTab == 0 && (
                        <>
                            <EventCard
                                title="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                                time="13:30h"
                            />
                            <EventCard
                                title="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                                time="13:30h"
                            />
                            <EventCard
                                title="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                                time="13:30h"
                            />
                            <EventCard
                                title="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                                time="13:30h"
                            />
                            <EventCard
                                title="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                                time="13:30h"
                            />
                            <EventCard
                                title="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                                time="13:30h"
                            />
                        </>
                    )}
                    {activeTab == 1 && (
                        <>
                            <EventCard
                                title="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                                time="13:30h"
                            />
                            <EventCard
                                title="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                                time="13:30h"
                            />
                            <EventCard
                                title="CLOTHING"
                                caption="Dubarry of Ireland: Men & Womens"
                                location="SECTION 3 • PARK A"
                                icon={card1}
                                time="13:30h"
                            />
                            <EventCard
                                title="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                                time="13:30h"
                            />

                            <EventCard
                                title="ART"
                                caption="Lydia Marie Elizabeth Art"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                                time="13:30h"
                            />
                            <EventCard
                                title="RING SUPPLIES"
                                caption="Atwood Equestrian Surfaces"
                                location="SECTION 3 • PARK A"
                                icon={card2}
                                time="13:30h"
                            />
                        </>
                    )}
                </div>
                <div className="">
                    <FooterSection selected="event" />
                </div>
            </div>
        </>
    );
};
export default EventPage;
