import Prototype03Button from "./global/Prototype03Button";
import { useContext, useState } from "react";
import { SignupStages } from "./Prototype03ContextApi";
import Prototype03Input from "./global/Prototype03Input";

import backIcon from "./assets/arrow-left.svg";
import USEFIcon from "./assets/usef-icon.svg";
import eventOrgIcon from "./assets/event-org.png";

const Prototype03CompetitorOrganizer: React.FC = () => {

    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value })
    }

    const [USEF, setUSEF] = useState('');

    return (
        <div>
            <div className="text-[24px] flex items-center gap-2">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" />
                </button>
                Competitor, etc.
            </div>
            <div className="mt-10">
                <img src={eventOrgIcon} alt="icon" className="rounded-full shadow-xl mx-auto" />
            </div>
            <div className="mt-[60px]">
                <p className="text-[18px] text-[#3C4B71] mt-4">Enter your USEF number</p>
                <Prototype03Input
                    type="text"
                    value={USEF}
                    onChange={e => setUSEF(e.target.value)}
                    placeholder="USEF number"
                    icon={USEFIcon}
                />
            </div>
            <div className="w-[70%] mt-[60px] mx-auto">
                <Prototype03Button caption="SEARCH" type={1} disabled={!stage.selector} onClick={() => stageHandle("CompOrgVerify")} />
            </div>
            <div className="text-center text-[#777E85] mt-10">OR</div>
            <div className="text-[#120D26] my-10 text-center">
                Don’t have a USEF number? <a className="text-[#F7074F]" onClick={() => stageHandle("SignUp")}>Continue &gt;</a>
            </div>
        </div>
    );
};

export default Prototype03CompetitorOrganizer;