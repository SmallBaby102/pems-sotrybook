import userIcon from "./assets/user-icon.svg";

import profilePic1 from "./assets/profile-pic-1.png";
import profilePic2 from "./assets/profile-pic-2.png";

import closeIcon from "./assets/close-icon.svg";
import plusIcon from "./assets/plus-icon-color.svg";

import saveIcon from "./assets/save-icon.svg";
import { useState } from "react";
import DesktopFormBlock from "./components/DesktopFormBlock";

import authIcon from "./assets/auth-icon.svg";
import ExpandableSelector from "./components/ExpandableSelector";
import Prototype04Button from "./../prototype-04/global/Prototype04Button";
import AddTeamMemberModal from "./modals/AddTeamMemberModal";

const UserCard: React.FC<{
    profile: string;
    caption: string;
    onClick?: () => void;
}> = ({ profile, caption, onClick }) => (
    <div
        onClick={onClick}
        className="cursor-pointer flex flex-1 gap-2 items-center px-4 min-w-[300px] h-[56px] rounded-xl border-[1px] border-solid text-[14px] text-[#122B46] border-[#D3DAEE]"
    >
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
                src={profile}
                alt="profile"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
            {caption}
        </div>
    </div>
);

const TeamMemberRow: React.FC<{
    profile: string;
    caption: string;
    onDelete?: () => void;
    onEdit?: () => void;
}> = ({ profile, caption, onDelete, onEdit }) => {
    const [role, setRole] = useState("1");
    const [status, setStatus] = useState("1");
    const [active, setActive] = useState(false);

    const selectorHandle = (value: string, key: string) => {
        if (key === "role") {
            setRole(value);
        } else {
            setStatus(value);
        }
    };
    return (
        <div
            className={`flex-1 grid grid-cols-[400px_200px_32px] gap-2 items-start relative h-[56px] z-10 ${
                active ? "!z-20" : ""
            }`}
        >
            <UserCard caption={caption} profile={profile} onClick={onEdit} />
            <ExpandableSelector
                options={[
                    { caption: "Authorized", value: "1" },
                    { caption: "Unauthorized", value: "2" },
                ]}
                onChange={(value) => selectorHandle(value, "type")}
                placeholder="Status..."
                icon={authIcon}
                value={status}
                onOpen={() => setActive(true)}
                onClose={() => setActive(false)}
                hasBackdrop={true}
            />

            {onDelete && (
                <button className="mt-4 min-w-[32px]">
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

const TeamDesktop: React.FC = () => {
    const [teamMemberModalShow, setTeamMemberModalShow] = useState(false);

    return (
        <>
            <AddTeamMemberModal
                show={teamMemberModalShow}
                onHide={() => setTeamMemberModalShow(false)}
            />
            <div className="flex gap-4 flex-col bg-[#F6F7FB] h-screen w-screen">
                <h1 className="text-2xl font-bold mt-6 mb-3 p-0">Team</h1>
                <div className="flex-1 p-6 bg-white rounded-2xl flex gap-3 flex-col relative">
                    <div className="flex flex-col divide-y mt-4">
                        <div className="pb-8">
                            <h1 className="text-[20px] font-bold m-0">
                                Team settings
                            </h1>
                            <p className="text-[#122B4680] mt-2">
                                Add or remove team members and their
                                authorization to manage this account
                            </p>
                        </div>
                        <div className="py-5">
                            <DesktopFormBlock
                                caption="Team member 1"
                                icon={userIcon}
                                className="!overflow-visible"
                            >
                                <TeamMemberRow
                                    caption="Alex Lee"
                                    profile={profilePic1}
                                    onDelete={() => {}}
                                    onEdit={() => {}}
                                />
                            </DesktopFormBlock>
                            <DesktopFormBlock
                                caption="Team member 2"
                                icon={userIcon}
                                className="!overflow-visible"
                            >
                                <TeamMemberRow
                                    caption="Micheal Ulasi"
                                    profile={profilePic2}
                                    onDelete={() => {}}
                                    onEdit={() => {}}
                                />
                            </DesktopFormBlock>

                            <button
                                onClick={() => setTeamMemberModalShow(true)}
                                className="flex gap-2 items-center text-[#F7074F] text-[12px]"
                            >
                                <span>
                                    <img src={plusIcon} alt="icon" />
                                </span>
                                <span>Add team member</span>
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
                    </div>{" "}
                </div>
            </div>
        </>
    );
};

export default TeamDesktop;
