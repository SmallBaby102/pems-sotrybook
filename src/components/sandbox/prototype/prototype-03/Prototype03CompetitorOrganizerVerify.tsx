import Prototype03Button from "./global/Prototype03Button";
import { useContext, useState } from "react";
import { SignupStages } from "./Prototype03ContextApi";

import backIcon from "./assets/arrow-left.svg";
import emailIcon from "./assets/email.svg";

const Prototype03CompetitorOrganizerVerify: React.FC = () => {

    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string)=>{
        setStage({...stage, stage: value})
    }

    const [USEF, setUSEF] = useState('');

    return (
        <div>
            <div className="text-[24px] flex items-center gap-2">
                <button onClick={()=>stageHandle("Init")}>
                    <img src={backIcon} alt="back" />
                </button>
                Competitor, etc.
            </div>
            <div className="mt-10 flex gap-4 items-center border-gray-300 border-solid border-[1px] bg-white p-3 rounded-xl">
                <div className="min-w-[25px]">
                    <img src={emailIcon} alt="email" className="w-full" />
                </div>
                <div className="text-[#777E85]">
                    A verification email was sent to the email address on file with the USEF for the membership number you entered.
                </div>
            </div>
            <div className="w-[70%] mt-[180px] mx-auto">
                <Prototype03Button caption="OPEN MAIL APP" type={1} disabled={!stage.selector} onClick={()=>stageHandle("Landing")}/>
            </div>
            <div className="text-center text-[#777E85] mt-10">OR</div>
            <div className="text-[#120D26] my-10 text-center">
                Don’t have a USEF number? <a className="text-[#F7074F]" onClick={()=>stageHandle("SignUp")}>Continue &gt;</a>
            </div>
        </div>
    );
};

export default Prototype03CompetitorOrganizerVerify;