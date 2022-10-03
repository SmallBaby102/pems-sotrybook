import Prototype04DrawerComponent from "../../../prototype-04/global/Prototype04DrawerComponent";
import BusinessProfile from "../../../prototype-09/BusinessProfile";

const EditProfileModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Edit profile"
            fullMinHeight={true}
        >
            <BusinessProfile></BusinessProfile>
        </Prototype04DrawerComponent>
    );
};
export default EditProfileModal;
