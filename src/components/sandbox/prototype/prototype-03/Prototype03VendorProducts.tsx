import { useContext, useEffect, useState } from "react";
import { SignupStages } from "./Prototype03ContextApi";

import menuIcon from "./assets/menu.svg";
import plusIcon from "./assets/plus-icon.svg";
import noProducts from "./assets/no-products.svg";

const TabSection: React.FC<{ currentTab: string, onChange: (e: string) => void }> = ({ currentTab, onChange }) => {

    const breakPoint = 1024;

    const [innerWidth, setInnerWidth] = useState(0);

    const activeTabHandle = (active: string) => {
        if (innerWidth > breakPoint) {
            if (currentTab === active) {
                return ({
                    color: "#F7074F",
                    borderBottom: "2px solid #F7074F",
                });
            } else {
                return ({
                    color: "#122B46",
                    borderBottom: "none"
                });
            }
        } else {
            if (currentTab === active) {
                return ({
                    color: "#F7074F",
                    backgroundColor: "white",
                    boxShadow: "0 0 10px rgba(0,0,0,.14)",
                });
            } else {
                return ({
                    color: "#122B46",
                    backgroundColor: "transparent",
                    boxShadow: "none"
                });
            }
        }
    }

    useEffect(() => {
        const setActiveTab = () => {
            setInnerWidth(window.innerWidth)
        }
        setActiveTab();
        window.addEventListener("resize", setActiveTab, true);
        return () => window.removeEventListener("resize", setActiveTab, true);
    }, []);

    return (
        <div className='flex mt-4 gap-2 bg-gray-100 md:bg-transparent rounded-full md:rounded-none p-1 md:p-0'>
            <button
                onClick={() => onChange("1")}
                className="md:flex-none flex-1 bg-transparent border-none outline-none rounded-full md:rounded-none p-2 md:p-0 md:pb-1 uppercase md:normal-case"
                style={{
                    ...activeTabHandle("1")
                }}
            >
                DEALS
            </button>
            <button
                onClick={() => onChange("2")}
                className="md:flex-none flex-1 bg-transparent border-none outline-none rounded-full md:rounded-none p-2 md:p-0 md:pb-1 uppercase md:normal-case"
                style={{
                    ...activeTabHandle("2")
                }}
            >
                PRODUCTS
            </button>
            <button
                onClick={() => onChange("3")}
                className="md:flex-none flex-1 bg-transparent border-none outline-none rounded-full md:rounded-none p-2 md:p-0 md:pb-1 uppercase md:normal-case"
                style={{
                    ...activeTabHandle("3")
                }}
            >
                DRAFTS
            </button>
        </div>
    )
}

const Prototype03VendorProducts: React.FC = () => {

    const [currentTab, setCurrentTab] = useState("2");

    return (
        <div>
            <div className="flex items-center gap-3">
                <button className="mt-[-4px]"><img src={menuIcon} alt="menu" /></button>
                <div className="flex-1 text-[24px] font-bold">Products</div>
                <button><img src={plusIcon} alt="plus" /></button>
            </div>
            <TabSection currentTab={currentTab} onChange={e => setCurrentTab(e)} />
            {
                currentTab === "2" && (
                    <div className="text-center">
                        <p className="text-[14px] mt-[30%]">You have no products.</p>
                        <img src={noProducts} alt="No Products" className="mx-auto mt-10" />
                    </div>
                )
            }
        </div>
    );
};

export default Prototype03VendorProducts;