import { useState } from "react";

import backIcon from "../assets/back-icon.svg";
import moreIcon from "../assets/more-icon.svg";
import profilePic from "../assets/profile-picture.png";
import tabIcon1 from "../assets/profile-tab-3.svg";
import tabIcon2 from "../assets/profile-tab-2.svg";
import tabIcon3 from "../assets/profile-tab-5.svg";
import tabIcon4 from "../assets/profile-tab-4.svg";
import ProfileForm from "./ProfileForm";
import TeamList from "./TeamList";
import HorseList from "./HorseList";
import ResultList from "./ResultList";

const ProfileCard: React.FC<{ title: string; explanation: string }> = ({
    title,
    explanation,
}) => (
    <div className="text-center">
        <h2 className="m-0 text-[#122B46] text-[16px]">{title}</h2>
        <p className="text-[#122B46] opacity-70 text-[12px]">{explanation}</p>
    </div>
);

const TabButton: React.FC<{
    icon: string;
    selected: boolean;
    onClick?: () => void;
}> = ({ icon, selected, onClick }) => (
    <button
        className={`flex-1 flex justify-center pb-0.5 border-b-[2px] border-solid ${
            selected ? "border-b-[#F7074F]" : "border-b-transparent"
        }`}
        onClick={onClick}
    >
        <img
            src={icon}
            alt="tab icon"
            style={{
                filter: selected
                    ? "brightness(0) saturate(100%) invert(22%) sepia(99%) saturate(5448%) hue-rotate(333deg) brightness(93%) contrast(108%)"
                    : "",
            }}
        />
    </button>
);

const HorseProfileCompetitorLeft: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");

    return (
        <div className="bg-[#F1F3F8]">
            <div>
                <div className="flex items-center w-full justify-between p-6">
                    <button>
                        <img src={backIcon} alt="back" />
                    </button>
                    <span className="text-[#122B46] text-[12px]">
                        Horse profile
                    </span>
                    <button>
                        <img src={moreIcon} alt="more" />
                    </button>
                </div>
                <div className="text-center">
                    <div className="m-auto rounded-full w-[120px] h-[120px] overflow-auto">
                        <img
                            src={profilePic}
                            alt="profile piture"
                            className="object-cover"
                        />
                    </div>
                    <h1>David Silbia</h1>
                </div>
                <div className="flex gap-4 mx-6 justify-between bg-white p-4 rounded-xl shadow-slate-200 shadow-md mt-6">
                    <ProfileCard title="Jumper" explanation="Discipline" />
                    <ProfileCard title="4" explanation="Zone" />
                    <ProfileCard title="Australian" explanation="Nationality" />
                </div>
                <div className="bg-white rounded-t-3xl mt-8 p-6">
                    <div className="flex mx-6 justify-center gap-3">
                        <TabButton
                            icon={tabIcon1}
                            selected={activeTab === "1"}
                            onClick={() => setActiveTab("1")}
                        />
                        <TabButton
                            icon={tabIcon2}
                            selected={activeTab === "2"}
                            onClick={() => setActiveTab("2")}
                        />
                        <TabButton
                            icon={tabIcon3}
                            selected={activeTab === "3"}
                            onClick={() => setActiveTab("3")}
                        />
                        <TabButton
                            icon={tabIcon4}
                            selected={activeTab === "4"}
                            onClick={() => setActiveTab("4")}
                        />
                    </div>
                    {activeTab === "1" && <ProfileForm />}
                    {activeTab === "2" && <TeamList />}
                    {activeTab === "3" && <HorseList />}
                    {activeTab === "4" && <ResultList />}
                </div>
            </div>
        </div>
    );
};

export default HorseProfileCompetitorLeft;
