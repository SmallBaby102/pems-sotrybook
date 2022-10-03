import userIcon from "../assets/competitor.svg";
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email.svg";
import Prototype04Input from "./../../prototype-04/global/Prototype04Input";
import { useState } from "react";

const FormHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="text-[16px] text-[#122B46] font-normal my-6">{title}</h3>
);

const PontOfContactForm: React.FC = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });

    return (
        <div>
            <FormHeader title="POINT OF CONTACT" />
            <Prototype04Input
                type="text"
                value={form.firstName}
                onChange={(e) =>
                    setForm({
                        ...form,
                        firstName: e.target.value,
                    })
                }
                placeholder="First name"
                icon={userIcon}
            />
            <Prototype04Input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Last name"
                icon={userIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="tel"
                value={form.phoneNumber}
                onChange={(e) =>
                    setForm({
                        ...form,
                        phoneNumber: e.target.value,
                    })
                }
                placeholder="Phone"
                icon={phoneIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                icon={emailIcon}
                className="mt-4"
            />
        </div>
    );
};
export default PontOfContactForm;
