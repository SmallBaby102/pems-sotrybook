import { useState } from "react";
import {
    GreenNotificationCard,
    RedNotificationCard,
} from "../global/NotificationCards";
import Prototype04Input from "../global/Prototype04Input";
import eventOrg from "../assets/event-org.png";
import typeIcon from "../assets/profile-tab-5.svg";
import rulerIcon from "../assets/ruler.svg";
import clockIcon from "../assets/clock.svg";
import genderIcon from "../assets/gender.svg";
import horseIcon from "../assets/horse-icon.svg";
import colorIcon from "../assets/color.svg";
import shodIcon from "../assets/shod-icon.svg";
import brushIcon from "../assets/brush.svg";

import planeIcon from "../assets/plane.svg";
import certificateIcon from "../assets/certificate.svg";
import numberIcon from "../assets/field-number.svg";
import microchipIcon from "../assets/microchip-icon.svg";
import positionIcon from "../assets/position-icon.svg";
import zoneIcon from "../assets/chart.svg";
import locationIcon from "../assets/location.svg";
import CardLink from "./../global/CardLink";
import BreedModal from "./Modals/BreedModal";
import HeightModal from "./Modals/HeightModal";
import GenderModal from "./Modals/GenderModal";
import DisciplineModal from "./Modals/DisciplineModal";
import ZoneModal from "./../EditProfilePage/Modals/ZoneModal";
import ColorModal from "./Modals/ColorModal";
import MarkingModal from "./Modals/MarkingModal";
import MeasurementCardTypeModal from "./Modals/MeasurementCardTypeModal";
import LeftHeelMeasurementModal from "./Modals/LeftHeelMeasurementModal";
import RightHeelMeasurementModal from "./Modals/RightHeelMeasurementModal copy";
import ShodStatusModal from "./Modals/ShodStatusModal";
import LocationModal from "./../EditProfilePage/Modals/LocationModal";
import Prototype04Button from "./../global/Prototype04Button";
import SyncModal from "./Modals/SyncModal";
import CameraRoleModal from "./Modals/CameraRoleModal";
import ImageContainer from "./../global/ImageContainer";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-full flex flex-col gap-3 p-6 mx-auto ${className}`}>
        {children}
    </div>
);

const FormHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="text-[16px] text-[#122B46] font-normal my-6">{title}</h3>
);

const ProfileForm: React.FC = () => {
    interface profileFormTypes {
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
        measurementCardType: [{ id: number; caption: string }] | [];
        measurmentDate: string;
        measurementHeight: string;
        leftHeelMeasurement: [{ id: number; caption: string }] | [];
        rightHeelMeasurement: [{ id: number; caption: string }] | [];
        shodStatus: [{ id: number; caption: string }] | [];
        coggingDate: [{ id: number; caption: string }] | [];
        coggingCert: [{ id: number; image: string }] | [];
    }
    const [profileForm, setProfileForm] = useState<profileFormTypes>({
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
        measurementCardType: [],
        measurmentDate: "",
        measurementHeight: "",
        leftHeelMeasurement: [],
        rightHeelMeasurement: [],
        shodStatus: [],
        coggingDate: [],
        coggingCert: [],
    });

    const [breedModal, setBreedModal] = useState(false);
    const [heightModal, setHeightModal] = useState(false);
    const [genderModal, setGenderModal] = useState(false);
    const [disciplineModal, setDisciplineModal] = useState(false);
    const [zoneModal, setZoneModal] = useState(false);
    const [colorModal, setColorModal] = useState(false);
    const [markingModal, setMarkingModal] = useState(false);
    const [locationModal, setLocationModal] = useState(false);
    const [measurementCardTypeModal, setMeasurementCardTypeModal] =
        useState(false);
    const [leftHeelMeasurementModal, setLeftHeelMeasurementModal] =
        useState(false);
    const [rightHeelMeasurementModal, setRightHeelMeasurementModal] =
        useState(false);
    const [shodStatusModal, setShodStatusModal] = useState(false);
    const [syncModalHelp, setSyncHelpModal] = useState(false);
    const [cameraRoleModal, setCameraRoleModal] = useState(false);

    const breedModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, breed: value });
    };
    const heightModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, height: value });
    };
    const genderModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, gender: value });
    };
    const disciplineModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, discipline: value });
    };
    const zoneModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, zone: value });
    };
    const colorModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, color: value });
    };
    const markingModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, markings: value });
    };
    const locationModalHandle = (value: any) => {
        setProfileForm({ ...profileForm, location: value });
    };
    const measurementCardTypeModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, measurementCardType: value });
    };
    const leftHeelMeasurementModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, leftHeelMeasurement: value });
    };
    const rightHeelMeasurementModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, rightHeelMeasurement: value });
    };
    const shodStatusModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, shodStatus: value });
    };
    const cameraRoleModalValueHandle = (value: any) => {
        setProfileForm({ ...profileForm, coggingCert: value });
    };
    return (
        <div>
            <BreedModal
                show={breedModal}
                onHide={() => setBreedModal(false)}
                onChange={(value) => breedModalValueHandle(value)}
                value={profileForm.breed}
            />
            <HeightModal
                show={heightModal}
                onHide={() => setHeightModal(false)}
                onChange={(value) => heightModalValueHandle(value)}
                value={profileForm.height}
            />
            <GenderModal
                show={genderModal}
                onHide={() => setGenderModal(false)}
                onChange={(value) => genderModalValueHandle(value)}
                value={profileForm.gender}
            />
            <DisciplineModal
                show={disciplineModal}
                onHide={() => setDisciplineModal(false)}
                onChange={(value) => disciplineModalValueHandle(value)}
                value={profileForm.discipline}
            />
            <ZoneModal
                show={zoneModal}
                onHide={() => setZoneModal(false)}
                onChange={(value) => zoneModalValueHandle(value)}
                value={profileForm.zone}
            />
            <ColorModal
                show={colorModal}
                onHide={() => setColorModal(false)}
                onChange={(value) => colorModalValueHandle(value)}
                value={profileForm.color}
            />
            <MarkingModal
                show={markingModal}
                onHide={() => setMarkingModal(false)}
                onChange={(value) => markingModalValueHandle(value)}
                value={profileForm.markings}
                multiple={true}
            />
            <LocationModal
                show={locationModal}
                onHide={() => setLocationModal(false)}
                onChange={(value) => locationModalHandle(value)}
                value={profileForm.location}
            />
            <MeasurementCardTypeModal
                show={measurementCardTypeModal}
                onHide={() => setMeasurementCardTypeModal(false)}
                onChange={(value) => measurementCardTypeModalValueHandle(value)}
                value={profileForm.measurementCardType}
            />
            <LeftHeelMeasurementModal
                show={leftHeelMeasurementModal}
                onHide={() => setLeftHeelMeasurementModal(false)}
                onChange={(value) => leftHeelMeasurementModalValueHandle(value)}
                value={profileForm.leftHeelMeasurement}
            />
            <RightHeelMeasurementModal
                show={rightHeelMeasurementModal}
                onHide={() => setRightHeelMeasurementModal(false)}
                onChange={(value) =>
                    rightHeelMeasurementModalValueHandle(value)
                }
                value={profileForm.rightHeelMeasurement}
            />
            <ShodStatusModal
                show={shodStatusModal}
                onHide={() => setShodStatusModal(false)}
                onChange={(value) => shodStatusModalValueHandle(value)}
                value={profileForm.shodStatus}
            />
            <SyncModal
                show={syncModalHelp}
                onHide={() => setSyncHelpModal(false)}
            />
            <CameraRoleModal
                show={cameraRoleModal}
                onHide={() => setCameraRoleModal(false)}
                onChange={(value) => cameraRoleModalValueHandle(value)}
                value={profileForm.shodStatus}
                multiple={true}
            />

            <GreenNotificationCard text="Profile Synced" icon={eventOrg} />
            <RedNotificationCard
                icon={eventOrg}
                text="Profile Not Synced"
                caption="Sync Profile"
                onClick={() => setSyncHelpModal(true)}
                className="mt-4"
            />
            <FormHeader title="HORSE DETAILS" />
            <Prototype04Input
                type="text"
                value={profileForm.horseName}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        horseName: e.target.value,
                    })
                }
                placeholder="Enter horses name..."
                icon={positionIcon}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.breed.length === 0
                        ? "Select breed..."
                        : profileForm.breed[0].caption
                }
                icon={typeIcon}
                onClick={() => setBreedModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.height.length === 0
                        ? "Select height..."
                        : profileForm.height[0].caption
                }
                icon={rulerIcon}
                onClick={() => setHeightModal(true)}
            />

            <Prototype04Input
                type="date"
                value={profileForm.dateOfBirth}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        dateOfBirth: e.target.value,
                    })
                }
                placeholder="Select date of birth..."
                icon={clockIcon}
                className="mt-4"
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.gender.length === 0
                        ? "Select gender..."
                        : profileForm.gender[0].caption
                }
                icon={genderIcon}
                onClick={() => setGenderModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.discipline.length === 0
                        ? "Select descipline..."
                        : profileForm.discipline[0].caption
                }
                icon={horseIcon}
                onClick={() => setDisciplineModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.zone === ""
                        ? "Select zone..."
                        : profileForm.zone
                }
                icon={zoneIcon}
                onClick={() => setZoneModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.color.length === 0
                        ? "Select coloring..."
                        : profileForm.color[0].caption
                }
                icon={colorIcon}
                onClick={() => setColorModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.markings.length === 0
                        ? "Select Markings..."
                        : profileForm.markings
                              .map((item: any) => item.caption)
                              .join(", ")
                }
                icon={brushIcon}
                onClick={() => setMarkingModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.location.length === 0
                        ? "Select country of origin..."
                        : profileForm.location
                }
                icon={locationIcon}
                onClick={() => setLocationModal(true)}
            />
            <FormHeader title="COMPETITION NUMBERS" />
            <Prototype04Input
                type="text"
                value={profileForm.microchip}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        microchip: e.target.value,
                    })
                }
                placeholder="Enter microchip number..."
                icon={microchipIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.passport}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, passport: e.target.value })
                }
                placeholder="Enter passport number..."
                icon={planeIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.FEI}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, FEI: e.target.value })
                }
                placeholder="Enter FEI number..."
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.USEF}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, USEF: e.target.value })
                }
                placeholder="Enter USEF number..."
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.USDF}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, USDF: e.target.value })
                }
                placeholder="Enter USDF number..."
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.USEA}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, USEA: e.target.value })
                }
                placeholder="Enter USEA number..."
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.USHJA}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, USHJA: e.target.value })
                }
                placeholder="Enter USHJA number..."
                icon={numberIcon}
                className="mt-4"
            />
            <FormHeader title="MEASUREMENT CARD" />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.measurementCardType.length === 0
                        ? "Select measurement card type..."
                        : profileForm.measurementCardType[0].caption
                }
                icon={rulerIcon}
                onClick={() => setMeasurementCardTypeModal(true)}
            />
            <Prototype04Input
                type="date"
                value={profileForm.measurmentDate}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        measurmentDate: e.target.value,
                    })
                }
                placeholder="Select measurement date...."
                icon={rulerIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.measurementHeight}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        measurementHeight: e.target.value,
                    })
                }
                placeholder="Enter height..."
                icon={rulerIcon}
                className="mt-4"
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.leftHeelMeasurement.length === 0
                        ? "Enter left heel measurement..."
                        : profileForm.leftHeelMeasurement[0].caption
                }
                icon={rulerIcon}
                onClick={() => setLeftHeelMeasurementModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.rightHeelMeasurement.length === 0
                        ? "Enter right heel measurement..."
                        : profileForm.rightHeelMeasurement[0].caption
                }
                icon={rulerIcon}
                onClick={() => setRightHeelMeasurementModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.shodStatus.length === 0
                        ? "Select shod status"
                        : profileForm.shodStatus[0].caption
                }
                icon={shodIcon}
                onClick={() => setShodStatusModal(true)}
            />
            <FormHeader title="COGGINS" />
            <CardLink
                type="dropdown"
                caption={
                    profileForm.coggingDate.length === 0
                        ? "Select coggins inspection date..."
                        : profileForm.coggingDate[0].caption
                }
                icon={certificateIcon}
                onClick={() => {}}
            />
            <ImageContainer
                value={profileForm.coggingCert.map((item) => item.image)}
                icon={certificateIcon}
                onClick={() => setCameraRoleModal(true)}
            />
            <ButtonContainer className="mt-2">
                <Prototype04Button caption="SAVE" type={1} />
                <Prototype04Button caption="CANCEL" type={3} />
            </ButtonContainer>
        </div>
    );
};
export default ProfileForm;
