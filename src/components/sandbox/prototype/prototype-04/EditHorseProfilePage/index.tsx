import { useState, useEffect } from "react";

import backIcon from "../assets/back-icon.svg";
import profilePic from "../assets/horse-thumb.svg";
import tabIcon1 from "../assets/profile-tab-3.svg";
import tabIcon2 from "../assets/profile-tab-2.svg";
import tabIcon3 from "../assets/profile-tab-5.svg";
import ProfileForm from "./ProfileForm";

import cameraIcon from "../assets/camera.svg";
import CompleteProfileModal from "./CompleteProfileModal";
import CameraRoleModal from "./Modals/CameraRoleModal";
import HorseProfileTeam from "./HorseProfileTeam";
import HorseProfileLineage from "./HorseProfileLineage";

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

const EditHorseProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [completeModal, setCompleteModal] = useState(false);
    const [cameraRoleModal, setCameraRoleModal] = useState(false);
    const [profilePicValue, setProfilePicValue] = useState<
        [{ id: number; image: string }] | []
    >([]);
    const cameraRoleModalValueHandle = (value: any) => {
        setProfilePicValue(value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => setCompleteModal(true), 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="p-6">
            <CompleteProfileModal
                show={completeModal}
                onHide={() => setCompleteModal(false)}
            />
            <CameraRoleModal
                show={cameraRoleModal}
                onHide={() => setCameraRoleModal(false)}
                onChange={(value) => cameraRoleModalValueHandle(value)}
                value={profilePicValue}
            />
            <div>
                <div className="text-[24px] flex items-center gap-2">
                    <button>
                        <img src={backIcon} alt="back" />
                    </button>
                    <div>Edit profile</div>
                </div>
                <div className="relative w-[120px] h-[120px] mx-auto my-6">
                    <div className="rounded-full flex items-center justify-center w-[120px] h-[120px] overflow-hidden bg-[#F6F7FB]">
                        <img
                            src={profilePicValue[0]?.image || profilePic}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <label
                        onClick={() => setCameraRoleModal(true)}
                        className="bg-[#8C95AC] w-[30px] cursor-pointer h-[30px] rounded-full flex items-center justify-center absolute right-0 bottom-0"
                    >
                        <img src={cameraIcon} alt="camera" />
                    </label>
                </div>
                <div className="flex mx-6 justify-center gap-3 mb-6">
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
                </div>
                {activeTab === "1" && <ProfileForm />}
                {activeTab === "2" && <HorseProfileTeam />}
                {activeTab === "3" && <HorseProfileLineage />}
            </div>
        </div>
    );
};

export default EditHorseProfilePage;
