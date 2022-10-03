import userIcon from "./../assets/user-icon.svg";

import profilePic1 from "./../assets/profile-pic-1.png";
import profilePic2 from "./../assets/profile-pic-2.png";

import closeIcon from "./../assets/close-icon.svg";

import Prototype04Button from "../global/Prototype04Button";

import plusIcon from "./../assets/plus-icon-color.svg";
import saveIcon from "./../assets/save-icon.svg";
import { useState } from "react";
import DesktopFormBlock from "../global/DesktopFormBlock";

import ExpandableSelector from "./../global/ExpandableSelector";
import authorityIcon from "./../assets/authority-icon.svg";

import AddTeamMemberDesktopModal from "./Modals/AddTeamMemberDesktopModal";

const UserCard: React.FC<{ profile: string; caption: string }> = ({
    profile,
    caption,
}) => (
    <div className="flex gap-2 items-center px-4 min-w-[300px] h-[56px] rounded-2xl border-[1px] border-solid text-[14px] text-[#122B46] border-[#D3DAEE]">
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
                src={profile}
                alt="profile"
                className="object-cover w-full h-full"
            />
        </div>
        <div>{caption}</div>
    </div>
);

const TeamMemberRow: React.FC<{
    profile: string;
    caption: string;
    onDelete?: () => void;
}> = ({ profile, caption, onDelete }) => {
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
            <UserCard caption={caption} profile={profile} />

            <ExpandableSelector
                options={[
                    { caption: "Authorized", value: "1" },
                    { caption: "Unauthorized", value: "2" },
                ]}
                onChange={(value) => selectorHandle(value, "auth")}
                placeholder="Select authority..."
                icon={authorityIcon}
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

const TeamTab: React.FC = () => {
    const [addMemberModalShow, setAddMemberModalShow] = useState(false);
    return (
        <>
            <AddTeamMemberDesktopModal
                show={addMemberModalShow}
                onHide={() => {
                    setAddMemberModalShow(false);
                }}
            />
            <div className="max-w-[850px] flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">Team settings</h1>
                    <p className="text-[#122B4680] mt-2">
                        Add or remove team members and their authorizations
                    </p>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Rider"
                        icon={userIcon}
                        className="!overflow-visible"
                    >
                        <TeamMemberRow
                            caption="Alex Lee"
                            profile={profilePic1}
                            onDelete={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Rider"
                        icon={userIcon}
                        className="!overflow-visible"
                    >
                        <TeamMemberRow
                            caption="Micheal Ulasi"
                            profile={profilePic2}
                            onDelete={() => {}}
                        />
                    </DesktopFormBlock>

                    <button
                        onClick={() => {
                            setAddMemberModalShow(true);
                        }}
                        className="flex gap-2 items-center text-[#F7074F] text-[12px]"
                    >
                        <span>
                            <img src={plusIcon} alt="icon" />
                        </span>
                        <span>Add team mate</span>
                    </button>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Rider"
                        icon={userIcon}
                        className="!overflow-visible"
                        description="Edit in horse settings"
                    >
                        <TeamMemberRow
                            caption="Alex Lee"
                            profile={profilePic1}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Rider"
                        icon={userIcon}
                        className="!overflow-visible"
                        description="Edit in horse settings"
                    >
                        <TeamMemberRow
                            caption="Micheal Ulasi"
                            profile={profilePic2}
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Trainer"
                        icon={userIcon}
                        className="!overflow-visible"
                        description="Edit in horse settings"
                    >
                        <TeamMemberRow
                            caption="Alex Lee"
                            profile={profilePic1}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Trainer"
                        icon={userIcon}
                        className="!overflow-visible"
                        description="Edit in horse settings"
                    >
                        <TeamMemberRow
                            caption="Micheal Ulasi"
                            profile={profilePic2}
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Coach"
                        icon={userIcon}
                        className="!overflow-visible"
                        description="Edit in horse settings"
                    >
                        <TeamMemberRow
                            caption="Alex Lee"
                            profile={profilePic1}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Coach"
                        icon={userIcon}
                        className="!overflow-visible"
                        description="Edit in horse settings"
                    >
                        <TeamMemberRow
                            caption="Micheal Ulasi"
                            profile={profilePic2}
                        />
                    </DesktopFormBlock>
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

export default TeamTab;
