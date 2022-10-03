import { useState } from "react";
import EditOrganizationProfileForm from "./EditOrganizationProfileForm";
// import EditProfileTeams from "./EditProfileTeams";
// import EditProfileHorses from "./EditProfileHorses";

import backIcon from "../assets/back-icon.svg";
import profilePic from "../assets/profile-picture.png";
import cameraIcon from "../assets/camera.svg";
import tabIcon1 from "../assets/profile-tab-1.svg";
import orgIcon from "../assets/org-icon.svg";
import PontOfContactForm from "./PontOfContactForm";

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

const EditOrganizationProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");

    return (
        <div className="p-6">
            <div className="text-[24px] flex items-center gap-2">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Edit Profile</div>
            </div>
            <div className="relative w-[120px] h-[120px] mx-auto my-6">
                <div className="rounded-full w-[120px] h-[120px] overflow-hidden">
                    <img
                        src={profilePic}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <label className="bg-[#8C95AC] w-[30px] cursor-pointer h-[30px] rounded-full flex items-center justify-center absolute right-0 bottom-0">
                    <img src={cameraIcon} alt="camera" />
                    <input type="file" accept="images/*" className="hidden" />
                </label>
            </div>
            <div className="flex justify-center gap-3 mb-4">
                <TabButton
                    icon={orgIcon}
                    selected={activeTab === "1"}
                    onClick={() => setActiveTab("1")}
                />
                <TabButton
                    icon={tabIcon1}
                    selected={activeTab === "2"}
                    onClick={() => setActiveTab("2")}
                />
            </div>
            {activeTab === "1" && <EditOrganizationProfileForm />}
            {activeTab === "2" && <PontOfContactForm />}
        </div>
    );
};
export default EditOrganizationProfilePage;
