import locationIcon from "./../assets/location-icon.svg";
import timeIcon from "./../assets/time-icon.svg";
import arrowIcon from "./../assets/arrow-icon.svg";
const EventCard: React.FC<{
    title: string;
    caption: string;
    icon: string;
    location: string;
    time: string;
}> = ({ title, caption, icon, location, time }) => {
    return (
        <div className="flex gap-2 shadow-[0_8px_25px_rgba(83,89,144,0.07)] bg-white rounded-2xl mb-4 p-3 items-center">
            <div className="flex-1">
                <div className="flex gap-2 items-center">
                    <div className="w-5 h-5 shadow-md overflow-hidden rounded-full">
                        <img
                            src={icon}
                            alt="icon"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="text-sm text-[#66829F]">{title}</div>
                </div>
                <div className="text-lg font-semibold leading-[22px] mt-1">
                    {caption}
                </div>
                <div className="flex gap-6 items-center">
                    <div className="flex gap-2 items-center text-xs text-[#747688] mt-1">
                        <img src={locationIcon} alt="location" />
                        <div>{location}</div>
                    </div>
                    <div className="flex gap-2 items-center text-xs text-[#747688] mt-1">
                        <img src={timeIcon} alt="time" />
                        <div>{time}</div>
                    </div>
                </div>
            </div>
            <div className="min-w-[14px]">
                <img src={arrowIcon} alt="arrow" />
            </div>
        </div>
    );
};

export default EventCard;
