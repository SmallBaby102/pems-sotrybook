// ############################################################
/**
 * @todo Document this
 */
// ############################################################


import {VariableIcon} from "@heroicons/react/outline";

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export interface Prototype28ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Prototype28Component: React.FC<Prototype28ComponentProps> = (props) => {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return (
        <div
            key={props.id}
            className="relative bg-white pt-5 px-4  sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
        >
            <div>
                <dt>
                    <div className="absolute bg-teal-100 rounded-md p-3">
                        <props.icon className="h-6 w-6 text-teal-500" aria-hidden="true"/>
                    </div>
                    <p className="ml-16 pt-4 text-sm font-medium text-gray-500 truncate">{props.name}</p>
                </dt>
                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                </dd>
            </div>
            <div>
                <dd className="pb-6 flex items-baseline justify-between sm:pb-7">
                    <p className="text-3xl text-gray-900">{props.mainMetric.toString()}</p>
                    <p
                        className="ml-2 flex items-baseline bg-violet-200 p-1.5 rounded-md text-xl text-violet-700"
                    >
                        {props.subMetric.toString()}
                    </p>
                </dd>
            </div>

        </div>
    );
};

Prototype28Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: ""
}


export default Prototype28Component;
