import { VariableIcon } from "@heroicons/react/outline";
import CheckoutPage from "./CheckoutPage";
import SearchShows from "./SearchShows";

export interface Prototype11ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype11Component: React.FC<Prototype11ComponentProps> = (props) => {
    return (
        <div key={props.id}>
            <CheckoutPage />
            {/* <div className="overflow-auto">
                <SearchShows />
            </div> */}
        </div>
    );
};

Prototype11Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype11Component;
