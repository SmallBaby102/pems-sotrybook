import Prototype03Button from "./global/Prototype03Button";
import { useContext, useState } from "react";
import { SignupStages } from "./Prototype03ContextApi";
import Prototype03Input from "./global/Prototype03Input";

import backIcon from "./assets/arrow-left.svg";
import userIcon from "./assets/competitor.svg";
import emailIcon from "./assets/email.svg";
import passIcon from "./assets/password.svg";

const Prototype03SignupForm: React.FC = () => {

    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value })
    }

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });

    return (
        <div>
            <div className="text-[24px] flex items-center gap-2">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" />
                </button>
            </div>
            <div>
                <h1 className="text-[24px] font-norma text-[#120D26]">Sign up</h1>
            </div>
            <div className="mt-6">
                <Prototype03Input
                    type="text"
                    value={signUpForm.username}
                    onChange={e => setSignUpForm({ ...signUpForm, username: e.target.value })}
                    placeholder="Full name"
                    icon={userIcon}
                    className="mt-4"
                />
                <Prototype03Input
                    type="email"
                    value={signUpForm.email}
                    onChange={e => setSignUpForm({ ...signUpForm, email: e.target.value })}
                    placeholder="abc@email.com"
                    icon={emailIcon}
                    className="mt-4"

                />
                <Prototype03Input
                    type="password"
                    value={signUpForm.password}
                    onChange={e => setSignUpForm({ ...signUpForm, password: e.target.value })}
                    placeholder="Your password"
                    icon={passIcon}
                    className="mt-4"

                />
                <Prototype03Input
                    type="password"
                    value={signUpForm.password2}
                    onChange={e => setSignUpForm({ ...signUpForm, password2: e.target.value })}
                    placeholder="Confirm password"
                    icon={passIcon}
                    className="mt-4"

                />
            </div>
            <div className="w-[70%] mt-[60px] mx-auto">
                <Prototype03Button caption="SIGN UP" type={1} disabled={!stage.selector} onClick={() => stageHandle("Landing")} />
            </div>
            <div className="text-center text-[#777E85] mt-10">OR</div>
            <div className="text-[#120D26] my-10 text-center">
                Already have an account? <a className="text-[#F7074F]">Sign in</a>
            </div>
        </div>
    );
};

export default Prototype03SignupForm;