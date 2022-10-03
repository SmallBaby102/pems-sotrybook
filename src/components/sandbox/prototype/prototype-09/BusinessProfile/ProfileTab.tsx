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
import profilePic from "./../assets/image-placeholder.svg";
import cameraIcon from "./../assets/camera.svg";
import addressIcon from "./../assets/address.svg";
import phoneIcon from "./../assets/phone-icon.svg";
import saveIcon from "./../assets/save-icon.svg";
import { useState } from "react";
import DesktopFormBlock from "../global/DesktopFormBlock";
import businessIcon from "./../assets/business-name.svg";
import businessCategory from "./../assets/business-category.svg";
import webIcon from "./../assets/web-icon.svg";
import facebookIcon from "./../assets/facebook-icon.svg";
import instagramIcon from "./../assets/instagram-icon.svg";
import twitterIcon from "./../assets/twitter-icon.svg";
import pinterestIcon from "./../assets/pinterest-icon.svg";
import imageIcon from "./../assets/image-icon.svg";
import videoIcon from "./../assets/video-icon.svg";

import Prototype04Button from "./../../prototype-04/global/Prototype04Button";
import Prototype04Input from "./../../prototype-04/global/Prototype04Input";
import CameraRoleModal from "../modals/CameraRoleModal";
import ImageContainer from "../global/ImageContainer";

const GreenButton: React.FC = () => (
    <Prototype04Button
        type={2}
        caption="Sync profile"
        className="w-auto flex-1 text-[14px] invert-[55%] sepia-[42%] saturate-[2993%] hue-rotate-[137deg] brightness-[92%] contrast-[101%]"
        icon={syncIcon}
    />
);

const ProfileTab: React.FC = () => {
    const [form, setForm] = useState<{
        brandImages: [{ id: number; image: string }] | [];
        brandVideos: [{ id: number; image: string }] | [];
    }>({
        brandImages: [],
        brandVideos: [],
    });

    const [brandImageModal, setBrandImageModal] = useState(false);
    const [brandVideoModal, setBrandVideoModal] = useState(false);
    const brandImagesValueHandle = (value: any) => {
        setForm({ ...form, brandImages: value });
    };
    const brandVideosValueHandle = (value: any) => {
        setForm({ ...form, brandVideos: value });
    };

    return (
        <>
            <CameraRoleModal
                show={brandImageModal}
                onHide={() => setBrandImageModal(false)}
                onChange={(value) => brandImagesValueHandle(value)}
                value={form.brandImages}
                multiple={true}
            />
            <CameraRoleModal
                show={brandVideoModal}
                onHide={() => setBrandVideoModal(false)}
                onChange={(value) => brandVideosValueHandle(value)}
                value={form.brandImages}
                multiple={true}
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
                        caption="Business name"
                        icon={businessIcon}
                    >
                        <Prototype04Input
                            type="text"
                            placeholder="Enter name of organization..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Business category"
                        icon={businessCategory}
                    >
                        <Prototype04Input
                            type="select"
                            placeholder="Select category..."
                            value={[
                                { name: "Category 1" },
                                { name: "Category 2" },
                            ]}
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Location" icon={locationIcon}>
                        <Prototype04Input
                            type="text"
                            placeholder="Enter business address..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Website" icon={webIcon}>
                        <Prototype04Input
                            type="text"
                            placeholder="Enter web address Eg. https://websitename.com"
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Website" icon={phoneIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="Enter phone number..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Business email address"
                        icon={emailIcon}
                    >
                        <Prototype04Input
                            type="email"
                            placeholder="Enter email address..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock caption="Brand Images" icon={imageIcon}>
                        <ImageContainer
                            value={form.brandImages.map((item) => item.image)}
                            onClick={() => setBrandImageModal(true)}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Brand Videos" icon={videoIcon}>
                        <ImageContainer
                            value={form.brandVideos.map((item) => item.image)}
                            onClick={() => setBrandVideoModal(true)}
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock caption="Facebook" icon={facebookIcon}>
                        <Prototype04Input
                            type="text"
                            placeholder="https://www.facebook.com/..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Instagram" icon={instagramIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="https://www.instagram.com/..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Twitter" icon={twitterIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="https://www.twitter.com/..."
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Pinterest" icon={pinterestIcon}>
                        <Prototype04Input
                            type="tel"
                            placeholder="https://www.pinterest.com/..."
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
