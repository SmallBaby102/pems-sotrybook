import { useState } from "react";
import Prototype04Button from "../global/Prototype04Button";
import DesktopFormBlock from "../global/DesktopFormBlock";

import horseIcon from "./../assets/horse-icon.svg";
import profilePic1 from "./../assets/profile-pic-1.png";
import profilePic2 from "./../assets/profile-pic-2.png";
import profilePic3 from "./../assets/profile-pic-3.png";
import profilePic4 from "./../assets/profile-pic-4.png";
import profilePic5 from "./../assets/profile-pic-5.png";
import profilePic6 from "./../assets/profile-pic-6.png";
import closeIcon from "./../assets/close-icon.svg";
import settingIcon from "./../assets/setting-icon.svg";
import plusIcon from "./../assets/plus-icon-color.svg";
import plusIconGrag from "./../assets/plus-icon.svg";
import searchIcon from "./../assets/search-icon-gray.svg";
import saveIcon from "./../assets/save-icon.svg";
import profile1 from "../assets/horse-pic-1.png";
import profile2 from "../assets/horse-pic-2.png";
import profile3 from "../assets/horse-pic-3.png";
import profile4 from "../assets/horse-pic-4.png";
import profile5 from "../assets/horse-pic-5.png";
import profile6 from "../assets/horse-pic-6.png";
import SearchHorseDesktopModal from "./Modals/SearchHorseDesktopModal";
import AddNewHorseDesktopModal from "./Modals/AddNewHorseDesktopModal";
import AddHorseModal from "../EditProfilePage/Modals/AddHorseModal";

const AddHorseButton: React.FC<{
    caption: string;
    icon: string;
    onClick: () => void;
}> = ({ caption, icon, onClick }) => (
    <button
        onClick={onClick}
        className="flex gap-2 items-center px-4 min-w-[300px] h-[56px] rounded-2xl border-[1px] border-solid text-[14px] text-[#122B46] border-[#D3DAEE]"
    >
        <div>
            <img src={icon} alt="profile picture" />
        </div>
        <div>
            <div className="text-[#122B4680] text-[14px]">{caption}</div>
        </div>
    </button>
);

const UserCard: React.FC<{
    title: string;
    description: string;
    image: string;
}> = ({ title, description, image }) => (
    // To be changed to Reace router link
    <div className="flex items-center gap-2">
        <a className="flex gap-2 items-center px-4 min-w-[300px] h-[56px] rounded-2xl border-[1px] border-solid text-[14px] text-[#122B46] border-[#D3DAEE]">
            <div>
                <img
                    src={image}
                    alt="profile picture"
                    className="w-[40px] h-[40px] object-cover rounded-full"
                />
            </div>
            <div>
                <div className="text-[#122B46] text-[14px]">{title}</div>
                <div className="text-[#122B46] text-[12px] opacity-70">
                    {description}
                </div>
            </div>
        </a>
        <div className="min-w-[24px] flex items-start">
            <button>
                <img
                    src={closeIcon}
                    alt="close"
                    className="grayscale opacity-70"
                />
            </button>
        </div>
    </div>
);

const HorseCard: React.FC<{
    profile: string;
    caption: string;
    description: string;
}> = ({ profile, caption, description }) => (
    <div className="flex gap-2 items-center px-2 min-w-[300px] h-[56px] rounded-2xl border-[1px] border-solid text-[14px] text-[#122B46] border-[#D3DAEE]">
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
                src={profile}
                alt="profile"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="flex-1">
            <div className="text-[#122B46] text-[14px]">{caption}</div>
            <div className="text-[#122B46] text-[12px] opacity-70">
                {description}
            </div>
        </div>
        <div className="min-w-[24px] flex items-center">
            <button className="bg-[#8C95AC20] rounded-lg p-1">
                <img
                    src={settingIcon}
                    alt="setting"
                    className="grayscale opacity-70"
                />
            </button>
        </div>
    </div>
);

const HorseTab: React.FC = () => {
    const [searchHorseModalShow, setSearchHorseModalShow] = useState(false);
    const [addNewHorseModalShow, setAddNewHorseModalShow] = useState(false);
    const [addHorse, setAddHorse] = useState(false);
    return (
        <>
            <AddHorseModal show={addHorse} onHide={() => setAddHorse(false)} />
            <SearchHorseDesktopModal
                show={searchHorseModalShow}
                onHide={() => setSearchHorseModalShow(false)}
            />
            <AddNewHorseDesktopModal
                show={addNewHorseModalShow}
                onHide={() => {
                    setAddNewHorseModalShow(false);
                }}
            />
            <div className="max-w-[850px] flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">
                        Horse settings
                    </h1>
                    <p className="text-[#122B4680] mt-2">
                        Add or remove horses from your account
                    </p>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Horse"
                        icon={horseIcon}
                        className="!overflow-visible"
                        captionOnTop={true}
                    >
                        <div className="flex gap-2 mt-4">
                            <div>
                                <HorseCard
                                    caption="Jared Tulsa"
                                    profile={profile1}
                                    description="Jumping • AA Show • Zone 4"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <UserCard
                                    title="Jared Tulsa"
                                    description="Owner"
                                    image={profilePic1}
                                />
                                <UserCard
                                    title="Jared Tulsa"
                                    description="Trainer"
                                    image={profilePic2}
                                />
                                <UserCard
                                    title="Jared Tulsa"
                                    description="Coach"
                                    image={profilePic3}
                                />
                            </div>
                        </div>
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Horse"
                        icon={horseIcon}
                        className="!overflow-visible"
                        captionOnTop={true}
                    >
                        <div className="flex gap-2 mt-4">
                            <div>
                                <HorseCard
                                    caption="Jared Tulsa"
                                    profile={profile1}
                                    description="Jumping • AA Show • Zone 4"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <UserCard
                                    title="Jared Tulsa"
                                    description="Owner"
                                    image={profilePic1}
                                />
                                <UserCard
                                    title="Jared Tulsa"
                                    description="Trainer"
                                    image={profilePic2}
                                />
                                <UserCard
                                    title="Jared Tulsa"
                                    description="Coach"
                                    image={profilePic3}
                                />
                            </div>
                        </div>
                    </DesktopFormBlock>

                    <button
                        onClick={() => {
                            setAddHorse(true);
                        }}
                        className="flex gap-2 items-center text-[#F7074F] text-[12px]"
                    >
                        <span>
                            <img src={plusIcon} alt="icon" />
                        </span>
                        <span>Add horse</span>
                    </button>
                </div>

                <div className="py-5">
                    <DesktopFormBlock
                        caption="Save all updates"
                        icon={saveIcon}
                    >
                        <Prototype04Button
                            caption="Save"
                            type={2}
                            className="w-auto px-12"
                        />
                    </DesktopFormBlock>
                </div>
            </div>
        </>
    );
};

export default HorseTab;
