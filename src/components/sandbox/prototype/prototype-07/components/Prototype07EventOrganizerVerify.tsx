import Prototype07Button from "./global/Prototype07Button";
import { useContext } from "react";
import { SignupStages } from "./Prototype07ContextApi";

import backIcon from "../assets/arrow-left.svg";
import emailIcon from "../assets/email.svg";
import eventOrgIcon from "../assets/event-org.png";

const Prototype07EventOrganizerVerify: React.FC = () => {
    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value });
    };

    return (
        <div>
            <div className="text-[24px] flex items-center gap-2 text-white">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" className="invert" />
                </button>
                EVENT ORGANIZER
            </div>
            <div className="mt-10">
                <img
                    src={eventOrgIcon}
                    alt="icon"
                    className="rounded-full shadow-xl mx-auto"
                />
            </div>
            <div className="mt-10 flex gap-4 items-center border-gray-300 border-solid border-[1px]  p-3 rounded-xl">
                <div className="min-w-[25px]">
                    <img src={emailIcon} alt="email" className="w-full" />
                </div>
                <div className="text-white">
                    <p>
                        A verification email was sent to the email address on
                        file with the USEF for the competiton manmagement
                        membership number you entered.
                    </p>
                    <p className="mt-4">
                        Click the link the email to continue.
                    </p>
                </div>
            </div>
            <div className="w-[70%] mt-20 mx-auto">
                <Prototype07Button
                    caption="SEARCH"
                    type={1}
                    disabled={!stage.selector}
                    onClick={() => stageHandle("Landing")}
                />
            </div>
            <div className="text-center text-white opacity-50 mt-10">OR</div>
            <div className="text-white my-10 text-center">
                Don’t have a USEF number?{" "}
                <a
                    className="text-[#F7074F]"
                    onClick={() => stageHandle("SignUp")}
                >
                    Continue &gt;
                </a>
            </div>
        </div>
    );
};

export default Prototype07EventOrganizerVerify;
