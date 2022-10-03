import Prototype04Button from "../../prototype-04/global/Prototype04Button";
import Prototype04DrawerComponent from "../../prototype-04/global/Prototype04DrawerComponent";

const DeleteConfirmationModal: React.FC<{
    show: boolean;
    onHide: () => void;
    onDelete: () => void;
}> = ({ show, onHide, onDelete }) => {
    return (
        <Prototype04DrawerComponent title="" show={show} onHide={onHide}>
            <Prototype04Button
                onClick={onDelete}
                caption="DELETE"
                type={1}
                className="w-[80%] mx-auto block"
            />
            <Prototype04Button
                onClick={onHide}
                caption="CANCEL"
                type={3}
                className="mt-4 w-[80%] mx-auto block"
            />
        </Prototype04DrawerComponent>
    );
};
export default DeleteConfirmationModal;
