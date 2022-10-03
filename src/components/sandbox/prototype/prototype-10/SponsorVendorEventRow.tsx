import boxIcon from "./assets/box-icon.svg";
import greenPlus from "./assets/green-plus.svg";
import greenMinus from "./assets/green-minus.svg";
import VirtualVendorModal from "./modals/VirtualVendorModal";
import { useState } from "react";

const BorderedContainer: React.FC = ({ children }) => (
    <div className="border border-solid border-[3C4B7116] flex gap-2 items-center rounded-lg p-4 text-[#3C4B71CC] ">
        {children}
    </div>
);

const Header: React.FC = ({ children }) => (
    <div className="text-xs font-bold translate-y-2 translate-x-2">
        {children}
    </div>
);

const SponsorVendorEventRow: React.FC<{
    item: string;
    description: string;
    fullDescription: any;
    unitsRemaining: number;
    price: string;
    onChange: (item: number) => void;
    value: number;
    hasHeader?: boolean;
}> = ({
    item,
    description,
    fullDescription,
    unitsRemaining,
    price,
    onChange,
    value,
    hasHeader,
}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <VirtualVendorModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                item={item}
                price={price}
                desciption={fullDescription}
            />
            <div className="grid grid-cols-[20%_calc(35%_-_2.5rem)_10%_10%_25%] gap-2 mb-2 min-w-[900px]">
                {hasHeader && (
                    <>
                        <Header>Item</Header>
                        <Header>Description</Header>
                        <Header>Units remaining</Header>
                        <Header>Price</Header>
                        <Header>Add to card</Header>
                    </>
                )}
                <BorderedContainer>
                    <div className="whitespace-nowrap text-ellipsis overflow-hidden">
                        {item}
                    </div>
                </BorderedContainer>
                <BorderedContainer>
                    <div className="whitespace-nowrap text-ellipsis overflow-hidden">
                        {description}
                    </div>
                    <div
                        onClick={() => setModalShow(true)}
                        className="cursor-pointer"
                    >
                        <img src={boxIcon} alt="icon" />
                    </div>
                </BorderedContainer>
                <BorderedContainer>
                    {unitsRemaining > 0
                        ? unitsRemaining
                        : unitsRemaining === 0
                        ? "Sold"
                        : "Unlimited"}
                </BorderedContainer>
                <BorderedContainer>{price}</BorderedContainer>
                <BorderedContainer>
                    <div className="flex items-center justify-between w-full gap-3">
                        <div className="flex items-center gap-2 min-w-[80px]">
                            <button
                                className="disabled:grayscale"
                                disabled={unitsRemaining === 0 || value === 0}
                                onClick={() => onChange(value - 1)}
                            >
                                <img src={greenMinus} alt="icon" />
                            </button>
                            <div className="w-[30px] text-center text-[#00B6AA]">
                                {value}
                            </div>
                            <button
                                className="disabled:grayscale"
                                disabled={unitsRemaining === 0}
                                onClick={() => onChange(value + 1)}
                            >
                                <img src={greenPlus} alt="icon" />
                            </button>
                        </div>
                        <button
                            className="bg-[#00B6AA50] text-[#00B6AA] px-4 py-3 rounded-full -my-3 -mr-3 disabled:grayscale w-full"
                            disabled={unitsRemaining === 0}
                        >
                            {unitsRemaining === 0 ? "Sold" : "Add to card"}
                        </button>
                    </div>
                </BorderedContainer>
            </div>
        </>
    );
};
export default SponsorVendorEventRow;
