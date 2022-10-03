import Prototype03Button from "./global/Prototype03Button";
import { useContext, useState } from "react";
import { SignupStages } from "./Prototype03ContextApi";
import Prototype03Input from "./global/Prototype03Input";

import backIcon from "./assets/arrow-left.svg";
import userIcon from "./assets/competitor.svg";
import locationIcon from "./assets/location.svg";
import birthdayIcon from "./assets/birthday.svg";
import addressIcon from "./assets/address.svg";
import numberIcon from "./assets/field-number.svg";
import dressageIcon from "./assets/dressage.svg";
import chartIcon from "./assets/chart.svg";
import cardIcon from "./assets/card.svg";
import socialSecurityIcon from "./assets/social-security.svg";

const Prototype03ProfileForm: React.FC = () => {

    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value })
    }

    const [profileForm, setProfileForm] = useState({
        firstName: "",
        lastName: "",
        locations: [{ name: "American", selected: true }, { name: "Asian", selected: false }],
        birthday: "",
        address: "",
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        dressage: "",
        dressage2: "",
        card: "",
        socialSecurity: ""
    });

    return (
        <div>
            <div className="text-[24px] flex items-center gap-2">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Review your profile</div>
            </div>
            <div className="mt-[90px]">
                <div className="font-bold">PERSONAL DETAILS</div>
                <Prototype03Input
                    type="text"
                    value={profileForm.firstName}
                    onChange={e => setProfileForm({ ...profileForm, firstName: e.target.value })}
                    placeholder="Jennifer"
                    icon={userIcon}
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.lastName}
                    onChange={e => setProfileForm({ ...profileForm, lastName: e.target.value })}
                    placeholder="Grey"
                    icon={userIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="select"
                    value={profileForm.locations}
                    onChange={e => setProfileForm({ ...profileForm, locations: profileForm.locations.map(item => ({ ...item, selected: profileForm.locations === e.target.value ? true : false })) })}
                    placeholder="Location"
                    icon={locationIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="date"
                    value={profileForm.birthday}
                    onChange={e => setProfileForm({ ...profileForm, birthday: e.target.value })}
                    placeholder="Birthday"
                    icon={birthdayIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.address}
                    onChange={e => setProfileForm({ ...profileForm, address: e.target.value })}
                    placeholder="Address"
                    icon={addressIcon}
                    className="mt-4"
                />
                <div className="font-bold my-4">COMPETITON NUMBRS</div>
                <Prototype03Input
                    type="text"
                    value={profileForm.num1}
                    onChange={e => setProfileForm({ ...profileForm, num1: e.target.value })}
                    placeholder="090798"
                    icon={numberIcon}
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.num2}
                    onChange={e => setProfileForm({ ...profileForm, num2: e.target.value })}
                    placeholder="68798"
                    icon={numberIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.num3}
                    onChange={e => setProfileForm({ ...profileForm, num3: e.target.value })}
                    placeholder="68487"
                    icon={numberIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.num4}
                    onChange={e => setProfileForm({ ...profileForm, num4: e.target.value })}
                    placeholder="USEA number"
                    icon={numberIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.num5}
                    onChange={e => setProfileForm({ ...profileForm, num5: e.target.value })}
                    placeholder="USHJA number"
                    icon={numberIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.num6}
                    onChange={e => setProfileForm({ ...profileForm, num6: e.target.value })}
                    placeholder="Other number"
                    icon={numberIcon}
                    className="mt-4"
                />
                <div className="font-bold my-4">COMPETITON DETAILS</div>
                <Prototype03Input
                    type="text"
                    value={profileForm.dressage}
                    onChange={e => setProfileForm({ ...profileForm, dressage: e.target.value })}
                    placeholder="Dressage, Eventing"
                    icon={dressageIcon}
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.dressage2}
                    onChange={e => setProfileForm({ ...profileForm, dressage2: e.target.value })}
                    placeholder="Dressage, Eventing"
                    icon={chartIcon}
                    className="mt-4"
                />
                <div className="font-bold my-4">FINANCIAL DETAILS</div>
                <Prototype03Input
                    type="text"
                    value={profileForm.card}
                    onChange={e => setProfileForm({ ...profileForm, card: e.target.value })}
                    placeholder="Add credit card"
                    icon={cardIcon}
                />
                <Prototype03Input
                    type="text"
                    value={profileForm.socialSecurity}
                    onChange={e => setProfileForm({ ...profileForm, socialSecurity: e.target.value })}
                    placeholder="Add Social Security Number"
                    icon={socialSecurityIcon}
                    className="mt-4"
                />

            </div>
            <div className="w-[70%] my-[60px] mx-auto">
                <Prototype03Button caption="SAVE PROFILE" type={1} disabled={!stage.selector} onClick={() => stageHandle("3")} />
            </div>
        </div>
    );
};

export default Prototype03ProfileForm;