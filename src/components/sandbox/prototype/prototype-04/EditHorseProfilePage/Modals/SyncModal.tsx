import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";

const DrawerP: React.FC<{ children: any }> = ({ children }) => (
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
                This will delete and replace the ‘Horse Details’ and
                ‘Competition Numbers’ you have saved.
            </DrawerP>
            <DrawerP>
                To maintain sychronocity, update this horses data on the{" "}
                <a
                    href="https://members.usef.org"
                    target="_blank"
                    className="text-inherit font-bold underline"
                >
                    USEF website
                </a>{" "}
                and return here to sychronze the accounts.
            </DrawerP>
            <DrawerP>
                When you click ‘Synchronize’, all Coggins, Team and Lineage data
                will not be affected.
            </DrawerP>
            <ButtonContainer className="mt-6">
                <Prototype04Button caption="SYNCHRONIZE" type={1} />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default SyncModal;
