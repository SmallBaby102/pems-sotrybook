import profilePic1 from "./../assets/profile-pic-1.png";
import profilePic2 from "./../assets/profile-pic-2.png";
import closeIcon from "./../assets/close-icon.svg";
import addIcon from "./../assets/plus-icon-color.svg";
import whiteAddIcon from "./../assets/white-add-icon.svg";
import { useState } from "react";
import AddTeamMemberModal from "./Modals/AddTeamMemberModal";
import Prototype04Button from "./../global/Prototype04Button";

const TeamProfileCard: React.FC<{
    title: string;
    description: string;
    profile: string;
    onDelete: () => void;
    onEdit: () => void;
}> = ({ title, description, profile, onDelete, onEdit }) => (
    <div
        className="flex mt-2 gap-3 items-center border-solid border-[1px] border-[#D3DAEE] rounded-xl px-3 py-2 cursor-pointer"
        onClick={onEdit}
    >
        <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
            <img
                src={profile}
                alt="profile"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="flex-1">
            <h1 className="text-[14px] text-[#122B46] m-0">{title}</h1>
            <p className="text-[12px] text-[#122B46B3]">{description}</p>
        </div>
        <button
            onClick={(event) => {
                event.stopPropagation();
                onDelete();
            }}
        >
            <img src={closeIcon} alt="close" className="grayscale opacity-70" />
        </button>
    </div>
);

const DrawerP: React.FC<{ children: any }> = ({ children }) => (
    <p className="mt-4 text-[#122B4680]">{children}</p>
);

const HorseProfileTeam: React.FC = () => {
    const [addTeamMemeberModal, setAddTeamMemberModal] = useState(false);
    interface teamType {
        profilePic: string;
        title: string;
        role: string;
    }
    const team: teamType[] = [
        // {
        //     profilePic: profilePic1,
        //     title: "Samantha Jones",
        //     role: "Trainer",
        // },
        // {
        //     profilePic: profilePic2,
        //     title: "Micheal Ulasi",
        //     role: "Owner",
        // },
    ];
    return (
        <div>
            <AddTeamMemberModal
                show={addTeamMemeberModal}
                onHide={() => setAddTeamMemberModal(false)}
            />
            <div className="flex gap-2 items-center mb-2">
                <span>TEAM</span>
            </div>
            {team.length === 0 && (
                <div>
                    <DrawerP>
                        Team allows you to idenitfy the Rider, Owner, Trainer
                        and Coach of your horse.
                    </DrawerP>
                    <DrawerP>
                        Doing so will automate registration paperwork and
                        notifications regarding performance results, etc.
                    </DrawerP>
                    <DrawerP>
                        Profiles connected to your horse will display in your
                        rider profile team automatically.
                    </DrawerP>
                    <div className="px-4 pt-10">
                        <Prototype04Button
                            caption="Add TEAM MEMBER"
                            type={1}
                            icon={whiteAddIcon}
                            onClick={() => setAddTeamMemberModal(true)}
                        />
                    </div>
                </div>
            )}
            {team.map((item) => (
                <TeamProfileCard
                    title={item.title}
                    description={item.role}
                    onDelete={() => {}}
                    onEdit={() => {}}
                    profile={item.profilePic}
                />
            ))}
            {team.length > 0 && (
                <div>
                    {" "}
                    <button
                        className="w-full mt-6"
                        onClick={() => setAddTeamMemberModal(true)}
                    >
                        <img src={addIcon} alt="add" className="mx-auto" />
                    </button>
                </div>
            )}
        </div>
    );
};
export default HorseProfileTeam;
