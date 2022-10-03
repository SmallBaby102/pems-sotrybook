import Prototype04Input from "../global/Prototype04Input";
import emailIcon from "./../assets/email.svg";
import profileIcon from "./../assets/profile-icon.svg";
import locationIcon from "./../assets/location.svg";
import birthdayIcon from "./../assets/birthday.svg";
import userIcon from "./../assets/user-icon.svg";
import disciplineIcon from "./../assets/horse-icon.svg";
import zoneIcon from "./../assets/chart.svg";
import categoryIcon from "./../assets/field-number.svg";
import syncIcon from "./../assets/sync-icon-red.svg";
import syncIconGreen from "./../assets/sync-icon-green.svg";
import expireIcon from "./../assets/expire-icon-green.svg";
import buildingIcon from "./../assets/building-icon.svg";
import profilePic from "./../assets/user-icon-big.svg";
import cameraIcon from "./../assets/camera.svg";
import addressIcon from "./../assets/address.svg";
import phoneIcon from "./../assets/phone-icon.svg";
import Prototype04Button from "../global/Prototype04Button";
import ButtonElement from "../../../../elements/buttons/button/ButtonElement";
import CreditCardBox from "./../global/CreditCardBox";
import eventOrg from "./../assets/event-org.png";
import notifIcon from "./../assets/notification.svg";
import saveIcon from "./../assets/save-icon.svg";
import NotificationSwitch from "../global/NotificationSwitch";
import AddCreditCardModal from "./Modals/AddCreditCardModal";
import { useState } from "react";
import DesktopFormBlock from "../global/DesktopFormBlock";
import {
    RedNotificationCard,
    GreenNotificationCard,
} from "../global/NotificationCards";
import RenewModalDesktop from "./Modals/RenewModalDesktop";
import SyncModalDesktop from "./Modals/SyncModalDesktop";

const GreenButton: React.FC = () => (
    <Prototype04Button
        type={2}
        caption="Sync profile"
        className="w-auto flex-1 text-[14px] invert-[55%] sepia-[42%] saturate-[2993%] hue-rotate-[137deg] brightness-[92%] contrast-[101%]"
        icon={syncIcon}
    />
);

const ProfileTab: React.FC = () => {
    const [renewModalShow, setRenewModalShow] = useState(false);
    const [syncModalShow, setSyncModalShow] = useState(false);
    return (
        <>
            <RenewModalDesktop
                show={renewModalShow}
                onHide={() => setRenewModalShow(false)}
            />
            <SyncModalDesktop
                show={syncModalShow}
                onHide={() => setSyncModalShow(false)}
            />
            <div className="max-w-[850px] flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">
                        Profile settings
                    </h1>
                    <p className="text-[#122B4680] mt-2">
                        Update your profile details
                    </p>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Profile picture"
                        icon={profileIcon}
                    >
                        <div className="relative w-[90px] h-[90px]">
                            <div className="rounded-full flex items-center justify-center w-[90px] h-[90px] overflow-hidden bg-[#F6F7FB]">
                                <img
                                    src={profilePic}
                                    alt="profile"
                                    className="w-[80%] h-[80%] object-cover"
                                />
                            </div>
                            <label className="bg-[#8C95AC] w-[30px] cursor-pointer h-[30px] rounded-full flex items-center justify-center absolute right-0 bottom-0">
                                <img src={cameraIcon} alt="camera" />
                                <input
                                    type="file"
                                    accept="images/*"
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="USEF profile synchronization"
                        icon={buildingIcon}
                    >
                        <div className="flex gap-2 flex-1">
                            <GreenNotificationCard
                                icon={eventOrg}
                                text="Profile Synced"
                                className="!p-2 flex-1"
                            />
                            <Prototype04Button
                                type={2}
                                caption="Sync profile"
                                className="w-auto flex-1 text-[14px]"
                                color="#00B6AA"
                                icon={syncIconGreen}
                            />
                        </div>
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="USEF profile status"
                        icon={buildingIcon}
                    >
                        <div className="flex gap-2 flex-1">
                            <GreenNotificationCard
                                icon={eventOrg}
                                text="Membership active"
                                className="!p-2 flex-1"
                            />
                            <Prototype04Button
                                type={4}
                                caption="Renew Membership"
                                className="w-auto flex-1 text-[14px]"
                                color="#00B6AA"
                                bgColor="#00B6AA16"
                                icon={expireIcon}
                            />
                        </div>
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="USEF profile synchronization"
                        icon={buildingIcon}
                    >
                        <div className="flex gap-2 flex-1">
                            <RedNotificationCard
                                icon={eventOrg}
                                text="Profile not synced"
                                className="!p-2 flex-1"
                            />
                            <Prototype04Button
                                type={2}
                                caption="Sync profile"
                                className="w-auto flex-1 text-[14px]"
                                icon={syncIcon}
                                onClick={() => setSyncModalShow(true)}
                            />
                        </div>
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="USEF profile status"
                        icon={buildingIcon}
                    >
                        <div className="flex gap-2 flex-1">
                            <RedNotificationCard
                                icon={eventOrg}
                                text="Membership expired"
                                className="!p-2 flex-1"
                            />
                            <Prototype04Button
                                type={2}
                                caption="Renew Membership"
                                className="w-auto flex-1 text-[14px]"
                                icon={syncIcon}
                                onClick={() => setRenewModalShow(true)}
                            />
                        </div>
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock caption="First name" icon={userIcon}>
                        <Prototype04Input
                            type="text"
                            placeholder="Enter name..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Last name" icon={userIcon}>
                        <Prototype04Input
                            type="text"
                            placeholder="Enter name..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Nationality" icon={locationIcon}>
                        <Prototype04Input
                            type="select"
                            placeholder="Enter Nationality..."
                            value={[{ name: "USA" }, { name: "Malaysia" }]}
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Date of birth"
                        icon={birthdayIcon}
                    >
                        <Prototype04Input
                            type="date"
                            placeholder="Enter birtday..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Address" icon={addressIcon}>
                        <Prototype04Input
                            type="date"
                            placeholder="Enter address..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Phone number" icon={phoneIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="Enter phone number..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Email address" icon={emailIcon}>
                        <Prototype04Input
                            type="email"
                            placeholder="Enter email..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Discipline"
                        icon={disciplineIcon}
                    >
                        <Prototype04Input
                            type="select"
                            placeholder="Enter Discipline..."
                            value={[{ name: "1" }, { name: "2" }]}
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Zone" icon={zoneIcon}>
                        <Prototype04Input
                            type="select"
                            placeholder="Enter Zone..."
                            value={[{ name: "1" }, { name: "2" }]}
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock caption="FEI number" icon={categoryIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="Enter number..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="USEF number" icon={categoryIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="Enter number..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="USDF number" icon={categoryIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="Enter number..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="USEA number" icon={categoryIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="Enter number..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="USHJA number"
                        icon={categoryIcon}
                    >
                        <Prototype04Input
                            type="tel"
                            placeholder="Enter number..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Other" icon={categoryIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="Enter number..."
                            value=""
                            onChange={() => {}}
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

export default ProfileTab;
