import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";

const DrawerP: React.FC<{ children: string }> = ({ children }) => (
    <p className="mt-4 text-[#122B4680]">{children}</p>
);

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const RenewModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Renew USEF membership"
        >
            <DrawerP>Your USEF memebrship has expired.</DrawerP>
            <DrawerP>Click the button below to renew your membership.</DrawerP>
            <DrawerP>
                Once you renew your memebrship through the USEF website, your
                Pegasus profile status will update immediately.
            </DrawerP>
            <ButtonContainer className="mt-[100px]">
                <Prototype04Button caption="RENIEW" type={1} />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default RenewModal;
