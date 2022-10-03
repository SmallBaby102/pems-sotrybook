import { VariableIcon } from "@heroicons/react/outline";
import NewsDesktop from "./desktop-version";
import NewItem from "./NewItem";
import NewsPage from "./NewPage";
import NewsSinglePage from "./NewsSinglePage";
export interface Prototype08ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype08Component: React.FC<Prototype08ComponentProps> = (props) => {
    return (
        <div key={props.id}>
            {/* <NewItem /> */}
            {/* <NewsPage /> */}
            {/* <NewsSinglePage /> */}
            <NewsDesktop />
        </div>
    );
};

Prototype08Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype08Component;
