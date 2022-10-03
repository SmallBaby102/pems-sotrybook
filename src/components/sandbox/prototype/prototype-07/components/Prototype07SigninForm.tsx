import { useContext, useState } from "react";
import { SignupStages } from "./Prototype07ContextApi";

import backIcon from "../assets/arrow-left.svg";
import userIcon from "../assets/competitor.svg";
import emailIcon from "../assets/email.svg";
import passIcon from "../assets/password.svg";
import Prototype07Input from "./global/Prototype07Input";
import Prototype07Button from "./global/Prototype07Button";

const Prototype07SigninForm: React.FC = () => {
    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value });
    };

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
    });

    return (
        <div>
            <div className="text-[24px] flex items-center gap-2">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" className="invert" />
                </button>
                <div className="text-white">BACK</div>
            </div>
            <div className="mt-6 overflow-hidden">
                <h1 className="text-[24px] font-norma text-white">Sign in</h1>
            </div>
            <div className="mt-6">
                <Prototype07Input
                    type="email"
                    value={signUpForm.email}
                    onChange={(e) =>
                        setSignUpForm({ ...signUpForm, email: e.target.value })
                    }
                    placeholder="Email"
                    icon={emailIcon}
                    className="mt-4"
                />
                <Prototype07Input
                    type="password"
                    value={signUpForm.password}
                    onChange={(e) =>
                        setSignUpForm({
                            ...signUpForm,
                            password: e.target.value,
                        })
                    }
                    placeholder="Password"
                    icon={passIcon}
                    className="mt-4"
                />
            </div>
            <div className="w-[70%] mt-[60px] mx-auto">
                <Prototype07Button
                    caption="SIGN IN"
                    type={1}
                    disabled={!stage.selector}
                    onClick={() => stageHandle("Landing")}
                />
            </div>
            <div className="text-center text-white opacity-50 mt-10">OR</div>
            <div className="text-white my-10 text-center">
                Already have an account?{" "}
                <a className="text-[#F7074F]">Sign up</a>
            </div>
        </div>
    );
};

export default Prototype07SigninForm;
