import Prototype03Button from "./global/Prototype03Button";
import { useContext } from "react";
import { SignupStages } from "./Prototype03ContextApi";

import backIcon from "./assets/arrow-left.svg";
import competitorIcon from "./assets/competitor.svg";
import eventIcon from "./assets/event.svg";
import vendorIcon from "./assets/vendor.svg";

const Selector: React.FC<{ caption: string, selected: string, onChange: (value: string) => void, value: string, icon: string }> = ({ caption, selected, onChange, value, icon }) => (
    <button
        onClick={() => onChange(value)}
        className={`text-[14px] border-gray-300 border-solid border-[1px] rounded-xl flex w-full p-4 gap-2 items-center mt-3 text-[#777E85] bg-white ${selected === value ? "bg-[#F7074F] !text-white border-[#F7074F]" : ""}`}>
        <span><img src={icon} alt="icon" className={selected === value ? "brightness-0 invert" : ""} /></span>
        <span>{caption}</span>
    </button>
)

const Prototype03Signup: React.FC = () => {

    const [stage, setStage] = useContext(SignupStages);

    const selectorHandle = (value: string) => {
        setStage({ ...stage, selector: value })
    }

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value })
    }

    const stageWay = () => {
        if (stage.selector === "event") {
            stageHandle("EventOrg")
        }
        if (stage.selector === "vendor") {
            stageHandle("VendorForm")
        }
        if (stage.selector === "competitor") {
            stageHandle("CompOrg")
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" />
                </button>
            </div>
            <div>
                <h1 className="text-[24px] font-norma text-[#120D26]">Sign up</h1>
            </div>
            <div>
                <p className="text-[18px] text-[#3C4B71] mt-4">What are you?</p>
            </div>
            <div>
                <Selector
                    caption="Competitor, Spectator, Trainer, etc."
                    value="competitor"
                    icon={competitorIcon}
                    selected={stage.selector}
                    onChange={selectorHandle}
                />
                <Selector
                    caption="Event Organizer"
                    value="event"
                    icon={eventIcon}
                    selected={stage.selector}
                    onChange={selectorHandle}
                />
                <Selector
                    caption="Vendor, Sponsor, etc."
                    value="vendor"
                    icon={vendorIcon}
                    selected={stage.selector}
                    onChange={selectorHandle}
                />

            </div>
            <div className="w-[70%] mt-[80px] mx-auto">
                <Prototype03Button caption="NEXT" type={1} disabled={!stage.selector} onClick={stageWay} />
            </div>
            <div className="text-center text-[#777E85] mt-10">OR</div>
            <div className="text-[#120D26] my-10 text-center">
                Already have an account? <a className="text-[#F7074F]">Sign in</a>
            </div>
        </div>
    );
};

export default Prototype03Signup;