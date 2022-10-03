import DesktopFormBlock from "./../../global/DesktopFormBlock";
import profilePic from "./../../assets/horse-thumb.svg";
import profileIcon from "./../../assets/profile-icon.svg";
import cameraIcon from "./../../assets/camera.svg";
import { GreenNotificationCard } from "../../global/NotificationCards";
import Prototype04Button from "./../../global/Prototype04Button";
import buildingIcon from "./../../assets/building-icon.svg";
import eventOrg from "./../../assets/event-org.png";
import syncIcon from "./../../assets/sync-icon-red.svg";
import syncIconGreen from "./../../assets/sync-icon-green.svg";
import syncIconGray from "./../../assets/sync-icon-gray.svg";
import Prototype04Input from "./../../global/Prototype04Input";
import { useState } from "react";
import { RedNotificationCard } from "./../../global/NotificationCards";
import expireIconGreen from "./../../assets/expire-icon-green.svg";
import CardLink from "./../../global/CardLink";

import typeIcon from "./../../assets/profile-tab-5.svg";
import rulerIcon from "./../../assets/ruler.svg";
import clockIcon from "./../../assets/clock.svg";
import genderIcon from "./../../assets/gender.svg";
import horseIcon from "./../../assets/horse-icon.svg";
import colorIcon from "./../../assets/color.svg";
import brushIcon from "./../../assets/brush.svg";
import positionIcon from "./../../assets/position-icon.svg";
import zoneIcon from "./../../assets/chart.svg";
import locationIcon from "./../../assets/location.svg";
import LocationModal from "./../../EditProfilePage/Modals/LocationModal";
import MarkingModal from "./../Modals/MarkingModal";
import ColorModal from "./../Modals/ColorModal";
import ZoneModal from "./../../EditProfilePage/Modals/ZoneModal";
import DisciplineModal from "./../Modals/DisciplineModal";
import GenderModal from "./../Modals/GenderModal";
import HeightModal from "./../Modals/HeightModal";
import BreedModal from "./../Modals/BreedModal";
import numberIcon from "./../../assets/field-number.svg";
import microchipIcon from "./../../assets/microchip-icon.svg";
import planeIcon from "./../../assets/plane.svg";
import ZoneHelpModal from "../../EditProfilePage/Modals/ZoneHelpModal";

interface formDataTypes {
    EFINumber: string;
    USEFNumber: string;
    horseName: string;
    breed: [{ id: number; caption: string }] | [];
    height: [{ id: number; caption: string }] | [];
    dateOfBirth: string;
    gender: [{ id: number; caption: string }] | [];
    discipline: [{ id: number; caption: string }] | [];
    zone: string;
    color: [{ id: number; caption: string }] | [];
    markings: [{ id: number; caption: string }] | [];
    location: string;
    microchip: string;
    passport: string;
    FEI: string;
    USEF: string;
    USDF: string;
    USEA: string;
    USHJA: string;
    other: string[];
}

const HorseDataTab: React.FC = () => {
    const [formData, setFormData] = useState<formDataTypes>({
        EFINumber: "",
        USEFNumber: "",
        horseName: "",
        breed: [],
        height: [],
        dateOfBirth: "",
        gender: [],
        discipline: [],
        zone: "",
        color: [],
        markings: [],
        location: "",
        microchip: "",
        passport: "",
        FEI: "",
        USEF: "",
        USDF: "",
        USEA: "",
        USHJA: "",
        other: ["", ""],
    });
    const [breedModal, setBreedModal] = useState(false);
    const [heightModal, setHeightModal] = useState(false);
    const [genderModal, setGenderModal] = useState(false);
    const [disciplineModal, setDisciplineModal] = useState(false);
    const [zoneModal, setZoneModal] = useState(false);
    const [zoneHelpModal, setZoneHelpModal] = useState(false);
    const [colorModal, setColorModal] = useState(false);
    const [markingModal, setMarkingModal] = useState(false);
    const [locationModal, setLocationModal] = useState(false);
    const breedModalValueHandle = (value: any) => {
        setFormData({ ...formData, breed: value });
    };
    const heightModalValueHandle = (value: any) => {
        setFormData({ ...formData, height: value });
    };
    const genderModalValueHandle = (value: any) => {
        setFormData({ ...formData, gender: value });
    };
    const disciplineModalValueHandle = (value: any) => {
        setFormData({ ...formData, discipline: value });
    };
    const zoneModalValueHandle = (value: any) => {
        setFormData({ ...formData, zone: value });
    };
    const colorModalValueHandle = (value: any) => {
        setFormData({ ...formData, color: value });
    };
    const markingModalValueHandle = (value: any) => {
        setFormData({ ...formData, markings: value });
    };
    const locationModalHandle = (value: any) => {
        setFormData({ ...formData, location: value });
    };
    return (
        <div>
            <BreedModal
                show={breedModal}
                onHide={() => setBreedModal(false)}
                onChange={(value) => breedModalValueHandle(value)}
                value={formData.breed}
            />
            <HeightModal
                show={heightModal}
                onHide={() => setHeightModal(false)}
                onChange={(value) => heightModalValueHandle(value)}
                value={formData.height}
            />
            <GenderModal
                show={genderModal}
                onHide={() => setGenderModal(false)}
                onChange={(value) => genderModalValueHandle(value)}
                value={formData.gender}
            />
            <DisciplineModal
                show={disciplineModal}
                onHide={() => setDisciplineModal(false)}
                onChange={(value) => disciplineModalValueHandle(value)}
                value={formData.discipline}
            />
            <ZoneModal
                show={zoneModal}
                onHide={() => setZoneModal(false)}
                onChange={(value) => zoneModalValueHandle(value)}
                value={formData.zone}
            />
            <ZoneHelpModal
                show={zoneHelpModal}
                onHide={() => setZoneHelpModal(false)}
            />
            <ColorModal
                show={colorModal}
                onHide={() => setColorModal(false)}
                onChange={(value) => colorModalValueHandle(value)}
                value={formData.color}
            />
            <MarkingModal
                show={markingModal}
                onHide={() => setMarkingModal(false)}
                onChange={(value) => markingModalValueHandle(value)}
                value={formData.markings}
                multiple={true}
            />
            <LocationModal
                show={locationModal}
                onHide={() => setLocationModal(false)}
                onChange={(value) => locationModalHandle(value)}
                value={formData.location}
            />
            <div className="max-w-[850px] flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">Horse data</h1>
                    <p className="text-[#122B4680] mt-2">
                        Update your horses data
                    </p>
                </div>
                <DesktopFormBlock
                    caption="Profile picture"
                    icon={profileIcon}
                    className="py-4"
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
                <DesktopFormBlock
                    caption="FEI number"
                    icon={buildingIcon}
                    className="py-6"
                    captionOnTop={true}
                    captionMargin={20}
                >
                    <div className="grid grid-cols-2 gap-2">
                        <Prototype04Input
                            placeholder="Enter number..."
                            type="text"
                            value={formData.EFINumber}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    EFINumber: e.target.value,
                                })
                            }
                        />
                        <Prototype04Button
                            type={2}
                            caption="Sync profile"
                            className="w-auto text-[14px]"
                            color="#8C95AC"
                            icon={syncIconGray}
                        />
                        <RedNotificationCard
                            icon={eventOrg}
                            text="Profile not synced"
                            className="!p-2 flex-1"
                        />
                        <Prototype04Button
                            type={2}
                            caption="Register Horse"
                            className="w-auto flex-1 text-[14px]"
                            icon={syncIcon}
                        />
                    </div>
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="USEF number"
                    icon={buildingIcon}
                    className="py-6"
                    captionOnTop={true}
                    captionMargin={20}
                >
                    <div className="grid grid-cols-2 gap-2">
                        <Prototype04Input
                            placeholder="Enter number..."
                            type="text"
                            value={formData.USEFNumber}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    USEFNumber: e.target.value,
                                })
                            }
                        />
                        <Prototype04Button
                            type={2}
                            caption="Sync profile"
                            className="w-auto text-[14px]"
                            color="#8C95AC"
                            icon={syncIconGray}
                        />
                        <GreenNotificationCard
                            icon={eventOrg}
                            text="Profile Synced"
                            className="!p-2 flex-1"
                        />
                        <Prototype04Button
                            type={2}
                            caption="Re-sync profile"
                            className="w-auto text-[14px]"
                            color="#00B6AA"
                            icon={syncIconGreen}
                        />
                        <GreenNotificationCard
                            icon={eventOrg}
                            text="Membership active"
                            className="!p-2 flex-1"
                        />
                        <Prototype04Button
                            type={4}
                            caption="Expires: 12.16.23"
                            className="w-auto flex-1 text-[14px]"
                            color="#00B6AA"
                            bgColor="#00B6AA20"
                            icon={expireIconGreen}
                        />
                    </div>
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Name"
                    icon={positionIcon}
                    className="pt-6 mb-0"
                >
                    <Prototype04Input
                        type="text"
                        value={formData.horseName}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                horseName: e.target.value,
                            })
                        }
                        placeholder="Enter name..."
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Breed"
                    icon={typeIcon}
                    className="my-0 border-none"
                >
                    <CardLink
                        type="dropdown"
                        caption={
                            formData.breed.length === 0
                                ? "Select breed..."
                                : formData.breed[0].caption
                        }
                        onClick={() => setBreedModal(true)}
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Height"
                    icon={rulerIcon}
                    className="my-0 border-none"
                >
                    <CardLink
                        type="dropdown"
                        caption={
                            formData.height.length === 0
                                ? "Select height..."
                                : formData.height[0].caption
                        }
                        onClick={() => setHeightModal(true)}
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Height"
                    icon={clockIcon}
                    className="my-0 border-none"
                >
                    <Prototype04Input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                dateOfBirth: e.target.value,
                            })
                        }
                        placeholder="Select date..."
                        className="mt-4"
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Gender"
                    icon={genderIcon}
                    className="my-0 border-none"
                >
                    <CardLink
                        type="dropdown"
                        caption={
                            formData.gender.length === 0
                                ? "Select gender..."
                                : formData.gender[0].caption
                        }
                        onClick={() => setGenderModal(true)}
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Discipline"
                    icon={horseIcon}
                    className="my-0 border-none"
                >
                    <CardLink
                        type="dropdown"
                        caption={
                            formData.discipline.length === 0
                                ? "Select descipline..."
                                : formData.discipline[0].caption
                        }
                        onClick={() => setDisciplineModal(true)}
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Zone"
                    icon={zoneIcon}
                    className="my-0 border-none"
                    onHelp={() => setZoneHelpModal(true)}
                >
                    <CardLink
                        type="dropdown"
                        caption={
                            formData.zone === ""
                                ? "Select zone..."
                                : formData.zone
                        }
                        icon={zoneIcon}
                        onClick={() => setZoneModal(true)}
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Coloring"
                    icon={colorIcon}
                    className="my-0 border-none"
                >
                    <CardLink
                        type="dropdown"
                        caption={
                            formData.color.length === 0
                                ? "Select coloring..."
                                : formData.color[0].caption
                        }
                        onClick={() => setColorModal(true)}
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Markings"
                    icon={brushIcon}
                    className="my-0 border-none"
                >
                    <CardLink
                        type="dropdown"
                        caption={
                            formData.markings.length === 0
                                ? "Select Markings..."
                                : formData.markings
                                      .map((item: any) => item.caption)
                                      .join(", ")
                        }
                        onClick={() => setMarkingModal(true)}
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Country of Origin"
                    icon={locationIcon}
                    className="mt-0 mb-6 border-none"
                >
                    <CardLink
                        type="dropdown"
                        caption={
                            formData.location.length === 0
                                ? "Select country..."
                                : formData.location
                        }
                        onClick={() => setLocationModal(true)}
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Microchip number..."
                    icon={microchipIcon}
                    className="pt-6 mb-0"
                >
                    <Prototype04Input
                        type="text"
                        value={formData.microchip}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                microchip: e.target.value,
                            })
                        }
                        placeholder="Enter number..."
                        className="mt-4"
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Passport number"
                    icon={planeIcon}
                    className="my-0 border-none"
                >
                    <Prototype04Input
                        type="text"
                        value={formData.passport}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                passport: e.target.value,
                            })
                        }
                        placeholder="Enter number..."
                        className="mt-4"
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="FEI number"
                    icon={numberIcon}
                    className="my-0 border-none"
                >
                    <Prototype04Input
                        type="text"
                        value={formData.FEI}
                        onChange={(e) =>
                            setFormData({ ...formData, FEI: e.target.value })
                        }
                        placeholder="Enter number..."
                        className="mt-4"
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="USEF number"
                    icon={numberIcon}
                    className="my-0 border-none"
                >
                    <Prototype04Input
                        type="text"
                        value={formData.USEF}
                        onChange={(e) =>
                            setFormData({ ...formData, USEF: e.target.value })
                        }
                        placeholder="Enter number..."
                        className="mt-4"
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="USDF number"
                    icon={numberIcon}
                    className="my-0 border-none"
                >
                    <Prototype04Input
                        type="text"
                        value={formData.USDF}
                        onChange={(e) =>
                            setFormData({ ...formData, USDF: e.target.value })
                        }
                        placeholder="Enter number..."
                        className="mt-4"
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="USEA number"
                    icon={numberIcon}
                    className="my-0 border-none"
                >
                    <Prototype04Input
                        type="text"
                        value={formData.USEA}
                        onChange={(e) =>
                            setFormData({ ...formData, USEA: e.target.value })
                        }
                        placeholder="Enter number..."
                        className="mt-4"
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="USHJA number"
                    icon={numberIcon}
                    className="my-0 border-none"
                >
                    <Prototype04Input
                        type="text"
                        value={formData.USHJA}
                        onChange={(e) =>
                            setFormData({ ...formData, USHJA: e.target.value })
                        }
                        placeholder="Enter number..."
                        className="mt-4"
                    />
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Other"
                    icon={numberIcon}
                    className="mt-0 mb-6 border-none"
                >
                    <div className="flex gap-3">
                        <Prototype04Input
                            type="text"
                            value={formData.other[0]}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    other: [e.target.value, formData.other[1]],
                                })
                            }
                            placeholder="Enter designation..."
                            className="mt-4"
                        />
                        <Prototype04Input
                            type="text"
                            value={formData.other[1]}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    other: [formData.other[0], e.target.value],
                                })
                            }
                            placeholder="Enter number..."
                            className="mt-4"
                        />
                    </div>
                </DesktopFormBlock>
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

export default HorseDataTab;
