import Prototype04DrawerComponent from "../../../prototype-04/global/Prototype04DrawerComponent";
import Prototype04Button from "./../../../prototype-04/global/Prototype04Button";

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

const RenewSafeSportModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Renew SafeSport Training"
        >
            <DrawerP>Your SafeSport training status has expired.</DrawerP>
            <DrawerP>
                Click the button below to login into your USEF profile and
                complete your training.
            </DrawerP>
            <DrawerP>
                Once you complete the training, your status will automatically
                update in your Pegasus profile.
            </DrawerP>
            <ButtonContainer className="mt-[100px]">
                <Prototype04Button caption="RENIEW" type={1} />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default RenewSafeSportModal;
