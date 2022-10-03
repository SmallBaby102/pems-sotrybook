import { useState, useEffect } from "react";
import Prototype04Button from "../../global/Prototype04Button";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import profilePic from "./../../assets/profile-pic-1.png";
import plusIcon from "./../../assets/plus-icon.svg";
import minusIcon from "./../../assets/minus-icon.svg";
import placingIcon from "./../../assets/placing-icon.svg";
import numberIcon from "./../../assets/number-icon.svg";
import likeIcon from "./../../assets/like-icon.svg";
import dislikeIcon from "./../../assets/dislike-icon.svg";
import moneyIcon from "./../../assets/money-icon.svg";
import locationIcon from "./../../assets/location.svg";
import chartIcon from "./../../assets/chart.svg";
import horseIcon from "./../../assets/horse-icon.svg";

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

const CompetitionResultsModal: React.FC<{
    show: boolean;
    onHide: () => void;
}> = ({ show, onHide }) => {
    return (
        <div>
            <Prototype04DrawerComponent
                show={show}
                onHide={onHide}
                title="Pony Hunter Yearling"
                maxWidth={730}
            >
                <div className="border-[#3C4B71] border-solid border-[1px] rounded-lg p-4 mr-2 mt-2">
                    <div className="flex items-center gap-2 text-[14px] text-[#122B46] cursor-pointer">
                        <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                            <img
                                src={profilePic}
                                alt="icon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">Alex Less</div>
                        <div className="flex gap-4 whitespace-nowrap">
                            <div className="flex gap-1 items-center">
                                <img src={locationIcon} alt="icon" />
                                <span>Australian</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={chartIcon} alt="icon" />
                                <span>Zone 5</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={horseIcon} alt="icon" />
                                <span>Socks</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40%_calc(60%_-_1rem)] gap-4 mt-6">
                        <CompetitionResultsElement
                            icon={placingIcon}
                            title="Placing"
                        />
                        <CompetitionResultsElement title="1" />

                        <CompetitionResultsElement
                            icon={numberIcon}
                            title="Back number"
                        />
                        <CompetitionResultsElement title="148" />

                        <CompetitionResultsElement
                            icon={likeIcon}
                            title="Good - national points"
                        />
                        <CompetitionResultsElement title="62.00" />

                        <CompetitionResultsElement
                            icon={likeIcon}
                            title="Good - zone points"
                        />
                        <CompetitionResultsElement title="42.00" />

                        <CompetitionResultsElement
                            icon={dislikeIcon}
                            title="Bad - national points"
                        />
                        <CompetitionResultsElement title="50.00" />

                        <CompetitionResultsElement
                            icon={dislikeIcon}
                            title="Bad - zone points"
                        />
                        <CompetitionResultsElement title="45.00" />

                        <CompetitionResultsElement
                            icon={moneyIcon}
                            title="Prize money won"
                        />
                        <CompetitionResultsElement title="$1423.80" />
                    </div>
                </div>
                <div className="border-[#3C4B71] border-solid border-[1px] rounded-lg p-4 mr-2 mt-2 text-center">
                    TBD
                </div>
            </Prototype04DrawerComponent>
        </div>
    );
};
export default CompetitionResultsModal;
