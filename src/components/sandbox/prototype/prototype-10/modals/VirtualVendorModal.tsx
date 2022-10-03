import Prototype04DrawerComponent from "../../prototype-04/global/Prototype04DrawerComponent";
import { useEffect } from "react";
import { createRef } from "react";

const VirtualVendorModal: React.FC<{
    show: boolean;
    onHide: () => void;
    price: string;
    item: string;
    desciption: string;
}> = ({ show, onHide, price, item, desciption }) => {
    const richTextDescription = createRef<HTMLDivElement>();

    useEffect(() => {
        if (show && richTextDescription.current) {
            richTextDescription.current.innerHTML = desciption;
        }
    }, [show]);

    const pElementInlineStyles = `.vendor-modal-rich-text-container p{margin-top:24px; color: #1F4173; font-size: 20px;}`;
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title=""
            maxWidth={600}
        >
            <div className="flex items-center justify-between mr-8">
                <h2 className="m-0 text-xl text-[#1F4173] font-bold">{item}</h2>{" "}
                <div className="text-[#00B6AA] text-xl font-bold">{price}</div>
            </div>
            <div
                ref={richTextDescription}
                className="vendor-modal-rich-text-container mr-8"
            ></div>
            <style>{pElementInlineStyles}</style>
        </Prototype04DrawerComponent>
    );
};

export default VirtualVendorModal;
