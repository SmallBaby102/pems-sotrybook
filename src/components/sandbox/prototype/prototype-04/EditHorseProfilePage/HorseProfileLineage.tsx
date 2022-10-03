import profilePic1 from "./../assets/horse-pic-1.png";
import profilePic2 from "./../assets/horse-pic-2.png";
import profilePic3 from "./../assets/horse-pic-3.png";
import profilePic4 from "./../assets/horse-pic-4.png";
import closeIcon from "./../assets/close-icon.svg";
import addIcon from "./../assets/plus-icon-color.svg";
import whiteAddIcon from "./../assets/white-add-icon.svg";
import { useState } from "react";
import AddTeamMemberModal from "./Modals/AddTeamMemberModal";
import Prototype04Button from "./../global/Prototype04Button";
import AddLineageModal from "./Modals/AddLineageModal";

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

const HorseProfileLineage: React.FC = () => {
    const [addLineageModal, setAddLineageModal] = useState(false);
    interface teamType {
        profilePic: string;
        title: string;
        role: string;
    }
    const lineage: teamType[] = [
        {
            profilePic: profilePic1,
            title: "Still a Winner",
            role: "Sire",
        },
        {
            profilePic: profilePic2,
            title: "Winning-Streak",
            role: "Grand Sire",
        },
        {
            profilePic: profilePic3,
            title: "Wayfair",
            role: "Dam",
        },
        {
            profilePic: profilePic4,
            title: "Gerry Gone Riding",
            role: "Grand Dam",
        },
    ];
    return (
        <div>
            <AddLineageModal
                show={addLineageModal}
                onHide={() => setAddLineageModal(false)}
            />
            <div className="flex gap-2 items-center mb-2">
                <span>LINEAGE</span>
            </div>
            {lineage.length === 0 && (
                <div>
                    <DrawerP>
                        Connect your horses to the profiles of their sire, dam,
                        grand sire and grand dam.
                    </DrawerP>
                    <DrawerP>
                        Doing so will automatically sync their profiles when
                        entering your horses in competiton.
                    </DrawerP>
                    <div className="px-4 pt-10">
                        <Prototype04Button
                            caption="ADD LINEAGE"
                            type={1}
                            icon={whiteAddIcon}
                            onClick={() => setAddLineageModal(true)}
                        />
                    </div>
                </div>
            )}
            {lineage.map((item) => (
                <TeamProfileCard
                    title={item.title}
                    description={item.role}
                    onDelete={() => {}}
                    onEdit={() => {}}
                    profile={item.profilePic}
                />
            ))}
            {lineage.length > 0 && (
                <div>
                    {" "}
                    <button
                        className="w-full mt-6"
                        onClick={() => setAddLineageModal(true)}
                    >
                        <img src={addIcon} alt="add" className="mx-auto" />
                    </button>
                </div>
            )}
        </div>
    );
};
export default HorseProfileLineage;
