import Prototype04DrawerComponent from "../global/Prototype04DrawerComponent";
import Prototype04Button from "../global/Prototype04Button";

const CompleteProfileModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent show={show} onHide={onHide} title="Success">
            <div>
                <p className="text-[14px] text-[#3C4B71] mb-10">
                    This horses profile is now sychronized with the USEF
                    database.
                </p>
                <div className="mt-4 w-[90%] mx-auto">
                    <Prototype04Button
                        className="shadow-none"
                        caption="COMPLETE PROFILE"
                        type={1}
                    />
                </div>
            </div>
        </Prototype04DrawerComponent>
    );
};
export default CompleteProfileModal;
