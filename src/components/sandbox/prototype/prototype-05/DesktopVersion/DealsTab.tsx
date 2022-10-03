import { useState, useEffect } from "react";
import { query, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../../../../utils/firebase";
import percentIcon from "./../assets/percent-icon.svg";
import captureIcon from "./../assets/capture-icon.svg";
import dealIcon1 from "./../assets/deal-icon-1.png";
import dealIcon2 from "./../assets/deal-icon-2.png";
import dealIcon3 from "./../assets/deal-icon-3.png";
import DealDetailModal from "./Modals/DealDetailModal";
import plusIcon from "./../assets/plus-icon-color.svg";

const DealsCard: React.FC<{
    icon: string;
    title: string;
    description: string;
    onMore?: () => void;
    onCapture?: () => void;
    price: string;
    offPrice: string;
    tag: string;
}> = ({
    icon,
    title,
    description,
    onMore,
    onCapture,
    price,
    offPrice,
    tag,
}) => {
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
                        <div className="text-[20px] text-[#979797] line-through">
                            {offPrice}
                        </div>
                        <div className="text-[30px] text-[#27C499] font-semibold">
                            {price}
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={percentIcon} alt="percent" />
                            <span className="text-[#27C499] text-[20px]">
                                {tag}
                            </span>
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

const DealsTab: React.FC = () => {
    const [dealDetailModalShow, setDealDetailModalShow] = useState(false);
    const [values, setValues] = useState([
        {
            icon: dealIcon1,
            title:"Casual dual tone shirt...perfect for rigin on hot days!",
            description:"With beautiful stitching and a traditional R toe, these are classic cowboy through and through. Their comfort and versatility make them a go-to. Bonus: StretchFit makes them easier to pull on and expands to fit a wide range of calves.",
            price:"$180",
            offPrice:"$145",
            tag:"SHOW25"
        },
        {
            icon: dealIcon2,
            title:"Miramar Cardigan",
            description:"Snuggled up on the couch with your favorite book or out and about town, this long cardigan is irresistibly cozy. The beautiful open pointelle design is made from an ethically sourced wool blend in a neutral shade that goes with everything.",
            price:"$150",
            offPrice:"$125",
            tag:"SHOW18"
        },
        {
            icon:dealIcon3,
            title:"Toughy VentTek 360° Western Boot",
            description:"Like air conditioning for your feet. VentTEK™ panels boost airflow, while the self-cooling lining keeps you comfortable from toe to calf. It makes riding, walking, or working in the heat no big deal.",
            price:"$240",
            offPrice:"$190",
            tag:"SHOW10"
        }
    ])
    useEffect(() => {
        try {
            setDoc(doc(db, "prototype_05", "deals"), {data: values});
          } catch (err) {
                console.log(err)
          }
    }, [])
    return (
        <div>
            <DealDetailModal
                show={dealDetailModalShow}
                onHide={() => setDealDetailModalShow(false)}
            />
            {
                values?.length && values.map((item, index) => {
                    return  <DealsCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                offPrice={item.offPrice}
                                tag={item.tag}
                                onMore={() => setDealDetailModalShow(true)}
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
export default DealsTab;
