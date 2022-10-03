import Zeotis from "./assets/Sponsers/zeotis.png";
import Minus from "./assets/minus-icon.svg";
import Plus from "./assets/plus-icon.svg";
import { useState } from "react";

const Prototype01AccElement : React.FC<{open: boolean, year: string, title: string, info:Array<any>}> = ({open, year,title,info})=>{
    const [isOpen, setIsOpen] = useState(open);
    return (
        <div 
            className="border-gray-300 border-solid border-[1px] rounded-md p-2 mt-2 overflow-hidden"
            style={{
                height: isOpen ? 'auto' : 40
            }}
        >
            <div 
                className="grid grid-cols-[60px_auto_50px] items-center text-[14px] font-bold cursor-pointer"
                onClick={()=>setIsOpen(!isOpen)}
            >
                <div style={{color: isOpen ? "unset" : "#aaa", fontWeight: isOpen ? "unset" : "normal"}}>{year}</div>
                <div style={{color: isOpen ? "unset" : "#aaa", fontWeight: isOpen ? "unset" : "normal"}}>{title}</div>
                <div className="text-right">
                    <img 
                        src={isOpen ? Minus : Plus} 
                        alt="plus"
                        className="ml-auto"
                    />
                </div>
            </div>
            <div className="grid grid-cols-[60px_auto_50px] items-center mt-3">
                <div>&nbsp;</div>
                <div className="pb-2 grid grid-cols-1 md:grid-cols-[55%_15%_15%_15%] items-center border-b-[#eee] border-solid border-[1px] border-transparent">
                    <div className="">
                        <div className="flex items-center gap-4">
                            <img src={info[0]} alt="icon" className="w-[20px] h-[20px] rounded-full drop-shadow-md"/>
                            <p className="m-0 text-[#3C4B7199] text-[12px]">{info[1]}</p>
                        </div>
                        <p className="font-semibold text-[14px]">{info[2]}</p>
                    </div>
                    <div className="text-[#3C4B7199] text-[14px]">Registered: {info[3]}</div>
                    <div className="text-[#3C4B7199] text-[14px]">Division: ${info[4]}</div>
                    <div className="text-[#3C4B7199] text-[14px]">Class: ${info[5]}</div>
                </div>
                <div className="border-b-[#eee] border-solid border-[1px] border-transparent h-full">&nbsp;</div>
            </div>

        </div>
    )
}

const Prototype01PrizeListTabButton : React.FC<{title: string, onClick?: ()=>any, active: boolean}> = ({title, onClick, active})=>(
    <button onClick={onClick} className={`px-4 py-1 rounded-full text-[#122B46] ${active && `bg-gray-100 md:bg-transparent md:text-[#F7074F] md:font-medium md:border-b-2 md:border-[#F7074F] md:border-solid md:rounded-none`}`}>{title}</button>
)

const Prototype01PrizeList : React.FC = ()=>{
    
    const[activeTab, setActiveTab] = useState("1");

    return (
        <div>
            <div className="overflow-auto pb-3 mb-3">
                <div className="flex whitespace-nowrap">
                    <Prototype01PrizeListTabButton 
                        title="Equitation"
                        active={activeTab === "1"}
                        onClick={()=>setActiveTab("1")}
                    />
                    <Prototype01PrizeListTabButton 
                        title="Hunter"
                        active={activeTab === "2"}
                        onClick={()=>setActiveTab("2")}
                    />
                    <Prototype01PrizeListTabButton 
                        title="Classic"
                        active={activeTab === "3"}
                        onClick={()=>setActiveTab("3")}
                    />
                    <Prototype01PrizeListTabButton 
                        title="Derbys"
                        active={activeTab === "4"}
                        onClick={()=>setActiveTab("4")}
                    />
                    <Prototype01PrizeListTabButton 
                        title="Leagues"
                        active={activeTab === "5"}
                        onClick={()=>setActiveTab("5")}
                    />
                    <Prototype01PrizeListTabButton 
                        title="Jumpers"
                        active={activeTab === "6"}
                        onClick={()=>setActiveTab("6")}
                    />
                </div>
            </div>
            <div className="mt-4">
            {
                activeTab === "1" &&
                <div>
                    <Prototype01AccElement 
                        open={false}
                        title="Pony Hunter Breeding"
                        year="1938"
                        info={[
                            Zeotis,
                            "Ariat proudly presents",
                            "Pony Hunter Breeding Yearling",
                            18,
                            175,
                            60
                        ]}
                    />
                    <Prototype01AccElement 
                        open={true}
                        title="Pony Hunter Breeding"
                        year="1938"
                        info={[
                            Zeotis,
                            "Ariat proudly presents",
                            "Pony Hunter Breeding Yearling",
                            18,
                            175,
                            60
                        ]}
                    />
                    <Prototype01AccElement 
                        open={false}
                        title="Pony Hunter Breeding"
                        year="1938"
                        info={[
                            Zeotis,
                            "Ariat proudly presents",
                            "Pony Hunter Breeding Yearling",
                            18,
                            175,
                            60
                        ]}
                    />
                    <Prototype01AccElement 
                        open={false}
                        title="Pony Hunter Breeding"
                        year="1938"
                        info={[
                            Zeotis,
                            "Ariat proudly presents",
                            "Pony Hunter Breeding Yearling",
                            18,
                            175,
                            60
                        ]}
                    />
                </div>
            }
            </div>
        </div>
    )
}
export default Prototype01PrizeList;
