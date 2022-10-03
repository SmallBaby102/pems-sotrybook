import arrowIcon from "./../assets/arrow.svg";
import { useState, useEffect } from "react";

const ExpandableSelector: React.FC<{
    options: any[];
    onChange: (value: string) => void;
    placeholder: string;
    icon?: string;
    value: string;
    className?: string;
    onOpen?: () => void;
    onClose?: () => void;
    hasBackdrop?: boolean;
}> = ({
    options,
    onChange,
    placeholder,
    icon,
    value,
    className,
    onOpen,
    onClose,
    hasBackdrop,
}) => {
    const [expand, setExpand] = useState(false);
    const changeHandle = (value: string) => {
        onChange(value);
        setExpand(false);
        if (onClose) onClose();
    };

    useEffect(() => {
        if (expand && onOpen) onOpen();
        if (!expand && onClose) onClose();
    }, [expand]);

    return (
        <>
            {hasBackdrop && expand && (
                <div
                    className="inset-0 fixed"
                    onClick={() => setExpand(false)}
                ></div>
            )}
            <div
                className={`${
                    expand ? "h-auto z-20" : "h-[56px]"
                } bg-white overflow-hidden p-4 mb-2 rounded-2xl border-[1px] border-solid text-[#122B46] border-[#D3DAEE] ${className}`}
            >
                <div
                    className="flex items-center gap-4 cursor-pointer z-2"
                    onClick={() => setExpand(!expand)}
                >
                    {icon && (
                        <span>
                            <img src={icon} alt="icon" />
                        </span>
                    )}

                    <span className="flex-1">
                        {value
                            ? options.filter((item) => item.value === value)[0]
                                  .caption
                            : placeholder}
                    </span>
                    <span>
                        <img src={arrowIcon} alt="icon" className="rotate-90" />
                    </span>
                </div>
                <div className="mt-4 max-h-[200px] overflow-auto">
                    {options.map((item) => (
                        <div
                            onClick={() => changeHandle(item.value)}
                            className={`px-8 py-4 rounded-xl cursor-pointer whitespace-nowrap ${
                                item.value === value ? "bg-[#F6F7FB]" : ""
                            }`}
                        >
                            {item.caption}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default ExpandableSelector;
