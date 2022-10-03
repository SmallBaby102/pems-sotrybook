import { VariableIcon } from "@heroicons/react/outline";
import ProductPage from "./ProductPage";
import ProductSinglePage from "./ProductSinglePage";
import NewProduct from "./NewProduct";
import ProductsDesktop from "./desktop-version/index";

export interface Prototype06ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype06Component: React.FC<Prototype06ComponentProps> = (props) => {
    return (
        <div key={props.id}>
            {/* <ProductPage /> */}
            {/* <ProductSinglePage /> */}
            {/* <NewProduct /> */}
            <ProductsDesktop />
        </div>
    );
};

Prototype06Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype06Component;
