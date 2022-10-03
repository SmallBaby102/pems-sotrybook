import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";

const DrawerP: React.FC<{ children: string }> = ({ children }) => (
    <p className="mt-4 text-[#122B4680]">{children}</p>
);

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[50%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const RenewModalDesktop: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Renew USEF membership"
            maxWidth={650}
        >
            <DrawerP>Your USEF memebrship has expired.</DrawerP>
            <DrawerP>
                Clicking the button below will open the USEF memership portal in
                your browser.
            </DrawerP>
            <DrawerP>
                Sign in and renew your membership through the USEF website.
            </DrawerP>
            <DrawerP>
                Once complete, return here and click ‘Sync profile’ to update
                your profile.
            </DrawerP>
            <ButtonContainer className="mt-[300px]">
                <Prototype04Button caption="RENIEW" type={1} />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default RenewModalDesktop;
