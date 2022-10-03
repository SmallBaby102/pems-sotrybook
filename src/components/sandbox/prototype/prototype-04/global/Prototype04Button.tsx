import nextIcon from "../assets/next.svg";

const Prototype04Button: React.FC<{
    className?: string;
    caption: string;
    type: number;
    disabled?: boolean;
    onClick?: () => void;
    icon?: string;
    arrowIcon?: boolean;
    color?: string;
    bgColor?: string;
}> = ({
    className,
    caption,
    type,
    disabled,
    onClick,
    icon,
    arrowIcon,
    color,
    bgColor,
}) => {
    const buttonTypeClassGenerator = () => {
        switch (type) {
            case 1:
                return `items-center py-4 rounded-xl w-full relative bg-[#F7074F] text-white disabled:opacity-[.5] border-1 border-transparent border-solid`;
            case 2:
                return `items-center py-4 rounded-xl w-full relative bg-white border-[1px] border-solid border-[#F7074F] text-[#F7074F] disabled:opacity-[.5]`;
            case 3:
                return `items-center py-4 rounded-xl w-full relative bg-[#EEEEEF] text-[#484646] disabled:opacity-[.5] border-1 border-transparent border-solid`;
            case 4:
                return `items-center py-4 rounded-xl w-full relative bg-white text-[#F7074F] disabled:opacity-[.5]`;
        }
    };
    return (
        <button
            onClick={onClick}
            className={`${buttonTypeClassGenerator()} ${className}`}
            style={{
                backgroundColor: type === 4 ? bgColor : undefined,
                borderColor: type === 2 ? color : undefined,
                color: type === 2 || type === 4 ? color : undefined,
            }}
            disabled={disabled}
        >
            {icon && type === 1 && (
                <span className="absolute left-4 top-[50%] translate-y-[-50%] brightness-0 invert">
                    <img src={icon} alt="icon" />
                </span>
            )}
            {icon && type !== 1 && (
                <span className="absolute left-4 top-[50%] translate-y-[-50%]">
                    <img src={icon} alt="icon" />
                </span>
            )}
            <span>{caption}</span>
            {arrowIcon === true && (
                <img
                    src={nextIcon}
                    alt="next"
                    className="absolute right-2 top-[50%] translate-y-[-50%]"
                />
            )}
        </button>
    );
};
export default Prototype04Button;
