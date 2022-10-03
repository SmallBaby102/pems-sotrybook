import { useState } from "react";

import closeIcon from "./../assets/close-icon.svg";
import addIcon from "./../assets/plus-icon-color.svg";
import profilePic1 from "./../assets/horse-pic-1.png";
import profilePic2 from "./../assets/horse-pic-2.png";
import profilePic3 from "./../assets/horse-pic-3.png";
import profilePic4 from "./../assets/horse-pic-4.png";
import profilePic5 from "./../assets/horse-pic-5.png";
import profilePic6 from "./../assets/horse-pic-6.png";
import AddHorseModal from "./Modals/AddHorseModal";

const TeamProfileCard: React.FC<{
    title: string;
    description: string;
    profile: string;
    onDelete: () => void;
}> = ({ title, description, profile, onDelete }) => (
    <div className="flex mt-2 gap-3 items-center border-solid border-[1px] border-[#D3DAEE] rounded-xl px-3 py-2">
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
        <button onClick={onDelete}>
            <img src={closeIcon} alt="close" className="grayscale opacity-70" />
        </button>
    </div>
);

const EditProfileHorses: React.FC = () => {
    const [addHorseModal, setAddHorseModal] = useState(false);
    return (
        <div>
            <AddHorseModal
                show={addHorseModal}
                onHide={() => setAddHorseModal(false)}
            />
            <div className="flex gap-2 items-center mb-2">
                <span>HORSES</span>
            </div>
            <TeamProfileCard
                title="Skippy"
                description="Jumping • AA Show • Zone 4"
                onDelete={() => {}}
                profile={profilePic1}
            />
            <TeamProfileCard
                title="Socks"
                description="Jumping • AA Show • Zone 4"
                onDelete={() => {}}
                profile={profilePic2}
            />
            <TeamProfileCard
                title="Mary-William"
                description="Jumping • A Show • Zone 3"
                onDelete={() => {}}
                profile={profilePic3}
            />
            <TeamProfileCard
                title="Jenny James"
                description="Dressage • Test 1v • Zone 4"
                onDelete={() => {}}
                profile={profilePic4}
            />
            <TeamProfileCard
                title="WillGo"
                description="Eventing • Prelim • Zone 6"
                onDelete={() => {}}
                profile={profilePic5}
            />
            <TeamProfileCard
                title="Jumping Jax"
                description="Eventing • CCI5* • Zone 4"
                onDelete={() => {}}
                profile={profilePic6}
            />
            <button
                className="w-full mt-6"
                onClick={() => setAddHorseModal(true)}
            >
                <img src={addIcon} alt="add" className="mx-auto" />
            </button>
        </div>
    );
};

export default EditProfileHorses;
