import backIcon from "./assets/back-icon.svg";

import deleteIcon from "./assets/delete-icon.svg";
import Prototype01SponsersVendors from "./Prototype01SponsersVendors";
import PrimaryButton from "../prototype-10/global/PrimaryButton";
import vendorIcon from "./assets/vendor-icon.svg";
import prizeIcon from "./assets/prize-list-icon.svg";
import eventIcon from "./assets/event-icon.svg";
import totalIcon from "./assets/total-icon.svg";
import Prototype04Input from "../prototype-04/global/Prototype04Input";
import countryIcon from "./assets/country-icon.svg";
import stateIcon from "./assets/state-icon.svg";
import zipIcon from "./assets/zip-icon.svg";
import cardIcon from "./assets/card-icon.svg";
import appleIcon from "./assets/apple-icon.svg";
import Prototype04Button from "../prototype-04/global/Prototype04Button";
import { SuccessModal } from "./SuccessModal";
import { useState } from "react";

const BorderedContainer: React.FC<{
    children: any;
    type?: string;
}> = ({ children, type }) => (
    <div
        className={`border border-solid border-[#3C4B7120] ${
            type === "total"
                ? "!border-none bg-[#00B6AA19] !text-[#00B6AA] font-bold"
                : ""
        } ${
            type === "subtotal" ? "!border-[#00B6AA] !text-[#00B6AA]" : ""
        } text-[#3C4B71AB] rounded-md px-4 py-3 whitespace-nowrap text-ellipsis overflow-hidden`}
    >
        {children}
    </div>
);

const BasketRow: React.FC<{
    title: string;
    price: string;
    onDelete?: () => void;
    type: string;
}> = ({ title, price, onDelete, type }) => (
    <div className="grid grid-cols-[60%_calc(40%_-_50px)_20px] gap-2 mb-2 items-center">
        <BorderedContainer type={type}>
            <div className="grid grid-cols-[30px_calc(100%_-_30px)]">
                <span>
                    <img
                        src={
                            {
                                vendor: vendorIcon,
                                prize: prizeIcon,
                                event: eventIcon,
                                total: totalIcon,
                                subtotal: totalIcon,
                            }[type]
                        }
                        alt="icon"
                    />
                </span>
                <span className="whitespace-nowrap text-ellipsis overflow-hidden">
                    {title}
                </span>
            </div>
        </BorderedContainer>
        <BorderedContainer type={type}>{price}</BorderedContainer>
        {onDelete && (
            <button onClick={onDelete}>
                <img src={deleteIcon} alt="delete" />
            </button>
        )}
    </div>
);

const GreenTitle: React.FC = ({ children }) => (
    <div className="text-[#00B6AA] mt-4">{children}</div>
);

const BlueButton: React.FC<{
    caption: string;
    icon: string;
    selected: boolean;
}> = ({ caption, icon, selected }) => (
    <button
        className={`relative h-[44px] bg-[#3C4B7119] text-[3C4B71] text-sm rounded-lg w-full ${
            selected ? "bg-[#3C4B71] text-white" : ""
        }`}
    >
        <img
            src={icon}
            alt="icon"
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                selected ? "brightness-0 invert" : ""
            }`}
        />
        {caption}
    </button>
);

const CheckoutPage: React.FC = () => {
    const [successModalShow, setSuccessModalShow] = useState(false);

    return (
        <div className="bg-[#F6F7FB] overflow-hidden min-h-screen">
            <SuccessModal
                show={successModalShow}
                onHide={() => setSuccessModalShow(false)}
            />
            <button className="flex gap-2 items-center text-2xl font-bold my-4">
                <img src={backIcon} alt="back" />
                <span>Back</span>
            </button>
            <div className="relative bg-white p-6 shadow rounded-2xl overflow-hidden">
                <h1 className="m-0 text-[30px] text-[#00B6AA]">Checkout</h1>
                <div className="grid grid-cols-[3fr_2fr] gap-10 items-start">
                    <div>
                        <GreenTitle>Event</GreenTitle>
                        <BasketRow
                            title="Title sponsor"
                            price="$30,000"
                            onDelete={() => {}}
                            type="event"
                        />
                        <BasketRow
                            title="Medium size sign"
                            price="$500"
                            onDelete={() => {}}
                            type="event"
                        />
                        <BasketRow
                            title="Medium size sign"
                            price="$500"
                            onDelete={() => {}}
                            type="event"
                        />
                        <BasketRow
                            title="Small sign"
                            price="$200"
                            onDelete={() => {}}
                            type="event"
                        />
                        <GreenTitle>Prize List</GreenTitle>
                        <BasketRow
                            title="Pony Hunter Breeding 2 Y..."
                            price="$175"
                            onDelete={() => {}}
                            type="prize"
                        />
                        <BasketRow
                            title="Performance Hunter 3’6”"
                            price="$500"
                            onDelete={() => {}}
                            type="prize"
                        />
                        <GreenTitle>Vendor</GreenTitle>
                        <BasketRow
                            title="Virtual vendor"
                            price="$175"
                            onDelete={() => {}}
                            type="vendor"
                        />
                        <BasketRow
                            title="Large tent"
                            price="$20000"
                            onDelete={() => {}}
                            type="vendor"
                        />
                        <BasketRow
                            title="Coffee stand at entranc..."
                            price="$2500"
                            onDelete={() => {}}
                            type="vendor"
                        />
                        <div className="mt-10 pt-10 border-t border-t-solid border-t-gray-300">
                            <BasketRow
                                title="Cart total"
                                price="$36,975"
                                type="subtotal"
                            />
                            <BasketRow
                                title="State tax"
                                price="$2,773"
                                type="subtotal"
                            />
                            <BasketRow
                                title="Total"
                                price="$39,748"
                                type="total"
                            />
                        </div>
                        <div className="mt-10 pt-6 border-t border-t-solid border-t-gray-300">
                            <div className="text-[#00B6AA]">
                                Billing address
                            </div>
                            <div className="flex gap-3 mr-12 mt-6">
                                <Prototype04Input
                                    type="select"
                                    placeholder="Country"
                                    value={[
                                        { name: "Country" },
                                        { name: "USA" },
                                        { name: "Canada" },
                                    ]}
                                    icon={countryIcon}
                                />
                                <Prototype04Input
                                    type="select"
                                    placeholder="State"
                                    value={[
                                        { name: "State" },
                                        { name: "State 1" },
                                        { name: "State 2" },
                                    ]}
                                    icon={stateIcon}
                                />
                                <Prototype04Input
                                    type="text"
                                    placeholder="Zip"
                                    value=""
                                    icon={zipIcon}
                                />
                            </div>
                        </div>
                        <div className="mt-10 pt-6 border-t border-t-solid border-t-gray-300">
                            <div className="text-[#00B6AA]">
                                Payment details
                            </div>
                            <div className="flex gap-3 mr-12 mt-6">
                                <BlueButton
                                    caption="Card on file"
                                    selected={false}
                                    icon={cardIcon}
                                />
                                <BlueButton
                                    caption="New Card"
                                    selected={true}
                                    icon={cardIcon}
                                />
                                <BlueButton
                                    caption="Apple Pay"
                                    selected={false}
                                    icon={appleIcon}
                                />
                            </div>
                            <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 mr-12 mt-6">
                                <Prototype04Input
                                    type="text"
                                    placeholder="Card number"
                                    value=""
                                    icon={cardIcon}
                                />
                                <Prototype04Input
                                    type="text"
                                    placeholder="MM/YY"
                                    value=""
                                />
                                <Prototype04Input
                                    type="text"
                                    placeholder="CVC"
                                    value=""
                                />
                                <Prototype04Button
                                    caption="PAY"
                                    type={1}
                                    className="mt-6 col-span-3"
                                    onClick={() => setSuccessModalShow(true)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="shadow-[0px_4px_20px_3px_rgba(0,0,0,0.25)] rounded-3xl p-6">
                        <Prototype01SponsersVendors />
                        <PrimaryButton
                            caption="MORE"
                            className="m-auto block mt-6 w-full"
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
