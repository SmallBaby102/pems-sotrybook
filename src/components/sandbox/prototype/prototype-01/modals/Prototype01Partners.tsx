// ############################################################
/**
 * @todo Document this
 */
// ############################################################


import DrawerComponent from '../global/DrawerComponent';
import Zeotis from "../assets/Sponsers/zeotis.png";
import Mars from "../assets/Sponsers/mars.png";
import Ariat from "../assets/Sponsers/ariat.png";
import Mare from "../assets/Sponsers/mare.png";

import { useState, useEffect } from 'react';
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */

const TabButton: React.FC<{onClick: ()=>void, style: object, caption: string}> = ({onClick, style, caption})=>(
    <button
    onClick={onClick}
    className="md:flex-none flex-1 bg-transparent border-none outline-none rounded-full md:rounded-none p-2 md:p-0 md:pb-1 uppercase md:normal-case"
    style={style}
    >
        {caption}
    </button>
)

const TabSection: React.FC<{currentTab: string, onChange: (e:string)=>void}> = ({currentTab, onChange}) => {

    const breakPoint = 768;

    const [innerWidth, setInnerWidth] = useState(0);

    const activeTabHandle = (active: string)=>{
        if(innerWidth > breakPoint){
            if(currentTab === active){
                return ( {
                    color: "#F7074F",
                    borderBottom: "2px solid #F7074F",
                } );
            }else{
                return ( {
                    color: "#122B46",
                    borderBottom: "none"
                } );
            }
        }else{
            if(currentTab === active){
                return ( {
                    color: "#F7074F",
                    backgroundColor: "white",
                    boxShadow: "0 0 10px rgba(0,0,0,.14)",
                } );
            }else{
                return ( {
                    color: "#122B46",
                    backgroundColor: "transparent",
                    boxShadow: "none"
                } );
            }
        }
    }

    useEffect(()=>{
        const setActiveTab = ()=>{
            setInnerWidth(window.innerWidth)
        }
        setActiveTab();
        window.addEventListener("resize", setActiveTab, true);
        return ()=> window.removeEventListener("resize", setActiveTab, true);
    }, []);

    return (
        <div className='overflow-auto scrollbar-hide md:scrollbar-default bg-gray-100 md:bg-transparent rounded-full md:rounded-none mt-4 p-1 md:p-0 text-[15px]'>
            <div className='whitespace-nowrap flex gap-4 '>
                <TabButton 
                    onClick={()=>onChange("1")}
                    style={{
                        ... activeTabHandle("1")
                    }}
                    caption="Headliner"
                />
                <TabButton 
                    onClick={()=>onChange("2")}
                    style={{
                        ... activeTabHandle("2")
                    }}
                    caption="Platinum"
                />
                <TabButton 
                    onClick={()=>onChange("3")}
                    style={{
                        ... activeTabHandle("3")
                    }}
                    caption="Gold"
                />
                <TabButton 
                    onClick={()=>onChange("4")}
                    style={{
                        ... activeTabHandle("4")
                    }}
                    caption="Silver"
                />
                <TabButton 
                    onClick={()=>onChange("5")}
                    style={{
                        ... activeTabHandle("5")
                    }}
                    caption="On-site Vendors"
                />
                <TabButton 
                    onClick={()=>onChange("6")}
                    style={{
                        ... activeTabHandle("6")
                    }}
                    caption="Virtual Vendors"
                />
            </div>
        </div>
    )
}

const Cart: React.FC<{title: string, description: string, profile: string}> = ({title, description, profile}) => (
    <div className='flex gap-2 items-center my-4'>
        <div><img src={profile} alt="profile" className='rounded-full w-[45px]'/></div>
        <div>
            <h3 className='m-0 text-[14px] text-[#122B46]'>{title}</h3>
            <div className='flex gap-1 items-center  text-[14px] font-regular text-[#122B4699]'>
                <div className='whitespace-nowrap text-ellipsis text-overflow-hidden overflow-hidden'>{description}</div>
            </div>
        </div>
    </div>
)

const Prototype01PartnersModal: React.FC<{show: boolean, onHide: ()=>void}> = ({show, onHide}) => {

    const [currentTab, setCurrentTab] = useState("1");
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return ( 
            <DrawerComponent 
                show={show}
                onHide={onHide}
                type="full-modal"
                title="Partners"
                tabComponent={
                    <TabSection 
                        currentTab={currentTab}
                        onChange={e=>setCurrentTab(e)}
                    />
                }
            >
                
                {
                    currentTab === "1" &&
                    <>
                        <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Zeotis}
                        />
                        <Cart
                            title="Micheal Ulasi"
                            description="Red Boy • Middleburg, VA"
                            profile={Mars}
                        />
                        <Cart
                            title="Cristofer"
                            description="Socks • West Palm Beach, FL"
                            profile={Ariat}
                        />
                        <Cart
                            title="David  Silbia"
                            description="Dolly, Whiskers • Marshall, VA"
                            profile={Mare}
                        />
                    </>
                }
                {
                    currentTab === "2" &&
                    <>
                        <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Zeotis}
                        />
                        <Cart
                            title="Micheal Ulasi"
                            description="Red Boy • Middleburg, VA"
                            profile={Mars}
                        />
                    </>
                }
                {
                    currentTab === "3" &&
                    <>
                        <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Zeotis}
                        />
                        <Cart
                            title="Micheal Ulasi"
                            description="Red Boy • Middleburg, VA"
                            profile={Mars}
                        />
                        <Cart
                            title="Cristofer"
                            description="Socks • West Palm Beach, FL"
                            profile={Ariat}
                        />
                        <Cart
                            title="David  Silbia"
                            description="Dolly, Whiskers • Marshall, VA"
                            profile={Mare}
                        />
                    </>
                }
                {
                    currentTab === "4" &&
                    <>
                        <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Zeotis}
                        />
                        <Cart
                            title="Micheal Ulasi"
                            description="Red Boy • Middleburg, VA"
                            profile={Mars}
                        />
                    </>
                }
                {
                    currentTab === "5" &&
                    <>
                        <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Zeotis}
                        />
                        <Cart
                            title="Micheal Ulasi"
                            description="Red Boy • Middleburg, VA"
                            profile={Mars}
                        />
                        <Cart
                            title="Cristofer"
                            description="Socks • West Palm Beach, FL"
                            profile={Ariat}
                        />
                        <Cart
                            title="David  Silbia"
                            description="Dolly, Whiskers • Marshall, VA"
                            profile={Mare}
                        />
                    </>
                }
                {
                    currentTab === "6" &&
                    <>
                        <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Zeotis}
                        />
                        <Cart
                            title="Micheal Ulasi"
                            description="Red Boy • Middleburg, VA"
                            profile={Mars}
                        />
                    </>
                }
            </DrawerComponent>
    );
};

export default Prototype01PartnersModal;
