import { useState } from "react";
import SearchFilterModal from "./Modals/SearchFilterModal";
import PublicProfileCompetitorLeft from "../PublicProfileCompetitorLeft";
import UpcomingEvents from "./UpcomingEvents";
import CompetitionResults from "./CompetitionResults";
import EventHistory from "./EventHistory";

const TabSection: React.FC<{
    title: string;
    selected: boolean;
    onChange: () => void;
}> = ({ title, selected, onChange }) => (
    <button
        onClick={onChange}
        className={`px-6 py-3 rounded-full ${
            selected ? "text-[#F7074F] bg-[#F7074F18]" : "text-[#122B46]"
        }`}
    >
        {title}
    </button>
);

const PublicProfileCompatitorDesktop: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [filters, setsetFilters] = useState();
    const [filtersModalShow, setFiltersModalShow] = useState(false);
    const filterApplyHandle = (filters: any) => {
        setsetFilters(filters);
        setFiltersModalShow(false);
    };
    return (
        <div className="flex gap-4 bg-[#F6F7FB] h-screen w-screen">
            <SearchFilterModal
                onApply={filterApplyHandle}
                show={filtersModalShow}
                onHide={() => setFiltersModalShow(false)}
            />
            <div className="w-[360px] p-6 bg-white rounded-2xl">
                <PublicProfileCompetitorLeft desktopMode={true} />
            </div>
            <div className="flex-1 w-[calc(100vh_-_376px)] p-6 bg-white rounded-2xl flex gap-3 flex-col relative">
                <div className="flex gap-4">
                    <TabSection
                        title="Upcoming Events"
                        selected={activeTab === "1"}
                        onChange={() => setActiveTab("1")}
                    />
                    <TabSection
                        title="Competition Results"
                        selected={activeTab === "2"}
                        onChange={() => setActiveTab("2")}
                    />
                    <TabSection
                        title="Event History"
                        selected={activeTab === "3"}
                        onChange={() => setActiveTab("3")}
                    />
                </div>
                {activeTab === "1" && (
                    <UpcomingEvents
                        onFilter={() => setFiltersModalShow(true)}
                    />
                )}
                {activeTab === "2" && (
                    <CompetitionResults
                        onFilter={() => setFiltersModalShow(true)}
                    />
                )}
                {activeTab === "3" && (
                    <EventHistory onFilter={() => setFiltersModalShow(true)} />
                )}
            </div>
        </div>
    );
};
export default PublicProfileCompatitorDesktop;
