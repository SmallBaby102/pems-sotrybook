import { VariableIcon } from "@heroicons/react/outline";
import EditOrganizationProfilePage from "./EditOrganizationProfilePage";
import AddCard from "./EditOrganizationProfilePage/AddCard";
import CardSettings from "./EditOrganizationProfilePage/CardSettings";
import ManagePassword from "./EditOrganizationProfilePage/ManagePassword";
import Notifications from "./EditOrganizationProfilePage/Notifications";

export interface Prototype12ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype12Component: React.FC<Prototype12ComponentProps> = (props) => {
    return (
        <div key={props.id}>
            <EditOrganizationProfilePage />
            {/* <CardSettings /> */}
            {/* <AddCard /> */}
            {/* <ManagePassword /> */}
            {/* <Notifications /> */}
        </div>
    );
};

Prototype12Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype12Component;
