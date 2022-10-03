import EventRules from "./assets/Policies/event-rules.svg";
import AttireTack from "./assets/Policies/attire-tack.svg";
import OrderOfGo from "./assets/Policies/order-of-go.svg";
import Parking from "./assets/Policies/parking.svg";
import RvIcon from "./assets/Policies/rv-icon.svg";
import MoreButton from "./global/MoreButton";

const Prototype01Policies : React.FC<{onOverallMore: ()=>void}> = ({onOverallMore})=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-2 md:gap-y-6">
            <div className="text-[14px] mt-6 md:mt-0">
                <img src={EventRules} alt="event rules" />
                Event Rules
            </div>
            <div className="text-[#3C4B7199] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="text-[14px] mt-6 md:mt-0">
                <img src={AttireTack} alt="event rules" />
                Attire, Tack
            </div>
            <div className="text-[#3C4B7199] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
            </div>
            <div className="text-[14px] mt-6 md:mt-0">
                <img src={OrderOfGo} alt="event rules" />
                Order of go
            </div>
            <div className="text-[#3C4B7199] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </div>
            <div className="text-[14px] mt-6 md:mt-0">
                <img src={Parking} alt="event rules" />
                Parking
            </div>
            <div className="text-[#3C4B7199] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </div>
            <div className="text-[14px] mt-6 md:mt-0">
                <img src={RvIcon} alt="event rules" />
                RV's
            </div>
            <div className="text-[#3C4B7199] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="text-[14px]">&nbsp;</div>
            <MoreButton onClick={onOverallMore}/>
        </div>
    )
}

export default Prototype01Policies;