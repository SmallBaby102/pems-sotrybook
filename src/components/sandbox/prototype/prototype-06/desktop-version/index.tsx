import { useState } from "react";
import LiveTab from "./LiveTab";
import DraftsTab from "./DraftsTab";

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

const ProductsDesktop: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <div className="flex gap-4 bg-[#F6F7FB] h-screen w-screen">
            <div className="flex-1 w-[calc(100vh_-_376px)] p-6 bg-white rounded-2xl flex gap-3 flex-col relative">
                <div className="flex gap-4">
                    <TabSection
                        title="Live"
                        selected={activeTab === "1"}
                        onChange={() => setActiveTab("1")}
                    />
                    <TabSection
                        title="Drafts"
                        selected={activeTab === "2"}
                        onChange={() => setActiveTab("2")}
                    />
                </div>
                {activeTab === "1" && <LiveTab />}
                {activeTab === "2" && <DraftsTab />}
            </div>
        </div>
    );
};
export default ProductsDesktop;
