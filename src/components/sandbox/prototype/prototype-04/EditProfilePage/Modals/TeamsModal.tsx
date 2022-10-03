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

const TeamsModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent show={show} onHide={onHide} title="Teams">
            <DrawerP>
                Teams allow you to connect your profile to others.
            </DrawerP>
            <DrawerP>
                Once you select a member to join your team, you can identify
                them as an exhibitor, tainer or coach.
            </DrawerP>
            <DrawerP>
                You can then choose to authorize them to have the power to
                register you for events, manage bills, etc.
            </DrawerP>
            <DrawerP>
                Any action an ‘authorized’ team member takes that results in
                payments, will send you a notification to authorize.
            </DrawerP>
            <DrawerP>
                Owners will be automatically added to your team when you add a
                horse to your profile.
            </DrawerP>
            <ButtonContainer className="mt-[30px]">
                <Prototype04Button caption="CLOSE" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default TeamsModal;
