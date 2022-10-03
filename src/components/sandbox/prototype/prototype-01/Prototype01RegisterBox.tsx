import License from "./assets/RegisterBox/license.svg";
import CloseDate from "./assets/RegisterBox/close-date.svg";
import Location from "./assets/RegisterBox/location.svg";
import Map from "./assets/RegisterBox/map.svg";
import Store from "./assets/RegisterBox/store.svg";
import Organizer from "./assets/RegisterBox/organizer.png";
import ProfilePic1 from "./assets/RegisterBox/profile-pic-1.png";
import ProfilePic2 from "./assets/RegisterBox/profile-pic-2.png";
import ProfilePic3 from "./assets/RegisterBox/profile-pic-3.png";




const RegisterBoxRow : React.FC<{icon:any, header:string, desc:string, viewLink?: string}> = ({icon, header, desc, viewLink})=>(
    <div className="flex gap-6 items-center">
        <div className="w-[35px] h-[35px] md:w-[48px] md:h-[48px] bg-[#fee6ed] rounded-md flex items-center justify-center">
            <img src={icon} alt="Icon" className="w-[70%]"/>
        </div>
        <div className="text-[#3C4B71] max-w-[calc(100%_-_115px)] md:max-w-[calc(100%_-_140px)]">
            <h2 className="m-0 text-[14px] md:text-[16px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">{header}</h2>
            <div className="flex items-center gap-2 max-w-full">
                <p className="m-0 text-[12px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                    {desc}
                </p>
                {
                    viewLink &&
                    <a href={viewLink} target="_blank" className="text-[12px] bg-[#fee6ed] rounded-full px-3 py-0 text-[#F7074F]">View</a>
                }
            </div>
            
        </div>
    </div>
);


const Prototype01RegisterBox : React.FC<{exhibitorsModal?: ()=>void}> = ({exhibitorsModal})=>{
    return (
        <div className="flex flex-col gap-6">
            <RegisterBoxRow 
                icon={License}
                header="Hunter Jumper, Grand Prix"
                desc="Licensed Competition"
                viewLink="https://google.com"
            />
            <RegisterBoxRow 
                icon={CloseDate}
                header="December 14-17th, 2022"
                desc="Registrations close: December 2nd, 2022"
            />
            <RegisterBoxRow 
                icon={Location}
                header="Palm Beach Equestrian Center"
                desc="Wellington, FL"
            />
            <RegisterBoxRow 
                icon={Map}
                header="Course Map"
                desc="Draft"
                viewLink="https://google.com"
            />
            <RegisterBoxRow 
                icon={Store}
                header="Accepting Partners"
                desc="Sponsors, Vendors, Nearbye"
                viewLink="https://google.com"
            />
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[35px] h-[35px] md:w-[48px] md:h-[48px]">
                    <img src={Organizer} alt="Icon" className="w-[100%]"/>
                </div>
                <div className="text-[#3C4B71] max-w-[calc(100%_-_115px)] md:max-w-[calc(100%_-_140px)]">
                    <h2 className="m-0 text-[14px] md:text-[16px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                        Winter Equestrian Festival                    
                    </h2>
                    <div className="flex items-center gap-2 max-w-full">
                        <p className="m-0 text-[12px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                            Organizer
                        </p>
                        {
                            <a href="https://google.com" target="_blank" className="text-[12px] bg-[#fee6ed] rounded-full px-3 py-0 text-[#F7074F]">View</a>
                        }
                    </div>
                    
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center">
                    <img src={ProfilePic1} alt="Icon" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] rounded-full border-2 border-solid border-white"/>
                    <img src={ProfilePic2} alt="Icon" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] ml-[-10px] border-2 border-solid border-white rounded-full"/>
                    <img src={ProfilePic3} alt="Icon" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] ml-[-10px] border-2 border-solid border-white rounded-full"/>
                </div>
                <div className="text-[#3C4B71] max-w-[calc(100%_-_115px)] md:max-w-[calc(100%_-_140px)]">
                    <h2 className="m-0 text-[14px] md:text-[16px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                        136 Registered
                    </h2>
                    <div className="flex items-center gap-2 max-w-full">
                        <p className="m-0 text-[12px] whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                            23 on waitlist
                        </p>
                        <button onClick={exhibitorsModal} className="text-[12px] bg-[#fee6ed] rounded-full px-3 py-0 text-[#F7074F] border-none outline-none h-[18px]">View</button>   
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Prototype01RegisterBox;