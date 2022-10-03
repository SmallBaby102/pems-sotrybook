import { useState } from "react";
import Prototype04Button from "../../global/Prototype04Button";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import profilePic1 from "./../../assets/profile-pic-1.png";
import profilePic2 from "./../../assets/profile-pic-2.png";
import profilePic3 from "./../../assets/profile-pic-3.png";
import profilePic4 from "./../../assets/profile-pic-4.png";
import profilePic5 from "./../../assets/profile-pic-5.png";

const AttendiesCard: React.FC<{
    profile: string;
    title: string;
    description: string;
}> = ({ profile, title, description }) => (
    <div className="flex gap-2 items-center text-[#122B46] text-[14px] my-3">
        <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
            <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
            />
        </div>
        <div>
            <div>{title}</div>
            <div className="opacity-70 text[12px]">{description}</div>
        </div>
    </div>
);

const AttendiesModal: React.FC<{
    show: boolean;
    onHide: () => void;
}> = ({ show, onHide }) => {
    const [currentTab, setCurrentTab] = useState("2");

    return (
        <div>
            <Prototype04DrawerComponent
                show={show}
                onHide={onHide}
                title="Attendees"
                maxWidth={600}
            >
                <AttendiesCard
                    title="Alex Lee"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic1}
                />
                <AttendiesCard
                    title="Ashfak Sayem"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic2}
                />
                <AttendiesCard
                    title="Micheal Ulasi"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic3}
                />
                <AttendiesCard
                    title="Cristofer"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic4}
                />
                <AttendiesCard
                    title="David  Silbia"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic5}
                />
                <AttendiesCard
                    title="Alex Lee"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic1}
                />
                <AttendiesCard
                    title="Ashfak Sayem"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic2}
                />
                <AttendiesCard
                    title="Micheal Ulasi"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic3}
                />
                <AttendiesCard
                    title="Cristofer"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic4}
                />
                <AttendiesCard
                    title="David  Silbia"
                    description="Australian • Zone 5 • Socks"
                    profile={profilePic5}
                />

                <div className="flex justify-center pt-4 mt-[40px]">
                    <Prototype04Button
                        type={3}
                        caption="CANCEL"
                        className="w-[240px]"
                        onClick={onHide}
                    />
                </div>
            </Prototype04DrawerComponent>
        </div>
    );
};
export default AttendiesModal;
