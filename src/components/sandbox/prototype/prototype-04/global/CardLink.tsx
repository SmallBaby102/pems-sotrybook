import arrowIcon from "../assets/arrow.svg";

const CardLink: React.FC<{
    icon?: string;
    caption: string;
    onClick?: () => void;
    type: string;
    className?: string;
}> = ({ icon, caption, onClick, type, className }) => (
    <button
        onClick={onClick}
        className={`mt-4 h-[58px] text-gray-500 flex items-center gap-2 w-full pl-4 py-2 border-solid rounded-xl border-[#D3DAEE] border-[1px] bg-white ${className}`}
    >
        <div className="flex gap-2 flex-1 items-center max-w-[calc(100%_-_30px)]">
            {icon && (
                <span className="min-w-[22px]">
                    <img src={icon} alt="icon" />
                </span>
            )}
            <span className="whitespace-nowrap overflow-hidden text-ellipsis px-3">
                {caption}
            </span>
        </div>
        {type === "dropdown" && (
            <span className="min-w-[11px]">
                <img src={arrowIcon} alt="arrow" className="rotate-90" />
            </span>
        )}
        {type === "button" && (
            <span className="min-w-[11px]">
                <img src={arrowIcon} alt="arrow" />
            </span>
        )}
    </button>
);

export default CardLink;
