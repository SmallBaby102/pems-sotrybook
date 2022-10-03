import { useState } from "react";
import TeamsModal from "./Modals/TeamsModal";
import AddTeamMemberModal from "./Modals/AddTeamMemberModal";

import questionMarkIcon from "./../assets/question-mark.svg";
import profilePic1 from "./../assets/profile-pic-1.png";
import profilePic2 from "./../assets/profile-pic-2.png";
import profilePic3 from "./../assets/profile-pic-3.png";
import profilePic4 from "./../assets/profile-pic-4.png";
import profilePic5 from "./../assets/profile-pic-5.png";
import profilePic6 from "./../assets/profile-pic-6.png";
import closeIcon from "./../assets/close-icon.svg";
import addIcon from "./../assets/plus-icon-color.svg";
import EditTeamMemberModal from "./Modals/EditTeamMemberModal";
import RemoveTeamMemberModal from "./Modals/RemoveTeamMemberModal";

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

const EditProfileTeams: React.FC = () => {
    const [teamsModal, setTeamsModal] = useState(false);
    const [addTeamMemeberModal, setAddTeamMemberModal] = useState(false);
    const [editTeamMemberModalShow, setEditTeamMemberModalShow] =
        useState(false);
    const [removeTeamMemberModalShow, setRemoveTeamMemberModalShow] =
        useState(false);
    return (
        <div>
            <TeamsModal show={teamsModal} onHide={() => setTeamsModal(false)} />
            <AddTeamMemberModal
                show={addTeamMemeberModal}
                onHide={() => setAddTeamMemberModal(false)}
            />
            <EditTeamMemberModal
                show={editTeamMemberModalShow}
                onHide={() => setEditTeamMemberModalShow(false)}
            />
            <RemoveTeamMemberModal
                show={removeTeamMemberModalShow}
                onHide={() => setRemoveTeamMemberModalShow(false)}
            />
            <div className="flex gap-2 items-center mb-2">
                <span>TEAM</span>
                <button onClick={() => setTeamsModal(true)}>
                    <img src={questionMarkIcon} alt="icon" />
                </button>
            </div>
            <TeamProfileCard
                title="Alex Lee"
                description="Trainer • Oakland, CA"
                onDelete={() => setRemoveTeamMemberModalShow(true)}
                onEdit={() => {
                    setEditTeamMemberModalShow(true);
                }}
                profile={profilePic1}
            />
            <TeamProfileCard
                title="Micheal Ulasi"
                description="Exhibitor • Middleburg, VA"
                onDelete={() => setRemoveTeamMemberModalShow(true)}
                onEdit={() => {
                    setEditTeamMemberModalShow(true);
                }}
                profile={profilePic2}
            />
            <TeamProfileCard
                title="Cristofer grace"
                description="Owner • West Palm Beach, FL"
                onDelete={() => setRemoveTeamMemberModalShow(true)}
                onEdit={() => {
                    setEditTeamMemberModalShow(true);
                }}
                profile={profilePic3}
            />
            <TeamProfileCard
                title="Michelle Williams"
                description="Owner • Marshall, VA"
                onDelete={() => setRemoveTeamMemberModalShow(true)}
                onEdit={() => {
                    setEditTeamMemberModalShow(true);
                }}
                profile={profilePic4}
            />
            <TeamProfileCard
                title="Jared Tulsa"
                description="Owner • Lexington, KT"
                onDelete={() => setRemoveTeamMemberModalShow(true)}
                onEdit={() => {
                    setEditTeamMemberModalShow(true);
                }}
                profile={profilePic5}
            />
            <TeamProfileCard
                title="Thomas Woods"
                description="Coach • Greenwich, CT"
                onDelete={() => setRemoveTeamMemberModalShow(true)}
                onEdit={() => {
                    setEditTeamMemberModalShow(true);
                }}
                profile={profilePic6}
            />
            <button
                className="w-full mt-6"
                onClick={() => setAddTeamMemberModal(true)}
            >
                <img src={addIcon} alt="add" className="mx-auto" />
            </button>
        </div>
    );
};

export default EditProfileTeams;
