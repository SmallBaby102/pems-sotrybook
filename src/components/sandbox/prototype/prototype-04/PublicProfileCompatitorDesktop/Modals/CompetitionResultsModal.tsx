import { useState, useEffect } from "react";
import Prototype04Button from "../../global/Prototype04Button";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import prizeIcon from "./../../assets/prize-icon.svg";
import plusIcon from "./../../assets/plus-icon.svg";
import minusIcon from "./../../assets/minus-icon.svg";
import placingIcon from "./../../assets/placing-icon.svg";
import numberIcon from "./../../assets/number-icon.svg";
import likeIcon from "./../../assets/like-icon.svg";
import dislikeIcon from "./../../assets/dislike-icon.svg";
import moneyIcon from "./../../assets/money-icon.svg";
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

const CompetitionResultsElement: React.FC<{ icon?: string; title: string }> = ({
    icon,
    title,
}) => (
    <div className="flex gap-2 items-center border-[#3C4B7120] border-solid border-[1px] rounded-lg p-4 text-[14px] text-[#122B4688]">
        {icon && (
            <div>
                <img src={icon} alt="icon" />
            </div>
        )}
        <div>{title}</div>
    </div>
);

const CompetitionResultCard: React.FC<{
    title: string;
    placing: string;
    backNumber: string;
    goodNationalPoints: string;
    badNationalPoints: string;
    goodZonePoints: string;
    badZonePoints: string;
    money: string;
    initShow?: boolean;
}> = ({
    title,
    placing,
    backNumber,
    goodNationalPoints,
    badNationalPoints,
    goodZonePoints,
    badZonePoints,
    money,
    initShow,
}) => {
    const [show, setShow] = useState(!!initShow);
    return (
        <div
            className={`border-[#3C4B7120] border-solid border-[1px] rounded-lg p-4 mr-2 mt-2 ${
                show ? "!border-[#3C4B7180]" : ""
            }`}
        >
            <div
                className={`flex items-center gap-2 text-[14px] text-[#122B4688] cursor-pointer ${
                    show ? "text-[#122B46CC]" : ""
                }`}
                onClick={() => setShow(!show)}
            >
                <div>
                    <img
                        src={prizeIcon}
                        alt="icon"
                        className={show ? "brightness-0" : ""}
                    />
                </div>
                <div className="flex-1">{title}</div>
                <div>
                    <img src={show ? minusIcon : plusIcon} alt="icon" />
                </div>
            </div>
            {show && (
                <div className="grid grid-cols-[40%_calc(60%_-_1rem)] gap-4 mt-6">
                    <CompetitionResultsElement
                        icon={placingIcon}
                        title="Placing"
                    />
                    <CompetitionResultsElement title={placing} />

                    <CompetitionResultsElement
                        icon={numberIcon}
                        title="Back number"
                    />
                    <CompetitionResultsElement title={backNumber} />

                    <CompetitionResultsElement
                        icon={likeIcon}
                        title="Good - national points"
                    />
                    <CompetitionResultsElement title={goodNationalPoints} />

                    <CompetitionResultsElement
                        icon={likeIcon}
                        title="Good - zone points"
                    />
                    <CompetitionResultsElement title={goodZonePoints} />

                    <CompetitionResultsElement
                        icon={dislikeIcon}
                        title="Bad - national points"
                    />
                    <CompetitionResultsElement title={badNationalPoints} />

                    <CompetitionResultsElement
                        icon={dislikeIcon}
                        title="Bad - zone points"
                    />
                    <CompetitionResultsElement title={badZonePoints} />

                    <CompetitionResultsElement
                        icon={moneyIcon}
                        title="Prize money won"
                    />
                    <CompetitionResultsElement title={money} />
                </div>
            )}
        </div>
    );
};

const CompetitionResultsModal: React.FC<{
    show: boolean;
    onHide: () => void;
}> = ({ show, onHide }) => {
    const [currentTab, setCurrentTab] = useState("2");

    return (
        <div>
            <Prototype04DrawerComponent
                show={show}
                onHide={onHide}
                title="Results"
                maxWidth={600}
                tabComponent={
                    <TabSection
                        currentTab={currentTab}
                        onChange={(e) => setCurrentTab(e)}
                    />
                }
            >
                <CompetitionResultCard
                    title="Conformation Hunter Combined"
                    placing="6"
                    backNumber="148"
                    goodNationalPoints="62.00"
                    badNationalPoints="42.00"
                    goodZonePoints="50.00"
                    badZonePoints="45.00"
                    money="$1432.80"
                />
                <CompetitionResultCard
                    title="Amateur Owner 3’3” 18-35"
                    placing="6"
                    backNumber="148"
                    goodNationalPoints="62.00"
                    badNationalPoints="42.00"
                    goodZonePoints="50.00"
                    badZonePoints="45.00"
                    money="$1432.80"
                    initShow={true}
                />

                <div className="flex justify-center pt-4 mt-[40px]">
                    <Prototype04Button
                        type={3}
                        caption="CANCEL"
                        className="w-[240px]"
                        onClick={onHide}
                    />
                </div>
            </Prototype04DrawerComponent>
        </div>
    );
};
export default CompetitionResultsModal;
