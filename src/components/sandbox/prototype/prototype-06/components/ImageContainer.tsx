const ImageContainer: React.FC<{
    icon?: string;
    value: string[];
    onClick?: () => void;
    className?: string;
}> = ({ icon, onClick, value, className }) => (
    <div
        onClick={onClick}
        className={`mt-4 h-[58px] text-gray-500 flex items-center gap-2 w-full pl-4 py-2 border-solid rounded-xl border-[#D3DAEE] border-[1px] bg-white ${className}`}
    >
        <div className="flex gap-2 items-center max-w-[calc(100%_-_57px)]">
            {icon && (
                <span className="min-w-[22px]">
                    <img src={icon} alt="icon" />
                </span>
            )}
            <span className="whitespace-nowrap overflow-auto scrollbar-hide mt-2">
                {value.map((item) => (
                    <div className="w-[40px] h-[40px] overflow-hidden rounded-lg inline-block mr-1">
                        <img
                            src={item}
                            alt="image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </span>
        </div>
        <button
            onClick={onClick}
            className="bg-gray-100 rounded-lg w-[40px] h-[40px]"
        >
            +
        </button>
    </div>
);

export default ImageContainer;
