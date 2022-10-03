import arrowIcon from "./../assets/arrow-icon.svg";

const NewsCard: React.FC<{
    description: string;
    caption: string;
    icon: string;
}> = ({ description, caption, icon }) => {
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
            <div className="flex-1">
                <div className="font-semibold leading-[22px] mt-1">
                    {caption}
                </div>
                <div className="text-xs text-[#979797] mt-1">{description}</div>
            </div>
            <div className="min-w-[14px]">
                <img src={arrowIcon} alt="arrow" />
            </div>
        </div>
    );
};

export default NewsCard;
