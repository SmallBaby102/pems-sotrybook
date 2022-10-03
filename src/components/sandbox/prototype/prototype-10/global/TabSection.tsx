const TabSection: React.FC<{
    captions: string[];
    icons: string[];
    value: number;
    onChange: (value: number) => void;
}> = ({ captions, icons, value, onChange }) => {
    const redFilter =
        "brightness(0) saturate(100%) invert(19%) sepia(100%) saturate(5995%) hue-rotate(335deg) brightness(95%) contrast(103%)";
    return (
        <div className="flex gap-2 mt-8">
            {captions.map((item, index) => (
                <button
                    onClick={() => onChange(index)}
                    className={`rounded-full flex items-center px-2 py-1 gap-2 ${
                        index === value ? "bg-[#FFDEE8] text-[#F7074F]" : ""
                    }`}
                >
                    <span>
                        <img
                            src={icons[index]}
                            alt="icon"
                            style={{
                                filter: index === value ? redFilter : undefined,
                            }}
                        />
                    </span>
                    <span>{item}</span>
                </button>
            ))}
        </div>
    );
};
export default TabSection;
