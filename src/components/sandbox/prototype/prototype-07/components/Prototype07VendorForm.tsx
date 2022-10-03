import Prototype03Button from "./global/Prototype07Button";
import { useContext, useState } from "react";
import { SignupStages } from "./Prototype07ContextApi";
import Prototype03Input from "./global/Prototype07Input";

import backIcon from "../assets/arrow-left.svg";
import uploadIcon from "../assets/upload.svg";
import emailIcon from "../assets/email.svg";
import userIcon from "../assets/usef-icon.svg";
import businessCat from "../assets/category.svg";
import websiteIcon from "../assets/location.svg";
import phoneIcon from "../assets/phone-icon.svg";
import locationIcon from "../assets/address.svg";
import passwordIcon from "../assets/password.svg";

const Prototype07VendorForm: React.FC = () => {
    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value });
    };

    const [vendorForm, setVendorForm] = useState({
        businessName: "",
        businessCat: "",
        location: "",
        website: "",
        phoneNumber: "",
        email: "",
        logo: "",
        password: "",
        password2: "",
    });

    return (
        <div className="w-full">
            <div className="text-[24px] flex items-center gap-2 mt-6">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" className="invert" />
                </button>
                <div className="text-white">VENDOR OR SPONSOR</div>
            </div>
            <div className="mt-2 mb-1">Enter business details...</div>
            <div>
                <Prototype03Input
                    type="text"
                    value={vendorForm.businessName}
                    onChange={(e) =>
                        setVendorForm({
                            ...vendorForm,
                            businessName: e.target.value,
                        })
                    }
                    placeholder="Business name"
                    icon={userIcon}
                />
                <Prototype03Input
                    type="text"
                    value={vendorForm.businessCat}
                    onChange={(e) =>
                        setVendorForm({
                            ...vendorForm,
                            businessCat: e.target.value,
                        })
                    }
                    placeholder="Business category"
                    icon={businessCat}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={vendorForm.location}
                    onChange={(e) =>
                        setVendorForm({
                            ...vendorForm,
                            location: e.target.value,
                        })
                    }
                    placeholder="Location"
                    icon={locationIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="text"
                    value={vendorForm.website}
                    onChange={(e) =>
                        setVendorForm({
                            ...vendorForm,
                            website: e.target.value,
                        })
                    }
                    placeholder="Website"
                    icon={websiteIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="tel"
                    value={vendorForm.phoneNumber}
                    onChange={(e) =>
                        setVendorForm({
                            ...vendorForm,
                            phoneNumber: e.target.value,
                        })
                    }
                    placeholder="Phone number"
                    icon={phoneIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="email"
                    value={vendorForm.email}
                    onChange={(e) =>
                        setVendorForm({ ...vendorForm, email: e.target.value })
                    }
                    placeholder="Business email"
                    icon={emailIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="file"
                    value={vendorForm.logo}
                    onChange={(e) =>
                        setVendorForm({ ...vendorForm, logo: e.target.value })
                    }
                    placeholder="Upload Logo"
                    icon={uploadIcon}
                    className="mt-4"
                    accept="image/*"
                />
                <Prototype03Input
                    type="password"
                    value={vendorForm.password}
                    onChange={(e) =>
                        setVendorForm({
                            ...vendorForm,
                            password: e.target.value,
                        })
                    }
                    placeholder="Your password"
                    icon={passwordIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="password"
                    value={vendorForm.password2}
                    onChange={(e) =>
                        setVendorForm({
                            ...vendorForm,
                            password2: e.target.value,
                        })
                    }
                    placeholder="Confirm password"
                    icon={passwordIcon}
                    className="mt-4"
                />
            </div>
            <div className="w-[70%] my-[60px] mx-auto">
                <Prototype03Button
                    caption="NEXT"
                    type={1}
                    disabled={!stage.selector}
                    onClick={() => stageHandle("SignIn")}
                />
            </div>
        </div>
    );
};

export default Prototype07VendorForm;
