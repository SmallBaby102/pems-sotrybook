import locationIcon from "./../assets/location-icon.svg";
const VendorCard: React.FC<{
    category: string;
    caption: string;
    icon: string;
    location: string;
}> = ({ category, caption, icon, location }) => {
    return (
        <div className="flex gap-2 shadow-[0_8px_25px_rgba(83,89,144,0.07)] bg-white rounded-2xl mb-4 p-3 items-center">
            <div>
                <div className="w-[79px] h-[92px] overflow-hidden rounded-xl">
                    <img
                        src={icon}
                        alt="icon"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div>
                <div className="text-xs text-[#F7074F]">{category}</div>
                <div className="text-lg font-semibold leading-[22px] mt-1">
                    {caption}
                </div>
                <div className="flex gap-2 items-center text-xs text-[#747688] mt-1">
                    <img src={locationIcon} alt="location" />
                    <div>{location}</div>
                </div>
            </div>
        </div>
    );
};

export default VendorCard;
