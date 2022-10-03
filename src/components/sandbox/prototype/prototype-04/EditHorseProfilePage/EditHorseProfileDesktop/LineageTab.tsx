import DesktopFormBlock from "./../../global/DesktopFormBlock";
import { useState } from "react";

import closeIcon from "./../../assets/close-icon.svg";
import plusIcon from "./../../assets/plus-icon-color.svg";
import ExpandableSelector from "./../../global/ExpandableSelector";

import Prototype04Button from "./../../global/Prototype04Button";
import syncIconGray from "./../../assets/sync-icon-gray.svg";
import profilePic1 from "./../../assets/horse-pic-1.png";
import profilePic2 from "./../../assets/horse-pic-2.png";
import profilePic3 from "./../../assets/horse-pic-3.png";
import horseIcon from "./../../assets/horse-icon.svg";
import AddNewHorseDesktopModal from "./../../EditProfileCompatitorDesktop/Modals/AddNewHorseDesktopModal";
import AddHorseModal from "./../../EditProfilePage/Modals/AddHorseModal";
import SearchHorseDesktopModal from "./../../EditProfileCompatitorDesktop/Modals/SearchHorseDesktopModal";

const UserCard: React.FC<{
    profile: string;
    caption: string;
    description: string;
}> = ({ profile, caption, description }) => (
    <div className="flex gap-2 items-center px-4 min-w-[300px] h-[56px] rounded-2xl border-[1px] border-solid text-[14px] text-[#122B46] border-[#D3DAEE]">
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
                src={profile}
                alt="profile"
                className="object-cover w-full h-full"
            />
        </div>
        <div>
            <div>{caption}</div>
            <div className="text-[12px] opacity-75">{description}</div>
        </div>
    </div>
);

const LineageRow: React.FC<{
    profile: string;
    caption: string;
    description: string;
    onDelete?: () => void;
}> = ({ profile, caption, onDelete, description }) => {
    const [role, setRole] = useState("1");
    const [auth, setAuth] = useState("1");
    const [active, setActive] = useState(false);
    const selectorHandle = (value: string, key: string) => {
        if (key === "role") {
            setRole(value);
        } else {
            setAuth(value);
        }
    };
    return (
        <div
            className={`flex gap-2 items-start relative h-[56px] z-10 ${
                active ? "!z-20" : ""
            }`}
        >
            <UserCard
                caption={caption}
                profile={profile}
                description={description}
            />

            <ExpandableSelector
                options={[
                    { caption: "Owner", value: "1" },
                    { caption: "Coach", value: "2" },
                    { caption: "Trainer", value: "3" },
                ]}
                onChange={(value) => selectorHandle(value, "auth")}
                placeholder="Select authority..."
                value={auth}
                className="w-[200px]"
                onOpen={() => setActive(true)}
                onClose={() => setActive(false)}
                hasBackdrop={true}
            />
            {onDelete && (
                <button className="mt-4">
                    <img
                        src={closeIcon}
                        alt="close"
                        className="grayscale opacity-70"
                    />
                </button>
            )}
        </div>
    );
};

const TeamBox: React.FC<{ profile: string; title: string }> = ({
    profile,
    title,
}) => (
    <div className="flex items-center gap-2 text-[14px] text-[#122B46] w-[360px]">
        <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
            <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
            />
        </div>
        <div>{title}</div>
    </div>
);

const LineageTab: React.FC = () => {
    const [addHorseModal, setAddHorseModal] = useState(false);
    return (
        <div>
            <SearchHorseDesktopModal
                show={addHorseModal}
                onHide={() => setAddHorseModal(false)}
            />
            <div className="flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">Team members</h1>
                    <p className="text-[#122B4680] mt-2">
                        Add, edit or remove horses team members
                    </p>
                </div>

                <DesktopFormBlock
                    caption="Horse 1"
                    icon={horseIcon}
                    className="py-2 pt-6 !overflow-visible my-0"
                >
                    <div className="flex gap-2 flex-wrap">
                        <LineageRow
                            caption="Jenny Jumper"
                            description="Jumping • AA Show • Zone 4"
                            profile={profilePic1}
                            onDelete={() => {}}
                        />
                    </div>
                </DesktopFormBlock>

                <DesktopFormBlock
                    caption="Horse 2"
                    icon={horseIcon}
                    className="overflow-visible my-0 border-none"
                >
                    <div className="flex gap-2 flex-wrap">
                        <LineageRow
                            caption="Kandy Kane"
                            profile={profilePic2}
                            description="Jumping • AA Show • Zone 4"
                            onDelete={() => {}}
                        />
                    </div>
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Horse 3"
                    icon={horseIcon}
                    className="py-2 border-none my-0 !overflow-visible"
                >
                    <div className="flex gap-2 flex-wrap">
                        <LineageRow
                            caption="Lowis Loan"
                            profile={profilePic3}
                            description="Jumping • AA Show • Zone 4"
                            onDelete={() => {}}
                        />
                    </div>
                </DesktopFormBlock>
                <button
                    className="flex gap-2 items-center text-[#F7074F] text-[12px] mb-6"
                    onClick={() => setAddHorseModal(true)}
                >
                    <span>
                        <img src={plusIcon} alt="icon" />
                    </span>
                    <span>Add horse</span>
                </button>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Save all updates"
                        icon={syncIconGray}
                    >
                        <Prototype04Button
                            caption="Save"
                            type={2}
                            className="w-auto px-12"
                        />
                    </DesktopFormBlock>
                </div>
            </div>
        </div>
    );
};

export default LineageTab;
