import { useState } from "react";
import Prototype04Input from "../global/Prototype04Input";

import typeIcon from "../assets/profile-tab-5.svg";
import rulerIcon from "../assets/ruler.svg";
import clockIcon from "../assets/clock.svg";
import genderIcon from "../assets/gender.svg";
import horseIcon from "../assets/horse-icon.svg";
import colorIcon from "../assets/color.svg";
import brushIcon from "../assets/brush.svg";
import planeIcon from "../assets/plane.svg";
import numberIcon from "../assets/field-number.svg";
import certificateIcon from "../assets/certificate.svg";
import thumb from "../assets/thumb.svg";

const FormHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="text-[16px] text-[#122B46] font-normal my-6">{title}</h3>
);

const ImageCard: React.FC<{ icon: string }> = ({ icon }) => (
    <label
        className={`mt-4 h-[58px] text-gray-500 flex items-center gap-2 w-full px-4 py-2 border-solid rounded-xl border-[#D3DAEE] border-[1px] bg-white`}
    >
        <div>
            <img src={icon} alt="icon" />
        </div>
        <div className="w-[40px] h-[40px] overflow-hidden rounded-lg border-[#D3DAEE] border-solid border-[1px]">
            <img src={thumb} alt="thumb" className="object-cover" />
        </div>
    </label>
);

const ProfileForm: React.FC = () => {
    const [profileForm, setProfileForm] = useState({
        detail1: "",
        detail2: "",
        detail3: "",
        detail4: "",
        detail5: "",
        detail6: "",
        detail7: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        coggin: "",
    });

    return (
        <div>
            <FormHeader title="HORSE DETAILS" />
            <Prototype04Input
                type="text"
                value={profileForm.detail1}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, detail1: e.target.value })
                }
                placeholder="Thoroughbred"
                icon={typeIcon}
            />
            <Prototype04Input
                type="text"
                value={profileForm.detail2}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, detail2: e.target.value })
                }
                placeholder="12.5 hands"
                icon={rulerIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.detail3}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, detail3: e.target.value })
                }
                placeholder="8 years old"
                icon={clockIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.detail4}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, detail4: e.target.value })
                }
                placeholder="Gelding"
                icon={genderIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.detail5}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, detail5: e.target.value })
                }
                placeholder="Jumper"
                icon={horseIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.detail6}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, detail6: e.target.value })
                }
                placeholder="Chestnut"
                icon={colorIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.detail7}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, detail7: e.target.value })
                }
                placeholder="Stockings, Stripe"
                icon={brushIcon}
                className="mt-4"
            />

            <FormHeader title="COMPETITION NUMBERS" />

            <Prototype04Input
                type="text"
                value={profileForm.num1}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num1: e.target.value })
                }
                placeholder="Passport: 109080"
                icon={planeIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num2}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num2: e.target.value })
                }
                placeholder="FEI: 102909"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num3}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num3: e.target.value })
                }
                placeholder="USEF: 102839"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num4}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num4: e.target.value })
                }
                placeholder="USDF: N/A"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num5}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num5: e.target.value })
                }
                placeholder="USEA: N/A"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num6}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num6: e.target.value })
                }
                placeholder="USHJA: N/A"
                icon={numberIcon}
                className="mt-4"
            />
            <FormHeader title="COGGINS" />
            <Prototype04Input
                type="text"
                value={profileForm.coggin}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, coggin: e.target.value })
                }
                placeholder="Inspected: 12.06.21"
                icon={certificateIcon}
                className="mt-4"
            />
            <ImageCard icon={certificateIcon} />
        </div>
    );
};
export default ProfileForm;
