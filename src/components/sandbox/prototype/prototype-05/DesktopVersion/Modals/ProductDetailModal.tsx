import Prototype04DrawerComponent from "../../../prototype-04/global/Prototype04DrawerComponent";
import productIcon1 from "./../../assets/product-icon-1.png";
import productIcon2 from "./../../assets/product-icon-1-2.png";
import productIcon3 from "./../../assets/product-icon-1-3.png";
import productIcon4 from "./../../assets/product-icon-1-4.png";
import Prototype04Button from "./../../../prototype-04/global/Prototype04Button";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[50%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const P: React.FC = ({ children }) => (
    <p className="text-[#3C4B71] opacity-70 leading-[25px] mt-4 text-sm">
        {children}
    </p>
);

const ProductDetailModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Beth Cross signing at Ariat tent today!"
            fullMinHeight={true}
            maxWidth={650}
        >
            <div className="flex gap-6 p-4 md:flex-row flex-col">
                <div className="min-w-[160px] flex md:flex-col flex-row gap-6">
                    <div className="w-[160px] h-[160px] overflow-hidden rounded-xl">
                        <img
                            src={productIcon1}
                            alt="news icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[160px] h-[160px] overflow-hidden rounded-xl">
                        <img
                            src={productIcon2}
                            alt="news icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[160px] h-[160px] overflow-hidden rounded-xl">
                        <img
                            src={productIcon3}
                            alt="news icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[160px] h-[160px] overflow-hidden rounded-xl">
                        <img
                            src={productIcon4}
                            alt="news icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div>
                    <div className="mt-4 flex gap-3 items-center">
                        <div className="text-[30px] text-[#27C499] font-semibold flex-1">
                            $125
                        </div>
                    </div>
                    <P>
                        No summer wardrobe is complete without a flowy,
                        easy-to-throw-on dress. This one comes in our pretty
                        bucking-horse print (also available in pant form).
                    </P>
                    <ul className="text-[#3C4B71] opacity-70 leading-[25px] text-sm mt-8 list-disc">
                        <li>Back seam detail</li>
                        <li>Adjustable straps</li>
                        <li>00% Rayon</li>
                        <li>Printed rayon viscose</li>
                        <li>Imported</li>
                    </ul>
                </div>
            </div>
            <ButtonContainer className="mt-[20px]">
                <Prototype04Button caption="MORE" type={1} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};
export default ProductDetailModal;
