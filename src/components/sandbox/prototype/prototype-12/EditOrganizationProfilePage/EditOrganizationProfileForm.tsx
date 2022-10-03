import { useState } from "react";
import SyncModal from "./Modals/SyncModal";
import RenewModal from "./Modals/RenewModal";
import LocationModal from "./Modals/LocationModal";
import DisciplineModal from "./Modals/DisciplineModal";
import ZoneModal from "./Modals/ZoneModal";
import CardLink from "../global/CardLink";
import SignoutModal from "./Modals/SignoutModal";

import eventOrg from "../assets/event-org.png";
import safeSportIcon from "../assets/safesport-icon.png";
import locationIcon from "../assets/location.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import pinterestIcon from "../assets/pinterest-icon.svg";
import addressIcon from "../assets/address.svg";
import numberIcon from "../assets/field-number.svg";
import horseIcon from "../assets/horse-icon.svg";
import chartIcon from "../assets/chart.svg";
import cardIcon from "../assets/card.svg";
import bankIcon from "../assets/bank.svg";
import passwordIcon from "../assets/password.svg";
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email.svg";
import notifIcon from "../assets/notification.svg";
import signOutIcon from "../assets/sign-out.svg";
import orgIcon from "../assets/org-icon-gray.svg";
import {
    RedNotificationCard,
    GreenNotificationCard,
} from "../global/NotificationCards";
import ZoneHelpModal from "./Modals/ZoneHelpModal";
import Prototype04Input from "../../prototype-04/global/Prototype04Input";
import RenewSafeSportModal from "./Modals/RenewSafeSportModal";

const FormHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="text-[16px] text-[#122B46] font-normal my-6">{title}</h3>
);

const EditOrganizationProfileForm: React.FC = () => {
    const [profileForm, setProfileForm] = useState({
        orgName: "",
        address: "",
        location: "",
        phoneNumber: "",
        email: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        website: "",
        facebook: "",
        instagram: "",
        twitter: "",
        pinterest: "",
        dressage: "",
        zone: "",
        card: "",
        socialSecurity: "",
    });
    const [renewModal, setRenewModal] = useState(false);
    const [renewSafeSportModal, setRenewSafeSportModal] = useState(false);
    const [syncModal, setSyncModal] = useState(false);
    const [locationModal, setLocationModal] = useState(false);
    const [disciplineModal, setDisciplineModal] = useState(false);
    const [zoneModal, setZoneModal] = useState(false);
    const [zoneHelpModal, setZoneHelpModal] = useState(false);
    const [signout, setSignout] = useState(false);

    return (
        <>
            {/* Modals *********************************** */}
            <SyncModal show={syncModal} onHide={() => setSyncModal(false)} />
            <RenewModal show={renewModal} onHide={() => setRenewModal(false)} />
            <RenewSafeSportModal
                show={renewSafeSportModal}
                onHide={() => setRenewSafeSportModal(false)}
            />
            <LocationModal
                show={locationModal}
                onHide={() => setLocationModal(false)}
                value={profileForm.location}
                onChange={(location) =>
                    setProfileForm({ ...profileForm, location })
                }
            />
            <DisciplineModal
                show={disciplineModal}
                onHide={() => setDisciplineModal(false)}
                value={profileForm.dressage}
                onChange={(dressage) =>
                    setProfileForm({ ...profileForm, dressage })
                }
            />
            <ZoneModal
                show={zoneModal}
                onHide={() => setZoneModal(false)}
                value={profileForm.zone}
                onChange={(zone) => setProfileForm({ ...profileForm, zone })}
                onHelp={() => {
                    setZoneModal(false);
                    setZoneHelpModal(true);
                }}
            />
            <ZoneHelpModal
                show={zoneHelpModal}
                onHide={() => {
                    setZoneHelpModal(false);
                    setZoneModal(true);
                }}
            />
            <SignoutModal show={signout} onHide={() => setSignout(false)} />
            {/* End of modals ***************************************************************** */}

            <div className="flex flex-col gap-3">
                <RedNotificationCard
                    text="Membership expired"
                    icon={eventOrg}
                    caption="Renew Membership"
                    onClick={() => setRenewModal(true)}
                />
                <RedNotificationCard
                    text="Profile Not Synced"
                    icon={eventOrg}
                    caption="Sync Profile"
                    onClick={() => setSyncModal(true)}
                />
                <RedNotificationCard
                    text="SafeSport expired"
                    icon={safeSportIcon}
                    caption="Renew Training"
                    onClick={() => setRenewSafeSportModal(true)}
                />
                <GreenNotificationCard
                    text="Memership active"
                    icon={eventOrg}
                />
                <GreenNotificationCard text="Profile Synced" icon={eventOrg} />
                <GreenNotificationCard
                    text="SafeSport active"
                    icon={safeSportIcon}
                />
            </div>
            <FormHeader title="ORGANIZATION DETAILS" />
            <Prototype04Input
                type="text"
                value={profileForm.orgName}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        orgName: e.target.value,
                    })
                }
                placeholder="Organization name"
                icon={orgIcon}
            />
            <CardLink type="button" caption="Address" icon={addressIcon} />
            <CardLink
                type="dropdown"
                caption={profileForm.location || "Country"}
                icon={locationIcon}
                onClick={() => setLocationModal(true)}
            />

            <Prototype04Input
                type="tel"
                value={profileForm.phoneNumber}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        phoneNumber: e.target.value,
                    })
                }
                placeholder="Phone"
                icon={phoneIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="email"
                value={profileForm.email}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, email: e.target.value })
                }
                placeholder="Email"
                icon={emailIcon}
                className="mt-4"
            />

            <FormHeader title="COMPETITON DETAILS" />
            <CardLink
                type="dropdown"
                caption={profileForm.dressage || "Select ..."}
                icon={horseIcon}
                onClick={() => setDisciplineModal(true)}
            />
            <CardLink
                type="dropdown"
                caption={profileForm.zone || "Select ..."}
                icon={chartIcon}
                onClick={() => setZoneModal(true)}
            />
            <FormHeader title="COMPETITON NUMBRS" />
            <Prototype04Input
                type="text"
                value={profileForm.num1}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num1: e.target.value })
                }
                placeholder="FEI: 120809"
                icon={numberIcon}
            />
            <Prototype04Input
                type="text"
                value={profileForm.num2}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num2: e.target.value })
                }
                placeholder="USEF: 1028739"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num3}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num3: e.target.value })
                }
                placeholder="USDF"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num4}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num4: e.target.value })
                }
                placeholder="USEA"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num5}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num5: e.target.value })
                }
                placeholder="USHJA"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num6}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num6: e.target.value })
                }
                placeholder="Other"
                icon={numberIcon}
                className="mt-4"
            />
            <FormHeader title="SOCIAL MEDIA" />
            <Prototype04Input
                type="text"
                value={profileForm.website}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, website: e.target.value })
                }
                placeholder="Website"
                icon={locationIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.facebook}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, facebook: e.target.value })
                }
                placeholder="Facebook"
                icon={facebookIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.instagram}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        instagram: e.target.value,
                    })
                }
                placeholder="Instagram"
                icon={instagramIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.twitter}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, twitter: e.target.value })
                }
                placeholder="Twitter"
                icon={twitterIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.pinterest}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        pinterest: e.target.value,
                    })
                }
                placeholder="Pinterest"
                icon={pinterestIcon}
                className="mt-4"
            />
            <FormHeader title="FINANCIAL DETAILS" />

            <CardLink
                type="button"
                caption="Credit / debit card settings"
                icon={cardIcon}
            />
            <CardLink
                type="button"
                caption="Bank account settings"
                icon={bankIcon}
            />
            <FormHeader title="SECURITY DETAILS" />
            <CardLink
                type="button"
                caption="Manage password"
                icon={passwordIcon}
            />
            <FormHeader title="OTHER" />
            <CardLink
                type="button"
                caption="Notification settings"
                icon={notifIcon}
            />
            <CardLink
                type="button"
                caption="Sign out"
                icon={signOutIcon}
                onClick={() => setSignout(true)}
            />
        </>
    );
};

export default EditOrganizationProfileForm;
