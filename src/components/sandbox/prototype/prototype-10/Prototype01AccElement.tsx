import { useState } from "react";
import Minus from "./assets/minus-icon.svg";
import Plus from "./assets/plus-icon.svg";

const Prototype01AccElement: React.FC<{
    open: boolean;
    year: string;
    title: string;
    info: any;
    addToCardButton?: boolean;
    status?: string;
}> = ({ open, year, title, info, addToCardButton, status }) => {
    const [isOpen, setIsOpen] = useState(open);
    return (
        <div
            className="border-gray-300 border-solid border-[1px] rounded-md p-2 mt-2 overflow-hidden"
            style={{
                height: isOpen ? "auto" : 40,
            }}
        >
            <div
                className="grid grid-cols-[60px_auto_50px] items-center text-[14px] font-bold cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    style={{
                        color: isOpen ? "unset" : "#aaa",
                        fontWeight: isOpen ? "unset" : "normal",
                    }}
                >
                    {year}
                </div>
                <div
                    style={{
                        color: isOpen ? "unset" : "#aaa",
                        fontWeight: isOpen ? "unset" : "normal",
                    }}
                >
                    {title}
                </div>
                <div className="text-right">
                    <img
                        src={isOpen ? Minus : Plus}
                        alt="plus"
                        className="ml-auto"
                    />
                </div>
            </div>
            <div className="grid grid-cols-[60px_auto_50px] items-center mt-3">
                <div>&nbsp;</div>
                <div className="pb-2">
                    <div className="flex items-center gap-4">
                        <img
                            src={info.icon}
                            alt="icon"
                            className="w-[20px] h-[20px] rounded-full drop-shadow-md"
                        />
                        <p className="m-0 text-[#3C4B7199] text-[12px]">
                            {info.title}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[55%_15%_15%_15%] items-center gap-4">
                        {info.items.map((item: any, index: number) => (
                            <>
                                <p className="font-semibold text-[14px] flex-1">
                                    {item.item}
                                </p>
                                <div className="text-[#3C4B7199] text-[14px]">
                                    Registered: {item.registered}
                                </div>
                                <div className="text-[#3C4B7199] text-[14px]">
                                    Division: {item.price}
                                </div>
                                <div className="text-[#3C4B7199] text-[14px]">
                                    {addToCardButton ? (
                                        <button
                                            className="capitalize bg-[#00B6AA50] text-[#00B6AA] px-4 py-2 rounded-full -my-3 -mr-3 disabled:grayscale w-full"
                                            disabled={!!item.status}
                                        >
                                            {item.status
                                                ? item.status
                                                : "Add to card"}
                                        </button>
                                    ) : (
                                        "Class: " + item.class
                                    )}
                                </div>
                                {index < info.items.length - 1 && (
                                    <div className="border-b-[#eee] border-solid border-[1px] border-transparent col-span-4"></div>
                                )}
                            </>
                        ))}
                    </div>
                </div>
                <div className="border-b-[#eee] border-solid border-[1px] border-transparent h-full">
                    &nbsp;
                </div>
            </div>
        </div>
    );
};

export default Prototype01AccElement;
