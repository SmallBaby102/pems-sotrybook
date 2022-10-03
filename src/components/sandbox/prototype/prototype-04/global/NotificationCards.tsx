import closeIcon from "../assets/close-icon.svg";
import verifiedIcon from "../assets/verified-icon.svg";

export const RedNotificationCard: React.FC<{
    icon: string;
    text: string;
    caption?: string;
    onClick?: () => void;
    className?: string;
}> = ({ icon, text, caption, onClick, className }) => (
    <div
        className={`text-[#EB5757] bg-[#EB575716] rounded-2xl p-4 text-[14px] ${className}`}
    >
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-black border-[1px] border-solid">
                <img
                    src={icon}
                    alt="icon"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">{text}</div>
            <button>
                <img src={closeIcon} alt="close" />
            </button>
        </div>
        {caption && (
            <button
                onClick={onClick}
                className="mt-4 rounded-full border-[#EB5757] border-[1px] border-solid w-full p-3"
            >
                {caption}
            </button>
        )}
    </div>
);

export const GreenNotificationCard: React.FC<{
    icon: string;
    text: string;
    className?: string;
}> = ({ icon, text, className }) => (
    <div
        className={`text-[#00B6AA] bg-[#00B6AA16] rounded-2xl p-4 text-[14px] ${className}`}
    >
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-black border-[1px] border-solid">
                <img
                    src={icon}
                    alt="icon"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">{text}</div>
            <div>
                <img src={verifiedIcon} alt="icon" />
            </div>
        </div>
    </div>
);

// export default { RedNotificationCard, GreenNotificationCard};
