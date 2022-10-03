import Prototype04Button from "./../../global/Prototype04Button";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const DrawerP: React.FC<{ children: any }> = ({ children }) => (
    <p className="mt-4 text-[#122B4680]">{children}</p>
);

const ZoneHelpModal: React.FC<{
    show: boolean;
    onHide: () => void;
}> = ({ show, onHide }) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Select zone"
            maxWidth={640}
        >
            <div className="pr-2 max-h-[calc(100vh_-_250px)] overflow-auto">
                <DrawerP>
                    Zones are used by governing bodies to award points.
                </DrawerP>
                <DrawerP>
                    Riders and Owners register their zone with the governing
                    bodies based on their residential address.
                </DrawerP>
                <DrawerP>Horses do not register a zone.</DrawerP>
                <DrawerP>
                    Instead, horses receive the zone desingated to either their
                    Rider or their Owner.
                </DrawerP>
                <DrawerP>
                    The zone desigantion horses receive depends on the
                    discipline.
                </DrawerP>
                <DrawerP>
                    Select a zone for this horse based on the below rules:
                </DrawerP>
                <ul>
                    <li>
                        <DrawerP>
                            <b>Dressage.</b> Horse zone equal to Owners zone.
                        </DrawerP>
                    </li>
                    <li>
                        <DrawerP>
                            <b>Equitation.</b> Horses zone equal to Riders zone.
                        </DrawerP>
                    </li>
                    <li>
                        <DrawerP>
                            <b>Eventing.</b> Horse zone equal to Owners zone.
                        </DrawerP>
                    </li>
                    <li>
                        <DrawerP>
                            <b>Hunter.</b> Horses zone equal to Owners zone.
                        </DrawerP>
                    </li>
                    <li>
                        <DrawerP>
                            <b>Jumper.</b> Horses zone equal to Owners zone.
                        </DrawerP>
                    </li>
                </ul>
            </div>
            <ButtonContainer className="mt-2">
                <Prototype04Button caption="CANCEL" type={2} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default ZoneHelpModal;
