// ############################################################
/**
 * @todo Document this
 */
// ############################################################


import {VariableIcon} from "@heroicons/react/outline";
import Prototype01FeeSection from "./Prototype01Fees";
import Prototype01PrizeList from "./Prototype01PrizeList";
import Prototype01DataKey from "./Prototype01DataKey";
import Prototype01HeaderSection from "./Prototype01HeaderSection";
import Prototype01RegisterBox from "./Prototype01RegisterBox";
import Prototype01SponsersVendors from "./Prototype01SponsersVendors";
import Prototype01Policies from "./Prototype01Policies";
import Prototype01StaffSection from "./Prototype01StaffSection";
import PrimaryButton from "./global/PrimaryButton";
import { RedTitle } from "./global/RedTitle";
import MoreButton from "./global/MoreButton";
import HorizantalDivider from "./global/HorizantalDivider";
import Prototype01Paperwork from "./Prototype01Paperwork";
import Prototype01PointOfContact from "./Prototype01PointOfContact";
import Prototype01Map from "./Prototype01Map";
import Prototype01AboutModal from "./modals/Prototype01AboutModal";
import { useState } from "react";
import Prototype01AllFeesModal from "./modals/Prototype01AllFeesModal";
import Prototype01AllPoliciesModal from "./modals/Prototype01AllPoliciesModal";
import Prototype01ExhibitorsModal from "./modals/Prototype01exhibitorsModal";
import Prototype01PartnersModal from "./modals/Prototype01Partners";
import Prototype01AllStaffModal from "./modals/Prototype01AllStaffModal";

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export interface Prototype01ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Prototype01Component: React.FC<Prototype01ComponentProps> = (props) => {

    const [aboutModalShow, setAboutModalShow] = useState(false);
    const [allFeesModalShow, setAllFeesModalShow] = useState(false);
    const [allPoliciesModalShow, setAllPoliciesModalShow] = useState(false);
    const [exhibitorsModalShow, setExhibitorsModalShow] = useState(false);
    const [partnersModalShow, setPartnersModalShow] = useState(false);
    const [allStaffModalShow, setAllStaffModalShow] = useState(false);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return (
        <div
            key={props.id}
            className="relative bg-white pt-5 px-4  sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
            <Prototype01AboutModal 
                show={aboutModalShow}
                onHide={()=>setAboutModalShow(false)}
            />
            <Prototype01AllFeesModal
                show={allFeesModalShow}
                onHide={()=>setAllFeesModalShow(false)}
            />
            <Prototype01AllPoliciesModal
                show={allPoliciesModalShow}
                onHide={()=>setAllPoliciesModalShow(false)}
            />
            <Prototype01ExhibitorsModal 
                show={exhibitorsModalShow}
                onHide={()=>setExhibitorsModalShow(false)}
            />
            <Prototype01PartnersModal
                show={partnersModalShow}
                onHide={()=>setPartnersModalShow(false)}
            />
            <Prototype01AllStaffModal
                show={allStaffModalShow}
                onHide={()=>setAllStaffModalShow(false)}
            />
            <Prototype01HeaderSection />
            <div className="grid grid-cols-1 lg:grid-cols-[60%_calc(40%_-_24px)] xl:grid-cols-[68%_calc(32%_-_24px)] 2xl:grid-cols-[72%_calc(28%_-_24px)] gap-6">
                <div>
                    <h1>WEF Spring Series IV</h1>
                    <p>The Event at WEF showcases the Olympic sport of show jumping in the betiful lands of Wellington, Florida.</p>
                    <HorizantalDivider />
                    
                    <div className="lg:hidden">
                        <Prototype01RegisterBox
                            exhibitorsModal={()=>setExhibitorsModalShow(true)}
                        />
                        <HorizantalDivider />

                    </div>
                    <div className="hidden lg:block">
                        <Prototype01DataKey />
                        <HorizantalDivider />
                    </div>
                    <RedTitle text="About"/>
                    <p className="mt-4 text-[14px] text-[#3C4B7199] leading-8">Come celebrate our 25th anniversary at HITS Commonwealth Park! This year, HITS Culpeper will feature six weeks of USEF competition in the heart of Virginia’s Horse Country. Just one hour from Washington, D.C., HITS Commonwealth Park boasts a 100+ acre permanent horse show facility with 500 permanent stalls, six competition rings and a climate-controlled restaurant. The restaurant includes an outdoor dining deck that overlooks the Grand Prix ring for friends and family to enjoy each day of competition. HITS Culpeper has hosted numerous USEF and USHJA Championships over the years including the USEF Pony Finals, USHJA Zone Team Jumper Championships. and the USHJA Zone 3 Junior Equitation...</p>
                    <MoreButton onClick={()=>setAboutModalShow(true)}/>
                    <HorizantalDivider />
                    <div className="block lg:hidden">
                        <RedTitle text="Key data" className="mb-6"/>
                        <Prototype01DataKey />
                        <HorizantalDivider />
                    </div>
                    <div className="block lg:hidden">
                        <RedTitle text="Sponsors & Vendors" className="mb-6"/>
                        <Prototype01SponsersVendors />
                        <MoreButton className="mt-6" onClick={()=>setPartnersModalShow(true)}/>
                        <HorizantalDivider />
                    </div>
                    <RedTitle text="Prize List" className="mb-6"/>
                    <Prototype01PrizeList />
                    <HorizantalDivider />
                    <RedTitle text="Fees" className="mb-6"/>
                    <Prototype01FeeSection 
                        onOverallMore={()=>setAllFeesModalShow(true)}
                    />
                    <HorizantalDivider />
                    <RedTitle text="Policies" className="mb-6"/>
                    <Prototype01Policies 
                        onOverallMore={()=>setAllPoliciesModalShow(true)}
                    />
                    <HorizantalDivider />
                    <RedTitle text="Staff" className="mb-6"/>
                    <Prototype01StaffSection allStaffsModal={()=>setAllStaffModalShow(true)}/>
                    <HorizantalDivider />
                    <RedTitle text="Paperwork" className="mb-2"/>
                    <Prototype01Paperwork />
                    <HorizantalDivider />
                    <RedTitle text="Point of contact" className="mb-2"/>
                    <Prototype01PointOfContact />
                    <HorizantalDivider />
                    <RedTitle text="Location" className="mb-6"/>
                    <Prototype01Map />
                </div>
                <div className="hidden md:block">
                    <div className="rounded-xl mt-[100px] shadow-[0_0_10px_rgba(0,0,0,.3)] p-6">
                        <Prototype01RegisterBox />
                        <PrimaryButton
                            caption="REGISTER"
                            className="m-auto w-[80%] block mt-4"
                            onClick={()=>setExhibitorsModalShow(true)}
                        />
                    </div>
                    <div className="rounded-xl shadow-[0_0_10px_rgba(0,0,0,.3)] p-6 mt-6">
                        <Prototype01SponsersVendors />
                        <PrimaryButton
                            caption="MORE"
                            className="m-auto w-[80%] block mt-4"
                            onClick={()=>setPartnersModalShow(true)}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

Prototype01Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: ""
}


export default Prototype01Component;
