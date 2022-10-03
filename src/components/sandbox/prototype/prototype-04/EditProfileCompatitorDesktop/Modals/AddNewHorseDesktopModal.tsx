import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";
import { useState } from "react";
import searchIcon from "./../../assets/search-icon.svg";
import profilePic1 from "./../../assets/horse-pic-1.png";
import profilePic2 from "./../../assets/horse-pic-2.png";
import profilePic3 from "./../../assets/horse-pic-3.png";
import profilePic4 from "./../../assets/profile-pic-4.png";
import ExpandableSelector from "../../global/ExpandableSelector";
import positionIcon from "./../../assets/position-icon.svg";
import authorityIcon from "./../../assets/authority-icon.svg";
import boxArrowIcon from "./../../assets/box-arrow.svg";
import { useEffect } from "react";
import HorseCard from "./../../global/SelectCard";
import backIcon from "../../assets/arrow-left.svg";
import emailIcon from "../../assets/email.svg";
import USEFIcon from "../../assets/usef-icon.svg";
import eventOrgIcon from "../../assets/event-org.png";
import Prototype04Input from "./../../global/Prototype04Input";
const DrawerP: React.FC<{ children: string }> = ({ children }) => (
    <p className="mt-4 text-[#122B4680]">{children}</p>
);

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const LinkCard: React.FC<{ title: string; onClick?: () => void }> = ({
    title,
    onClick,
}) => (
    <div
        onClick={onClick}
        className="flex mt-2 gap-3 items-center p-4 cursor-pointer border-solid border-[1px] border-[#D3DAEE] rounded-xl text-[#122B4680] text-[14px]"
    >
        <div className="flex-1">{title}</div>
        <div>
            <img src={boxArrowIcon} alt="arrow" />
        </div>
    </div>
);

const AddNewHorseDesktopModal: React.FC<{ show: boolean; onHide: () => void }> =
    ({ show, onHide }) => {
        const [stage, setStage] = useState("1");
        const [search, setSearch] = useState("");
        const [USEF, setUSEF] = useState("");

        const secondStageHandle = () => {
            setStage("2");
        };

        return (
            <Prototype04DrawerComponent
                show={show}
                onHide={onHide}
                title=""
                fullMinHeight={true}
                maxWidth={550}
            >
                {stage === "1" && (
                    <div className="p-6 w-[60%] mx-auto">
                        <div className="mt-10">
                            <img
                                src={eventOrgIcon}
                                alt="icon"
                                className="rounded-full shadow-xl mx-auto"
                            />
                        </div>
                        <div className="mt-[60px]">
                            <p className="text-[18px] text-[#3C4B71] mt-4">
                                Enter your USEF number
                            </p>
                            <Prototype04Input
                                type="text"
                                value={USEF}
                                onChange={(e) => setUSEF(e.target.value)}
                                placeholder="USEF number"
                                icon={USEFIcon}
                            />
                        </div>
                        <div className="w-[80%] mt-[40px] mx-auto">
                            <Prototype04Button
                                caption="SEARCH"
                                type={1}
                                arrowIcon={true}
                                onClick={secondStageHandle}
                            />
                        </div>
                        <div className="text-center text-[#777E85] mt-16">
                            OR
                        </div>
                        <div className="text-[#120D26] my-10 text-center">
                            Don’t have a USEF number?{" "}
                            <a className="text-[#F7074F]">Continue &gt;</a>
                        </div>
                    </div>
                )}
                {stage === "2" && (
                    <div className="p-6 w-[60%] mx-auto">
                        <div className="mt-[30px]">
                            <img
                                src={eventOrgIcon}
                                alt="icon"
                                className="rounded-full shadow-xl mx-auto"
                            />
                        </div>
                        <div className="mt-[50px] flex gap-4 items-start border-gray-300 border-solid border-[1px] bg-white py-6 pr-8 pl-4 rounded-xl">
                            <div className="min-w-[25px]">
                                <img
                                    src={emailIcon}
                                    alt="email"
                                    className="w-full"
                                />
                            </div>
                            <div className="text-[#777E85] text-[14px]">
                                <p>
                                    A verification email was sent to the email
                                    address on file with the USEF for the
                                    membership number you entered.
                                </p>
                                <p className="mt-4">
                                    Click the link the email to continue.
                                </p>
                            </div>
                        </div>
                        <div className="w-[70%] my-[50px] mx-auto">
                            <Prototype04Button
                                caption="CLOSE"
                                type={1}
                                onClick={onHide}
                            />
                        </div>
                    </div>
                )}
            </Prototype04DrawerComponent>
        );
    };

export default AddNewHorseDesktopModal;
