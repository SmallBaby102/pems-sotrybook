import { useState } from "react";
import HorseDataTab from "./HorseDataTab";
import CompetitionPaperworkTab from "./CompetitionPaperworkTab";
import TeamTab from "./TeamTab";
import LineageTab from "./LineageTab";

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

const EditHorseProfileDesktop: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");

    return (
        <div className="flex gap-4 bg-[#F6F7FB] h-screen w-screen">
            <div className="flex-1 w-[calc(100vh_-_376px)] p-6 bg-white rounded-2xl flex gap-3 flex-col relative">
                <div className="flex gap-4">
                    <TabSection
                        title="Horse Data"
                        selected={activeTab === "1"}
                        onChange={() => setActiveTab("1")}
                    />
                    <TabSection
                        title="Competiton Numbers"
                        selected={activeTab === "2"}
                        onChange={() => setActiveTab("2")}
                    />
                    <TabSection
                        title="Team"
                        selected={activeTab === "3"}
                        onChange={() => setActiveTab("3")}
                    />
                    <TabSection
                        title="Lineage"
                        selected={activeTab === "4"}
                        onChange={() => setActiveTab("4")}
                    />
                </div>
                {activeTab === "1" && <HorseDataTab />}
                {activeTab === "2" && <CompetitionPaperworkTab />}
                {activeTab === "3" && <TeamTab />}
                {activeTab === "4" && <LineageTab />}
            </div>
        </div>
    );
};
export default EditHorseProfileDesktop;
