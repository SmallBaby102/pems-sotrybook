import { useState, useEffect } from "react";
import { query, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

import { db } from "../../../../../utils/firebase";

import captureIcon from "./../assets/capture-icon.svg";
import productIcon1 from "./../assets/product-icon-1.png";
import productIcon2 from "./../assets/product-icon-2.png";
import productIcon3 from "./../assets/product-icon-3.png";
import ProductDetailModal from "./Modals/ProductDetailModal";
import plusIcon from "./../assets/plus-icon-color.svg";

const ProductCard: React.FC<{
    icon: string;
    title: string;
    description: string;
    onMore?: () => void;
    onCapture?: () => void;
    price: string;
}> = ({ icon, title, description, onMore, onCapture, price }) => {
    return (
        <div
            className="flex gap-4 border border-solid border-[#D3DAEE] rounded-xl p-4 mt-3 cursor-pointer md:flex-row flex-col"
            onClick={onMore}
        >
            <div className="flex items-center gap-4 flex-1 md:flex-row flex-col">
                <div className="w-[160px] min-w-[160px] h-[160px] overflow-hidden rounded-xl">
                    <img
                        src={icon}
                        alt="icon"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-[20px] text-[#122B46] mt-0">{title}</h2>
                    <p className="text-[#122B46] opacity-70">{description}</p>
                    <div className="mt-4 flex gap-3 items-center">
                        <div className="text-[30px] text-[#27C499] font-semibold">
                            {price}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={onCapture}>
                    <img src={captureIcon} alt="icon" />
                </button>
            </div>
        </div>
    );
};

const ProductsTab: React.FC = () => {
    const [productDetailModalShow, setProductDetailModalShow] = useState(false);
    const [values, setValues] = useState([
        {
            icon:productIcon1,
            title:"Laso dress",
            description:"No summer wardrobe is complete without a flowy, easy-to-throw-on dress. This one comes in our pretty bucking-horse print (also available in pant form).",
            price:"$45"
        },
        {
            icon:productIcon2,
            title:"Rebar Perfect Rise Work Flex Riveter Slim Leg Jean",
            description:"Your life demands flexibility. Demand the same of your jeans. Whether you're feeding horses, mucking stalls or running errands, our perfect-rise jeans give you the coverage you need while leaving you free to bend, stretch and climb.",
            price:"$78"
        },
        {
            icon:productIcon3,
            title:"Wrinkle Free Slater Fitted Shirt",
            description:"Look your best and iron less. Classic, comfortable and long-lasting, our wrinkle-free button-ups look sharp and stay that way.",
            price:"$240"
        }
    ])
    useEffect(() => {
        try {
            setDoc(doc(db, "prototype_05", "products"), {data: values});
          } catch (err) {
                console.log(err)
          }
    }, [])
    return (
        <div>
            <ProductDetailModal
                show={productDetailModalShow}
                onHide={() => setProductDetailModalShow(false)}
            />
             {
                values?.length && values.map((item, index) => {
                    return  <ProductCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                onMore={() => setProductDetailModalShow(true)}
                            />
                })
            }
            <div className="mt-4 text-center">
                <button>
                    <img src={plusIcon} alt="add" />
                </button>
            </div>
        </div>
    );
};
export default ProductsTab;
