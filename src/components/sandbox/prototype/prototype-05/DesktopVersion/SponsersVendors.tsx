import { useState } from "react";

import Zeotis from "../assets/sponsers/zeotis.png";
import Mars from "../assets/sponsers/mars.png";
import Ariat from "../assets/sponsers/ariat.png";
import licensedIcon from "./../assets/licensed-icon.svg";
import dateIcon from "./../assets/date-icon.svg";

const SponsersVendorsRow: React.FC<{
    icon: any;
    header: string;
    type: string;
    date: string;
}> = ({ icon, header, type, date }) => (
    <div className="flex gap-6 items-center">
        <div className="w-[35px] h-[35px] md:w-[48px] md:h-[48px] bg-[#fee6ed] rounded-full flex items-center justify-center overflow-hidden">
            <img src={icon} alt="Icon" className="w-[100%]" />
        </div>
        <div className="text-[#3C4B71] max-w-[calc(100%_-_115px)] md:max-w-[calc(100%_-_140px)]">
            <h2 className="m-0 text-[14px] md:text-[16px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                {header}
            </h2>
            <div className="flex gap-2 items-center text-[#122B46] text-xs">
                <div>
                    <img src={licensedIcon} alt="icon" />
                </div>
                <div className="opacity-70">{type}</div>
                <div>
                    <img src={dateIcon} alt="icon" />
                </div>
                <div className="opacity-70">Date: {date}</div>
            </div>
        </div>
    </div>
);

const SponsersVendorsTabContent: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            <SponsersVendorsRow
                icon={Zeotis}
                header="USEF Championship Dressage..."
                type="Licensed"
                date="12.06.22"
            />
            <SponsersVendorsRow
                icon={Mars}
                header="Hunter Jumper Winter School..."
                type="Schooling"
                date="15.06.22"
            />
            <SponsersVendorsRow
                icon={Ariat}
                header="Holiday morning trail ride"
                type="Clinic"
                date="28.06.22"
            />
            <SponsersVendorsRow
                icon={Zeotis}
                header="USEF Championship Dressage..."
                type="Licensed"
                date="12.06.22"
            />
            <SponsersVendorsRow
                icon={Mars}
                header="Hunter Jumper Winter School..."
                type="Schooling"
                date="15.06.22"
            />
            <SponsersVendorsRow
                icon={Ariat}
                header="Holiday morning trail ride"
                type="Clinic"
                date="28.06.22"
            />
            <SponsersVendorsRow
                icon={Ariat}
                header="Holiday morning trail ride"
                type="Clinic"
                date="28.06.22"
            />
        </div>
    );
};

const SponsersVendorsTabButton: React.FC<{
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

const SponsersVendors: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <div>
            <div className="overflow-auto pb-3 mb-3">
                <div className="flex whitespace-nowrap">
                    <SponsersVendorsTabButton
                        title="Sponsored events"
                        active={activeTab === "1"}
                        onClick={() => setActiveTab("1")}
                    />
                    <SponsersVendorsTabButton
                        title="Past events"
                        active={activeTab === "2"}
                        onClick={() => setActiveTab("2")}
                    />
                </div>
            </div>
            {activeTab === "1" && <SponsersVendorsTabContent />}
            {activeTab === "2" && <SponsersVendorsTabContent />}
        </div>
    );
};
export default SponsersVendors;
