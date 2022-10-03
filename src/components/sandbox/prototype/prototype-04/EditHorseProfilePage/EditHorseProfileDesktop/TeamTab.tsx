import DesktopFormBlock from "./../../global/DesktopFormBlock";
import { useState } from "react";
import closeIcon from "./../../assets/close-icon.svg";
import plusIcon from "./../../assets/plus-icon-color.svg";
import ExpandableSelector from "./../../global/ExpandableSelector";
import Prototype04Button from "./../../global/Prototype04Button";
import syncIconGray from "./../../assets/sync-icon-gray.svg";
import userIcon from "./../../assets/user-icon.svg";
import profilePic1 from "./../../assets/profile-pic-1.png";
import profilePic2 from "./../../assets/profile-pic-2.png";
import profilePic3 from "./../../assets/profile-pic-3.png";
import AddTeamMemberDesktopModal from "../../EditProfileCompatitorDesktop/Modals/AddTeamMemberDesktopModal";

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

const TeamTab: React.FC = () => {
    const [addTeamModal, setAddTeamModal] = useState(false);
    return (
        <div>
            <AddTeamMemberDesktopModal
                show={addTeamModal}
                onHide={() => setAddTeamModal(false)}
            />
            <div className="flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">Team members</h1>
                    <p className="text-[#122B4680] mt-2">
                        Add, edit or remove horses team members
                    </p>
                </div>

                <DesktopFormBlock
                    caption="Owner"
                    icon={userIcon}
                    className="py-2 !overflow-visible"
                >
                    <div className="flex gap-2 flex-wrap">
                        <TeamMemberRow
                            caption="Alex Lee"
                            profile={profilePic1}
                        />
                    </div>
                </DesktopFormBlock>

                <DesktopFormBlock
                    caption="Team member 2"
                    icon={userIcon}
                    className="pt-6 overflow-visible my-0"
                >
                    <div className="flex gap-2 flex-wrap">
                        <TeamMemberRow
                            caption="Micheal Ulasi"
                            profile={profilePic2}
                            onDelete={() => {}}
                        />
                    </div>
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Team member 3"
                    icon={userIcon}
                    className="py-2 border-none my-0 !overflow-visible"
                >
                    <div className="flex gap-2 flex-wrap">
                        <TeamMemberRow
                            caption="Micheal Ulasi"
                            profile={profilePic3}
                            onDelete={() => {}}
                        />
                    </div>
                </DesktopFormBlock>
                <button
                    className="flex gap-2 items-center text-[#F7074F] text-[12px] mb-6"
                    onClick={() => setAddTeamModal(true)}
                >
                    <span>
                        <img src={plusIcon} alt="icon" />
                    </span>
                    <span>Add team member</span>
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

export default TeamTab;
