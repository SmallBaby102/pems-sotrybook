import { useState, useEffect } from "react";

import backIcon from "../assets/back-icon.svg";
import passwordIcon from "../assets/password.svg";
import Prototype04Input from "./../../prototype-04/global/Prototype04Input";
import Prototype04Button from "./../../prototype-04/global/Prototype04Button";

const ManagePassword: React.FC = () => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordCurrent, setPasswordCurrent] = useState("");

    // this is for keeping save button on buttom of the page.
    const [tallScreen, setTallScreen] = useState(true);
    useEffect(() => {
        const handler = () => {
            const height = window.innerHeight;
            const width = window.innerWidth;
            if (height < 400 || width >= 1024) {
                setTallScreen(false);
            } else {
                setTallScreen(true);
            }
        };
        handler();
        window.addEventListener("resize", handler, true);
        return () => window.removeEventListener("resize", handler, true);
    }, []);
    //

    return (
        <div className="p-6">
            <div className="text-[24px] flex items-center gap-2">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Manage Password</div>
            </div>
            <p className="text-[#122B4680] mt-4">
                Password must contain at least 1 letter, 1 number and 1 symbol.
                Minimum length is 12 characters.
            </p>
            <Prototype04Input
                type="password"
                value={passwordCurrent}
                onChange={(e) => setPasswordCurrent(e.target.value)}
                placeholder="Current password"
                icon={passwordIcon}
                className="mt-6"
            />
            <Prototype04Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
                icon={passwordIcon}
                className="mt-4"
            />
            <Prototype04Input
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Confirm password"
                icon={passwordIcon}
                className="mt-4"
            />
            <div
                className={`w-[80%] mx-auto mt-6 ${
                    tallScreen ? "absolute translate-x-[-50%]" : ""
                } bottom-6 left-[50%]`}
            >
                <Prototype04Button type={1} caption="UPDATE" />
                <Prototype04Button type={3} className="mt-4" caption="CANCEL" />
            </div>
        </div>
    );
};

export default ManagePassword;
