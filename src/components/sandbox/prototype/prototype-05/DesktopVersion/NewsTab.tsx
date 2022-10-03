import { useState, useEffect } from "react";
import { query, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

import { db } from "../../../../../utils/firebase";

import captureIcon from "./../assets/capture-icon.svg";
import newsIcon1 from "./../assets/news-icon-1.png";
import newsIcon2 from "./../assets/news-icon-2.png";
import newsIcon3 from "./../assets/news-icon-3.png";
import plusIcon from "./../assets/plus-icon-color.svg";
import NewsDetailModal from "./Modals/NewsDetailModal";
interface InitValue {
    icon: string;
    title: string;
    description: string;
    body: string;
    time: string;
  }
  
const NewsCard: React.FC<{
    icon: string;
    title: string;
    description: string;
    body: string;
    time: string;
    onMore?: () => void;
    onCapture?: () => void;
}> = ({ icon, title, description, body, time, onMore, onCapture }) => {
    return (
        <div
            onClick={onMore}
            className="cursor-pointer flex gap-4 border border-solid border-[#D3DAEE] rounded-xl p-4 mt-3 md:flex-row flex-col"
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
                    <p className="text-[#122B46] opacity-70 mt-3">
                        {body}...
                        <button className="underline">More</button>
                    </p>
                    <div className="text-[#122B46] text-xs mt-4">
                        last updated: {time}
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

const NewsTab: React.FC = () => {
    const [newsDetailModalShow, setNewsDetailModalShow] = useState<boolean>(false);
    const [values, setValues] = useState<InitValue[]>([])
    useEffect(() => {
        const initValue = async () => {
            try {
                const docRef = doc(db, "prototype_05", "news");
                const docSnap = await getDoc(docRef);
    
                if (docSnap.exists()) {
                    const snapshotVal = docSnap.data();
                    setValues(snapshotVal.data);
                    console.log("news", snapshotVal, "::", newsIcon1, ":", newsIcon2, ":", newsIcon3)
                }
              } catch (err) {
                    console.log(err)
              }
        }
        initValue();
        
    }, [])
    return (
        <div>
            <NewsDetailModal
                show={newsDetailModalShow}
                onHide={() => setNewsDetailModalShow(false)}
            />
            {
                values && values.length && values.map((item, index) => {
                    return <NewsCard
                                key = {index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                body={item.body}
                                time={item.time}
                                onMore={() => setNewsDetailModalShow(true)}
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
export default NewsTab;
