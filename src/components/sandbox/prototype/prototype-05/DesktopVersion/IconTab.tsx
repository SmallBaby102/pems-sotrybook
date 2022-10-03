import settingIcon from "./../assets/setting-icon.svg";
const IconTab: React.FC<{
    captions: string[];
    icons: string[];
    selected: number;
    onChange: (index: number) => void;
    onEditProfile: () => void;
    className?: string;
}> = ({ captions, icons, selected, onChange, onEditProfile, className }) => {
    const redFilter =
        "brightness(0) saturate(100%) invert(22%) sepia(82%) saturate(5597%) hue-rotate(332deg) brightness(92%) contrast(111%)";
    return (
        <div
            className={`flex gap-3 items-center overflow-auto ${
                className || ""
            }`}
        >
            {captions.map((tab, index) => (
                <button
                    className={`flex gap-2 rounded-full items-center px-3 py-1 min-w-fit ${
                        index === selected
                            ? "text-[#F7074F] bg-[#F7074F18]"
                            : ""
                    }`}
                    onClick={() => onChange(index)}
                >
                    <img
                        src={icons[index]}
                        alt="icon"
                        style={{
                            filter: index === selected ? redFilter : undefined,
                        }}
                    />
                    {tab}
                </button>
            ))}
            <div className="flex flex-1 justify-end">
                <button className="flex items-center w-max px-2 py-1 gap-2 border border-solid border-[#F7074F] text-[#F7074F] rounded-full "
                  onClick={() => onEditProfile()}
                >
                    <img src={settingIcon} alt="icon" />
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export default IconTab;
