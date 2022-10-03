import { useState } from "react";

import backIcon from "../assets/arrow-left.svg";
import USEFIcon from "../assets/usef-icon.svg";
import eventOrgIcon from "../assets/event-org.png";
import Prototype04Input from "./../../prototype-04/global/Prototype04Input";
import Prototype04Button from "./../../prototype-04/global/Prototype04Button";

const AddHorseUSEFNumber: React.FC = () => {
    const [USEF, setUSEF] = useState("");

    return (
        <div className="p-6">
            <div className="text-[24px] flex items-center gap-2">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                Add Horse
            </div>
            <div className="mt-10">
                <img
                    src={eventOrgIcon}
                    alt="icon"
                    className="rounded-full shadow-xl mx-auto"
                />
            </div>
            <div className="mt-[60px]">
                <p className="text-[18px] text-[#3C4B71] mt-4">
                    Enter your USEF number
                </p>
                <Prototype04Input
                    type="text"
                    value={USEF}
                    onChange={(e) => setUSEF(e.target.value)}
                    placeholder="USEF number"
                    icon={USEFIcon}
                />
            </div>
            <div className="w-[70%] mt-[60px] mx-auto">
                <Prototype04Button caption="SEARCH" type={1} />
            </div>
            <div className="text-center text-[#777E85] mt-10">OR</div>
            <div className="text-[#120D26] my-10 text-center">
                Don’t have a USEF number?{" "}
                <a className="text-[#F7074F]">Continue &gt;</a>
            </div>
        </div>
    );
};

export default AddHorseUSEFNumber;
