import { useState } from "react";
import Prototype04Input from "../global/Prototype04Input";

import userIcon from "../assets/competitor.svg";
import ageIcon from "../assets/age-icon.svg";
import locationIcon from "../assets/location.svg";
import numberIcon from "../assets/field-number.svg";
import horseIcon from "../assets/horse-icon.svg";
import chartIcon from "../assets/chart.svg";

const FormHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="text-[16px] text-[#122B46] font-normal my-6">{title}</h3>
);

const ProfileForm: React.FC = () => {
    const [profileForm, setProfileForm] = useState({
        name: "",
        age: "",
        location: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        dressage: "",
        dressage2: "",
    });

    return (
        <div>
            <FormHeader title="PERSONAL DETAILS" />
            <Prototype04Input
                type="text"
                value={profileForm.name}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, name: e.target.value })
                }
                placeholder="David Silbia"
                icon={userIcon}
            />
            <Prototype04Input
                type="text"
                value={profileForm.age}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, age: e.target.value })
                }
                placeholder="23 years old"
                icon={ageIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.location}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, location: e.target.value })
                }
                placeholder="Australian"
                icon={locationIcon}
                className="mt-4"
            />

            <FormHeader title="COMPETITION DETAILS" />

            <Prototype04Input
                type="text"
                value={profileForm.dressage}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, dressage: e.target.value })
                }
                placeholder="Dressage, Eventing"
                icon={horseIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.dressage2}
                onChange={(e) =>
                    setProfileForm({
                        ...profileForm,
                        dressage2: e.target.value,
                    })
                }
                placeholder="Dressage, Eventing"
                icon={chartIcon}
                className="mt-4"
            />

            <FormHeader title="COMPETITION NUMBERS" />

            <Prototype04Input
                type="text"
                value={profileForm.num1}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num1: e.target.value })
                }
                placeholder="FEI: 102909"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num2}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num2: e.target.value })
                }
                placeholder="USEF: 102839"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num3}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num3: e.target.value })
                }
                placeholder="USDF: N/A"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num4}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num4: e.target.value })
                }
                placeholder="USEA: N/A"
                icon={numberIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="text"
                value={profileForm.num5}
                onChange={(e) =>
                    setProfileForm({ ...profileForm, num5: e.target.value })
                }
                placeholder="USHJA: N/A"
                icon={numberIcon}
                className="mt-4"
            />
        </div>
    );
};
export default ProfileForm;
