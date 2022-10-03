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

const SyncModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Synchronize profile with USEF database"
        >
            <DrawerP>
                By clicking ‘sychronize’, this profile will be sycrhonized with
                the data saved in the USEF database.
            </DrawerP>
            <DrawerP>
                This will delete and replace the ‘Personal Details’, Competition
                Details’ and ‘Competition Numbers’ you have saved.
            </DrawerP>
            <DrawerP>
                To maintain sychronocity, update your profile on the USEF
                website and return here to synchronize the accounts.
            </DrawerP>
            <DrawerP>
                When you click ‘Synchronize’, no Team or Horse data will not be
                affected.
            </DrawerP>
            <ButtonContainer className="mt-6">
                <Prototype04Button caption="SYNCHRONIZE" type={1} />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default SyncModal;
