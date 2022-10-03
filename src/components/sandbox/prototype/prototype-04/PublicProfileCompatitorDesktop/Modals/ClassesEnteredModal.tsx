import { useState, useEffect } from "react";
import Prototype04Button from "../../global/Prototype04Button";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import prizeIcon from "./../../assets/prize-icon.svg";
import verifiedIcon from "./../../assets/verified-icon.svg";

const TabButton: React.FC<{
    onClick: () => void;
    style: object;
    caption: string;
}> = ({ onClick, style, caption }) => (
    <button
        onClick={onClick}
        className="md:flex-none flex-1 bg-transparent border-none outline-none rounded-full md:rounded-none p-2 md:p-0 md:pb-1 uppercase md:normal-case"
        style={style}
    >
        {caption}
    </button>
);

const TabSection: React.FC<{
    currentTab: string;
    onChange: (e: string) => void;
}> = ({ currentTab, onChange }) => {
    const breakPoint = 768;

    const [innerWidth, setInnerWidth] = useState(0);

    const activeTabHandle = (active: string) => {
        if (innerWidth > breakPoint) {
            if (currentTab === active) {
                return {
                    fontWeight: "bold",
                };
            } else {
                return {
                    color: "#122B46",
                };
            }
        } else {
            if (currentTab === active) {
                return {
                    color: "#F7074F",
                    backgroundColor: "white",
                    boxShadow: "0 0 10px rgba(0,0,0,.14)",
                };
            } else {
                return {
                    color: "#122B46",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                };
            }
        }
    };

    useEffect(() => {
        const setActiveTab = () => {
            setInnerWidth(window.innerWidth);
        };
        setActiveTab();
        window.addEventListener("resize", setActiveTab, true);
        return () => window.removeEventListener("resize", setActiveTab, true);
    }, []);

    return (
        <div className="overflow-auto scrollbar-hide md:scrollbar-default bg-gray-100 md:bg-transparent rounded-full md:rounded-none mt-4 p-1 md:p-0 text-[15px]">
            <div className="whitespace-nowrap flex gap-4 ">
                <TabButton
                    onClick={() => onChange("1")}
                    style={{
                        ...activeTabHandle("1"),
                    }}
                    caption="Equitation"
                />
                <TabButton
                    onClick={() => onChange("2")}
                    style={{
                        ...activeTabHandle("2"),
                    }}
                    caption="Hunter"
                />
                <TabButton
                    onClick={() => onChange("3")}
                    style={{
                        ...activeTabHandle("3"),
                    }}
                    caption="Classics"
                />
                <TabButton
                    onClick={() => onChange("4")}
                    style={{
                        ...activeTabHandle("4"),
                    }}
                    caption="Derbys"
                />
                <TabButton
                    onClick={() => onChange("5")}
                    style={{
                        ...activeTabHandle("5"),
                    }}
                    caption="Leagues"
                />
                <TabButton
                    onClick={() => onChange("6")}
                    style={{
                        ...activeTabHandle("6"),
                    }}
                    caption="Jumper"
                />
            </div>
        </div>
    );
};

const ClassEnteredCard: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center gap-2 border-[#3C4B7120] border-solid border-[1px] rounded-lg p-4 text-[14px] text-[#122B4688] mt-2">
        <div>
            <img src={prizeIcon} alt="icon" />
        </div>
        <div className="flex-1">{title}</div>
        <div>
            <img src={verifiedIcon} alt="icon" />
        </div>
    </div>
);

const ClassesEnteredModal: React.FC<{
    show: boolean;
    onHide: () => void;
}> = ({ show, onHide }) => {
    const [currentTab, setCurrentTab] = useState("2");

    return (
        <div>
            <Prototype04DrawerComponent
                show={show}
                onHide={onHide}
                title="Classes Enetered"
                maxWidth={600}
                tabComponent={
                    <TabSection
                        currentTab={currentTab}
                        onChange={(e) => setCurrentTab(e)}
                    />
                }
            >
                <ClassEnteredCard title="Conformation Hunter Combined" />
                <ClassEnteredCard title="Amateur Owner 3’3” 18-35" />
                <ClassEnteredCard title="Amateur Owner 3’6” 18-35" />
                <ClassEnteredCard title="High Performance Confirmation" />
                <ClassEnteredCard title="Green Confirmation 3’6”" />
                <ClassEnteredCard title="Confirmation Hunter Combined" />

                <div className="flex justify-center pt-4 mt-[100px]">
                    <Prototype04Button
                        type={3}
                        caption="Apply"
                        className="w-[240px]"
                        onClick={onHide}
                    />
                </div>
            </Prototype04DrawerComponent>
        </div>
    );
};
export default ClassesEnteredModal;
