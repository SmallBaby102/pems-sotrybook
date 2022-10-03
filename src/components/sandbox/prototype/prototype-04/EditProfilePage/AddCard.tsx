import { useState, useEffect } from "react";
import Prototype04Button from "./../global/Prototype04Button";

import backIcon from "../assets/back-icon.svg";

const AddCard: React.FC = () => {
    const inputClassName = `px-0 text-[14px] border-transparent w-full border-b-[1px] border-b-[#122B4680] border-solid`;

    // this is for keeping save button on buttom of the page.
    const [tallScreen, setTallScreen] = useState(true);
    useEffect(() => {
        const handler = () => {
            const height = window.innerHeight;
            if (height < 400) {
                setTallScreen(false);
            } else {
                setTallScreen(true);
            }
        };
        handler();
        window.addEventListener("resize", handler, true);
        return () => window.removeEventListener("resize", handler, true);
    }, []);
    //

    return (
        <div className="p-6">
            <div className="text-[24px] flex items-center gap-2">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Add card</div>
            </div>
            <div className="border-[#D3DAEE] border-solid border-[1px] rounded-xl p-6 mt-4 text-[14px]">
                <div>
                    <label>Card number</label>
                    <input
                        type="tel"
                        placeholder="0000-0000-0000-0000"
                        className={inputClassName}
                    />
                </div>
                <div className="flex gap-2 mt-4">
                    <div className="flex-1">
                        <label>Expiration</label>
                        <input
                            type="tel"
                            placeholder="MM/YY"
                            className={inputClassName}
                        />
                    </div>
                    <div className="flex-1">
                        <label>CVV</label>
                        <input
                            type="password"
                            placeholder="123"
                            className={inputClassName}
                        />
                    </div>
                    <div className="flex-1">
                        <label>ZIP code</label>
                        <input
                            type="tel"
                            placeholder="XXX"
                            className={inputClassName}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`w-[80%] mx-auto mt-6 ${
                    tallScreen ? "absolute translate-x-[-50%]" : ""
                } bottom-6 left-[50%]`}
            >
                <Prototype04Button type={1} caption="SAVE" />
            </div>
        </div>
    );
};

export default AddCard;
