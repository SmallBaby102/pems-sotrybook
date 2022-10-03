import backIcon from "./assets/back-icon.svg";
import ResultCard from "./global/ResultCard";
import profile1 from "./assets/profile-pic-1.png";
import placingIcon from "./assets/placing-icon.svg";
import numberIcon from "./assets/number-icon.svg";
import likeIcon from "./assets/like-icon.svg";
import dislikeIcon from "./assets/dislike-icon.svg";
import moneyIcon from "./assets/money-icon.svg";

const EventDetail: React.FC = () => {
    return (
        <div className="p-6">
            <div className="text-[24px] flex items-center gap-2">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Pony Hunter Yearling</div>
            </div>
            <ResultCard
                title="Alex Less"
                description="Australian • Zone 5 • Socks"
                image={profile1}
                rate={1}
            />
            <div className="grid grid-cols-[32px_auto_auto] gap-y-6 text-[#122B4688] text-[14px] border-[1px] border-solid border-[#3C4B71] rounded-xl mt-6 p-4">
                <img src={placingIcon} alt="icon" />
                <div>Placing</div>
                <div>1</div>

                <img src={numberIcon} alt="icon" />
                <div>Back number</div>
                <div>148</div>

                <img src={likeIcon} alt="icon" />
                <div>National points</div>
                <div>62.00</div>

                <img src={likeIcon} alt="icon" />
                <div>Zone points</div>
                <div>42.00</div>

                <img src={dislikeIcon} alt="icon" />
                <div>National points</div>
                <div>50.00</div>

                <img src={dislikeIcon} alt="icon" />
                <div>Zone points</div>
                <div>45.00</div>

                <img src={moneyIcon} alt="icon" />
                <div>Prize money</div>
                <div>$1423.80</div>
            </div>
            <div className="grid grid-cols-[32px_auto_auto] gap-y-6 text-[#122B4688] text-[14px] border-[1px] border-solid border-[#3C4B71] rounded-xl mt-2 p-4">
                TBD
            </div>
        </div>
    );
};

export default EventDetail;
