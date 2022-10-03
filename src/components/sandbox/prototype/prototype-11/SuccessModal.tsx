import ButtonElement from "../../../elements/buttons/button/ButtonElement";
import Prototype04DrawerComponent from "../prototype-04/global/Prototype04DrawerComponent";
import successIcon from "./assets/success-icon.svg";

export const SuccessModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title=""
            maxWidth={600}
        >
            <div className="text-center p-16">
                <img src={successIcon} alt="success" className="mx-auto" />
                <h1 className="text-[#3C4B71] text-[30px] m-0 mt-10">
                    Success!
                </h1>
                <p className="text-[#3C4B71AA] mt-12 text-xl">
                    Your order was submitted.
                </p>
                <p className="mt-12 text-[#3C4B71AA] text-xl">
                    You will be notified once the show organizer approves your
                    purchase.
                </p>
                <div className="mt-16">
                    <ButtonElement Text="Return to event" onClick={onHide} />
                </div>
            </div>
        </Prototype04DrawerComponent>
    );
};
