import Prototype03Button from "./global/Prototype03Button";
import { useContext, useState } from "react";
import { SignupStages } from "./Prototype03ContextApi";
import Prototype03Input from "./global/Prototype03Input";

import backIcon from "./assets/arrow-left.svg";
import arrowIcon from "./assets/arrow.svg";
import categoryIcon from "./assets/category.svg";
import usefIcon from "./assets/usef-icon.svg";
import websiteIcon from "./assets/location.svg";
import locationIcon from "./assets/address.svg";
import phoneIcon from "./assets/phone-icon.svg";
import emailIcon from "./assets/email.svg";
import facebookIcon from "./assets/facebook.svg";
import instagramIcon from "./assets/instagram.svg";
import twitterIcon from "./assets/twitter.svg";
import pinterestIcon from "./assets/pinterest.svg";
import cardIcon from "./assets/card.svg";
import businessIcon from "./assets/business-account.svg";
import passwordIcon from "./assets/password.svg";
import imageIcon from "./assets/images.svg";
import thumb from "./assets/thumb.png";
import aboutIcon from "./assets/about.svg";
import editProfile from "./assets/edit-profile.svg";


const Prototype03VendorProfileForm: React.FC = () => {

    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value })
    }

    const [profileForm, setProfileForm] = useState({
        ariat: "",
        apparrel: "",
        location: "",
        website: "",
        phoneNumber: "",
        email: "",
        aboutImage: "",
        about: "",
        facebook: "",
        instagram: "",
        twitter: "",
        pinterest: "",
    });


    const CardLink: React.FC<{ icon: string, caption: string, onClick?: () => void }> = ({ icon, caption, onClick }) => (
        <button onClick={onClick} className={`mt-4 h-[58px] text-gray-500 flex items-center gap-2 w-full px-4 py-2 border-solid rounded-xl border-[#D3DAEE] border-[1px] bg-white`}>
            <div className="flex gap-2 flex-1 items-center">
                <span><img src={icon} alt="icon" /></span>
                <span>{caption}</span>
            </div>
            <span><img src={arrowIcon} alt="arrow" /></span>
        </button>
    )

    const ImageCard: React.FC<{ icon: string }> = ({ icon }) => (
        <label className={`mt-4 h-[58px] text-gray-500 flex items-center gap-2 w-full px-4 py-2 border-solid rounded-xl border-[#D3DAEE] border-[1px] bg-white`}>
            <div>
                <img src={icon} alt="icon" />
            </div>
            <div className="w-[40px] h-[40px] overflow-hidden rounded-lg">
                <img src={thumb} alt="thumb" className="object-cover" />
            </div>
            <input type="file" accept="image/*" className="hidden" />
        </label>
    )

    const ProfileSection: React.FC = () => (
        <label className="flex w-[98px] h-[98px] rounded-full bg-gray-100 items-center justify-center mx-auto mt-6">
            <img src={editProfile} alt="edit" className="w-[25px] h-[25px]" />
            <input type="file" accept="image/*" className="hidden" />
        </label>
    )


    return (
        <div>
            <div className="text-[24px] flex items-center gap-2">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Profile</div>
            </div>
            <ProfileSection />
            <div className="mt-6">
                <div className="font-bold">BUSINESS DETAILS</div>
                <Prototype03Input
                    type="text"
                    value={profileForm.ariat}
                    onChange={e => setProfileForm({ ...profileForm, ariat: e.target.value })}
                    placeholder="Ariat"
                    icon={usefIcon}
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.apparrel}
                    onChange={e => setProfileForm({ ...profileForm, apparrel: e.target.value })}
                    placeholder="Apparrel"
                    icon={categoryIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.location}
                    onChange={e => setProfileForm({ ...profileForm, location: e.target.value })}
                    placeholder="Location"
                    icon={locationIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.website}
                    onChange={e => setProfileForm({ ...profileForm, website: e.target.value })}
                    placeholder="https://ariat.com"
                    icon={websiteIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="tel"
                    value={profileForm.phoneNumber}
                    onChange={e => setProfileForm({ ...profileForm, phoneNumber: e.target.value })}
                    placeholder="1 800 898 9798"
                    icon={phoneIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="email"
                    value={profileForm.email}
                    onChange={e => setProfileForm({ ...profileForm, email: e.target.value })}
                    placeholder="marketing@ariat.com"
                    icon={emailIcon}
                    className="mt-4"
                />
                <div className="font-bold mt-4">ABOUT</div>
                <ImageCard
                    icon={imageIcon}
                />
                <Prototype03Input
                    type="textarea"
                    value={profileForm.aboutImage}
                    onChange={e => setProfileForm({ ...profileForm, aboutImage: e.target.value })}
                    placeholder="About you"
                    icon={aboutIcon}
                    className="mt-4"
                />

                <Prototype03Input
                    type="text"
                    value={profileForm.facebook}
                    onChange={e => setProfileForm({ ...profileForm, facebook: e.target.value })}
                    placeholder="https://facebok.com/...."
                    icon={facebookIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.instagram}
                    onChange={e => setProfileForm({ ...profileForm, instagram: e.target.value })}
                    placeholder="https://instagram.com/...."
                    icon={instagramIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.twitter}
                    onChange={e => setProfileForm({ ...profileForm, twitter: e.target.value })}
                    placeholder="https://twitter.com/...."
                    icon={twitterIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.pinterest}
                    onChange={e => setProfileForm({ ...profileForm, pinterest: e.target.value })}
                    placeholder="https://pinterest.com/...."
                    icon={pinterestIcon}
                    className="mt-4"
                />
                <div className="font-bold mt-4">FINANCIAL DETAILS</div>
                <CardLink
                    caption="Add business credit card"
                    icon={cardIcon}
                />
                <CardLink
                    caption="Add business account details"
                    icon={businessIcon}
                />
                <div className="font-bold mt-4">SECURITY DETAILS</div>
                <CardLink
                    caption="Change password"
                    icon={passwordIcon}
                />

            </div>
            <div className="w-[70%] my-[60px] mx-auto">
                <Prototype03Button caption="SAVE" type={1} icon={false} disabled={!stage.selector} onClick={() => stageHandle("3")} />
            </div>
        </div>
    );
};

export default Prototype03VendorProfileForm;