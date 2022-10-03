import { VariableIcon } from "@heroicons/react/outline";
import TeamPage from "./TeamPage";
import TeamDesktop from "./TeamDesktop";
export interface Prototype02ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype02Component: React.FC<Prototype02ComponentProps> = (props) => {
    return (
        <div key={props.id}>
            <TeamPage />
            {/* <TeamDesktop /> */}
        </div>
    );
};

Prototype02Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype02Component;
