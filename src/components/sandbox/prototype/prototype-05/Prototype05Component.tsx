import DesktopVersion from "./DesktopVersion";
import EventPage from "./EventPage";
import VendorsAriat from "./VendorsAriat";
import VendorsOnSite from "./VendorsOnSite";
import ExplorePage from "./ExplorePage";
import MarkLocation from "./MarkLocation";

import { VariableIcon } from "@heroicons/react/outline";

export interface Prototype05ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype05Component: React.FC<Prototype05ComponentProps> = (props) => {
    return (
        <div key={props.id}>
            {/* <VendorsOnSite /> */}
            {/* <EventPage /> */}
            {/* <VendorsAriat /> */}
            {/* <ExplorePage /> */}
            {/* {<MarkLocation />} */}
            <DesktopVersion />
        </div>
    );
};
Prototype05Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype05Component;
