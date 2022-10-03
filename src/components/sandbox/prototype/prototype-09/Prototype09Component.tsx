import { VariableIcon } from "@heroicons/react/outline";
import BusinessProfile from "./BusinessProfile/index";

export interface Prototype09ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype09Component: React.FC<Prototype09ComponentProps> = (props) => {
    return (
        <div key={props.id}>
            <BusinessProfile />
        </div>
    );
};

Prototype09Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype09Component;
