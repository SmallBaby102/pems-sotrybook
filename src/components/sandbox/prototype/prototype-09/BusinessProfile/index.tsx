import { useState } from "react";
import AccountTab from "./AccountTab";
import ProfileTab from "./ProfileTab";

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

const BusinessProfile: React.FC = () => {
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
                        title="Profile"
                        selected={activeTab === "1"}
                        onChange={() => setActiveTab("1")}
                    />
                    <TabSection
                        title="Account"
                        selected={activeTab === "2"}
                        onChange={() => setActiveTab("2")}
                    />
                </div>
                {activeTab === "1" && <ProfileTab />}
                {activeTab === "2" && <AccountTab />}
            </div>
        </div>
    );
};
export default BusinessProfile;
