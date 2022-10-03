import Prototype04DrawerComponent from "../../../prototype-04/global/Prototype04DrawerComponent";
import signOutIcon from "./../../assets/sign-out.svg";
import Prototype04Button from "./../../../prototype-04/global/Prototype04Button";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const SignoutModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent show={show} onHide={onHide} title="">
            <ButtonContainer className="mt-[10px]">
                <Prototype04Button
                    caption="SIGN OUT"
                    type={1}
                    icon={signOutIcon}
                />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default SignoutModal;
