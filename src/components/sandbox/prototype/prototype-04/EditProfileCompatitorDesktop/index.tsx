import { useState } from "react";
import PublicProfileCompetitorLeft from "../PublicProfileCompetitorLeft";
import AccountTab from "./AccountTab";
import ProfileTab from "./ProfileTab";
import TeamTab from "./TeamTab";
import HorseTab from "./HorseTab";

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

const EditProfileCompatitorDesktop: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [filters, setsetFilters] = useState();
    const [filtersModalShow, setFiltersModalShow] = useState(false);
    const filterApplyHandle = (filters: any) => {
        setsetFilters(filters);
        setFiltersModalShow(false);
    };
    return (
        <div className="flex gap-4 bg-[#F6F7FB] h-screen w-screen">
            <div className="flex-1 w-[calc(100vh_-_376px)] p-6 bg-white rounded-2xl flex gap-3 flex-col relative">
                <div className="flex gap-4">
                    <TabSection
                        title="Account"
                        selected={activeTab === "1"}
                        onChange={() => setActiveTab("1")}
                    />
                    <TabSection
                        title="Profile"
                        selected={activeTab === "2"}
                        onChange={() => setActiveTab("2")}
                    />
                    <TabSection
                        title="Team"
                        selected={activeTab === "3"}
                        onChange={() => setActiveTab("3")}
                    />
                    <TabSection
                        title="Horses"
                        selected={activeTab === "4"}
                        onChange={() => setActiveTab("4")}
                    />
                </div>
                {activeTab === "1" && <AccountTab />}
                {activeTab === "2" && <ProfileTab />}
                {activeTab === "3" && <TeamTab />}
                {activeTab === "4" && <HorseTab />}
                {/*
                    activeTab === "3" &&
                    <EventHistory onFilter={()=>setFiltersModalShow(true)}/>
                } */}
            </div>
        </div>
    );
};
export default EditProfileCompatitorDesktop;
