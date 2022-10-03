// ############################################################
/**
 * @todo Document this
 */
// ############################################################


import DrawerComponent from '../global/DrawerComponent';
import Profile1 from "../assets/Staff/profile-pic-1.png";
import Profile2 from "../assets/Staff/profile-pic-2.png";
import Profile3 from "../assets/Staff/profile-pic-3.png";
import Profile4 from "../assets/Staff/profile-pic-4.png";
import Profile5 from "../assets/Staff/profile-pic-5.png";

import Horse from "../assets/horse.svg";
import { useState, useEffect } from 'react';
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */

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
    <div className='flex mt-4 gap-2 bg-gray-100 md:bg-transparent rounded-full md:rounded-none p-1 md:p-0'>
        <button 
            onClick={()=>onChange("1")}
            className="md:flex-none flex-1 bg-transparent border-none outline-none rounded-full md:rounded-none p-2 md:p-0 md:pb-1 uppercase md:normal-case"
            style={{
                ... activeTabHandle("1")
            }}
        >
            <span className='md:hidden'>13 </span>Registered
        </button>
        <button
            onClick={()=>onChange("2")}
            className="md:flex-none flex-1 bg-transparent border-none outline-none rounded-full md:rounded-none p-2 md:p-0 md:pb-1 uppercase md:normal-case"
            style={{
                ... activeTabHandle("2")
            }}
        >
            <span className='md:hidden'>16 </span>Wait List
        </button>
    </div>
    )
}

const Cart: React.FC<{title: string, description: string, profile: string}> = ({title, description, profile}) => (
    <div className='flex gap-2 items-center my-4'>
        <div><img src={profile} alt="profile" className='rounded-full'/></div>
        <div>
            <h3 className='m-0 text-[14px] font-regular text-[#122B46]'>{title}</h3>
            <div className='flex gap-1 items-center  text-[14px] font-regular text-[#122B4699]'>
                <img src={Horse} alt="horse" />
                <div className='whitespace-nowrap text-ellipsis text-overflow-hidden overflow-hidden'>{description}</div>
            </div>
        </div>
    </div>
)

const Prototype01ExhibitorsModal: React.FC<{show: boolean, onHide: ()=>void}> = ({show, onHide}) => {

    const [currentTab, setCurrentTab] = useState("1");
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return ( 
            <DrawerComponent 
                show={show}
                onHide={onHide}
                type="full-modal"
                title="Registered exhibitors"
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
                            profile={Profile1}
                        />
                        <Cart
                            title="Micheal Ulasi"
                            description="Red Boy • Middleburg, VA"
                            profile={Profile2}
                        />
                        <Cart
                            title="Cristofer"
                            description="Socks • West Palm Beach, FL"
                            profile={Profile3}
                        />
                        <Cart
                            title="David  Silbia"
                            description="Dolly, Whiskers • Marshall, VA"
                            profile={Profile4}
                        />
                        <Cart
                            title="Ashfak Sayem"
                            description="Tucker, Janice, Socks • Lexington, KT"
                            profile={Profile5}
                        />
                        <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Profile1}
                        />
                        <Cart
                            title="Micheal Ulasi"
                            description="Red Boy • Middleburg, VA"
                            profile={Profile2}
                        />
                        <Cart
                            title="Cristofer"
                            description="Socks • West Palm Beach, FL"
                            profile={Profile3}
                        />
                        <Cart
                            title="David  Silbia"
                            description="Dolly, Whiskers • Marshall, VA"
                            profile={Profile4}
                        />
                        <Cart
                            title="Ashfak Sayem"
                            description="Tucker, Janice, Socks • Lexington, KT"
                            profile={Profile5}
                        />
                         <Cart
                            title="Cristofer"
                            description="Socks • West Palm Beach, FL"
                            profile={Profile3}
                        />
                        <Cart
                            title="David  Silbia"
                            description="Dolly, Whiskers • Marshall, VA"
                            profile={Profile4}
                        />
                        <Cart
                            title="Ashfak Sayem"
                            description="Tucker, Janice, Socks • Lexington, KT"
                            profile={Profile5}
                        />
                    </>
                }
                {
                    currentTab === "2" &&
                    <>
                         <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Profile1}
                        />
                         <Cart
                            title="Alex Lee"
                            description="Impulsive, Buttons • Oakland, CA"
                            profile={Profile1}
                        />
                    </>
                }
            </DrawerComponent>
    );
};

export default Prototype01ExhibitorsModal;
