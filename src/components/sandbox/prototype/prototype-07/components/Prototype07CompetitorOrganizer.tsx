import Prototype07Button from "./global/Prototype07Button";
import { useContext, useState } from "react";
import { SignupStages } from "./Prototype07ContextApi";
import Prototype07Input from "./global/Prototype07Input";

import backIcon from "../assets/arrow-left.svg";
import USEFIcon from "../assets/usef-icon.svg";
import eventOrgIcon from "../assets/event-org.png";

const Prototype07CompetitorOrganizer: React.FC = () => {
    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value });
    };

    const [USEF, setUSEF] = useState("");

    return (
        <div>
            <div className="text-[24px] flex items-center gap-2 text-white w-[500px]">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" className="invert" />
                </button>
                COMPETITOR, TRAINER, SPECTATOR, ETC.
            </div>
            <div className="mt-10">
                <img
                    src={eventOrgIcon}
                    alt="icon"
                    className="rounded-full shadow-xl mx-auto"
                />
            </div>
            <div className="mt-[60px]">
                <p className="text-[18px] text-white mt-4">
                    Enter your USEF number
                </p>
                <Prototype07Input
                    type="text"
                    value={USEF}
                    onChange={(e) => setUSEF(e.target.value)}
                    placeholder="USEF number"
                    icon={USEFIcon}
                />
            </div>
            <div className="w-[70%] mt-[60px] mx-auto">
                <Prototype07Button
                    caption="SEARCH"
                    type={1}
                    disabled={!stage.selector}
                    onClick={() => stageHandle("CompOrgVerify")}
                />
            </div>
            <div className="text-center text-white opacity-50 mt-10">OR</div>
            <div className="my-10 text-center text-white">
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

export default Prototype07CompetitorOrganizer;
