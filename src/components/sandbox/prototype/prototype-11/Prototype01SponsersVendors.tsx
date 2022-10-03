import { useState } from "react";

import Zeotis from "./assets/Sponsers/zeotis.png";
import Mars from "./assets/Sponsers/mars.png";
import Ariat from "./assets/Sponsers/ariat.png";
import Mare from "./assets/Sponsers/mare.png";
import Dover from "./assets/Sponsers/dover.png";
import Silver from "./assets/Sponsers/silver.png";
import Dubarry from "./assets/Sponsers/dubarry.png";

const SponsersVendorsRow: React.FC<{
    icon: any;
    header: string;
    desc: string;
}> = ({ icon, header, desc }) => (
    <div className="flex gap-6 items-center">
        <div className="w-[35px] h-[35px] md:w-[48px] md:h-[48px] bg-[#fee6ed] rounded-full flex items-center justify-center overflow-hidden">
            <img src={icon} alt="Icon" className="w-[100%]" />
        </div>
        <div className="text-[#3C4B71] max-w-[calc(100%_-_115px)] md:max-w-[calc(100%_-_140px)]">
            <h2 className="m-0 text-[14px] md:text-[16px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                {header}
            </h2>
            <div className="flex items-center gap-2 max-w-full">
                <p className="m-0 text-[12px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                    {desc}
                </p>
            </div>
        </div>
    </div>
);

const Prototype01SponsersVendorsTabContent: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <SponsersVendorsRow
                icon={Zeotis}
                header="Zoetis"
                desc="Healthcare"
            />
            <SponsersVendorsRow
                icon={Mars}
                header="MARS Equestrian"
                desc="Feed & Bedding"
            />
            <SponsersVendorsRow icon={Ariat} header="Ariat" desc="Apparel" />
            <SponsersVendorsRow
                icon={Mare}
                header="Mare  Modern Goods"
                desc="Apparel"
            />
            <SponsersVendorsRow
                icon={Dover}
                header="Dover Saddlery"
                desc="Apparel"
            />
            <SponsersVendorsRow
                icon={Silver}
                header="Silver Sands Bridle Club"
                desc="Boarding"
            />
            <SponsersVendorsRow
                icon={Dubarry}
                header="Dubarry"
                desc="Apparel, Silver Sponsor"
            />
            <SponsersVendorsRow
                icon={Zeotis}
                header="Zoetis"
                desc="Healthcare"
            />
            <SponsersVendorsRow
                icon={Mars}
                header="MARS Equestrian"
                desc="Feed & Bedding"
            />
            <SponsersVendorsRow icon={Ariat} header="Ariat" desc="Apparel" />
            <SponsersVendorsRow
                icon={Mare}
                header="Mare  Modern Goods"
                desc="Apparel"
            />
            <SponsersVendorsRow
                icon={Dover}
                header="Dover Saddlery"
                desc="Apparel"
            />
            <SponsersVendorsRow
                icon={Silver}
                header="Silver Sands Bridle Club"
                desc="Boarding"
            />
            <SponsersVendorsRow
                icon={Dubarry}
                header="Dubarry"
                desc="Apparel, Silver Sponsor"
            />
        </div>
    );
};

const Prototype01SponsersVendorsTabButton: React.FC<{
    title: string;
    onClick?: () => any;
    active: boolean;
    className?: string;
}> = ({ title, onClick, active, className }) => (
    <button
        onClick={onClick}
        className={`px-4 py-1 rounded-full text-[#122B46] ${className} ${
            active &&
            `bg-gray-100 md:bg-transparent md:text-[#F7074F] md:font-medium md:border-b-2 md:border-[#F7074F] md:border-solid md:rounded-none`
        }`}
    >
        {title}
    </button>
);

const Prototype01SponsersVendors: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <div>
            <div className="overflow-auto pb-3 mb-3">
                <div className="flex whitespace-nowrap">
                    <Prototype01SponsersVendorsTabButton
                        title="Title"
                        active={activeTab === "1"}
                        onClick={() => setActiveTab("1")}
                    />
                    <Prototype01SponsersVendorsTabButton
                        title="Gold"
                        className="md:hidden"
                        active={activeTab === "2"}
                        onClick={() => setActiveTab("2")}
                    />
                    <Prototype01SponsersVendorsTabButton
                        title="Silver"
                        className="md:hidden"
                        active={activeTab === "3"}
                        onClick={() => setActiveTab("3")}
                    />
                    <Prototype01SponsersVendorsTabButton
                        title="O-S Vendors"
                        active={activeTab === "4"}
                        onClick={() => setActiveTab("4")}
                    />
                    <Prototype01SponsersVendorsTabButton
                        title="Virt.Vendors"
                        active={activeTab === "5"}
                        onClick={() => setActiveTab("5")}
                    />
                </div>
            </div>
            {activeTab === "1" && <Prototype01SponsersVendorsTabContent />}
            {activeTab === "2" && <Prototype01SponsersVendorsTabContent />}
            {activeTab === "3" && <Prototype01SponsersVendorsTabContent />}
            {activeTab === "4" && <Prototype01SponsersVendorsTabContent />}
            {activeTab === "5" && <Prototype01SponsersVendorsTabContent />}
        </div>
    );
};
export default Prototype01SponsersVendors;
