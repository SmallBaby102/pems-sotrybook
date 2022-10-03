import { createContext, useEffect, useState, useRef } from "react";
import Prototype03Signup from "./Prototype03Signup";
import { SignupStages } from "./Prototype03ContextApi";
import Prototype03EventOrganizer from "./Prototype03EventOrganizer";
import Prototype03EventOrganizerVerify from "./Prototype03EventOrganizerVerify";
import Prototype03SignupForm from "./Prototype03SignupForm";
import appBg from "./assets/bg.svg";
import Prototype03ProfileForm from "./Prototype03EventProfileForm";
import Prototype03LandingContainingDrawer from "./Prototype03LandingContainingDrawer";
import Prototype03Invite from "./Prototype03EventInvite";
import Prototype03VendorForm from "./Prototype03VendorForm";
import Prototype03VendorProfileForm from "./Prototype03VendorProfileForm";
import Prototype03CompetitorOrganizer from "./Prototype03CompetitorOrganizer";
import Prototype03CompetitorProfileForm from "./Prototype03CompetitorProfileForm";
import Prototype03VendorProducts from "./Prototype03VendorProducts";
import Prototype03CompetitorOrganizerVerify from "./Prototype03CompetitorOrganizerVerify";



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export interface Prototype04ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype03Component: React.FC<Prototype04ComponentProps> = (props) => {

    // handle stages and pages at each moment:
    const signupStagesState = useState<{ selector: string, stage: string }>({ selector: "", stage: "Init" });

    // for back button
    const prevStage = useRef<{ selector: string, stage: string }>({ selector: "", stage: "Init" });

    useEffect(() => {
        prevStage.current = signupStagesState[0]
    }, [signupStagesState[0]])

    return (
        <SignupStages.Provider value={[...signupStagesState, prevStage]}>
            <div className="p-6 min-h-full bg-cover" style={{ backgroundImage: `url(${appBg})` }}>
                {/* <img src={appBg} /> */}
                {
                    signupStagesState[0]?.stage === "Init" &&
                    <Prototype03Signup />
                }
                {
                    signupStagesState[0]?.selector === "event" &&
                    (function () {
                        switch (signupStagesState[0]?.stage) {
                            case "EventOrg":
                                return <Prototype03EventOrganizer />
                            case "EventOrgVerify":
                                return <Prototype03EventOrganizerVerify />
                            case "SignUp":
                                return <Prototype03SignupForm />
                            case "Profile":
                                return <Prototype03ProfileForm />
                            case "Invite":
                                return <Prototype03Invite />
                            case "Landing":
                                return <Prototype03LandingContainingDrawer />
                        }
                    })()
                }
                {
                    signupStagesState[0]?.selector === "competitor" &&
                    (function () {
                        switch (signupStagesState[0]?.stage) {
                            case "CompOrg":
                                return <Prototype03CompetitorOrganizer />
                            case "CompOrgVerify":
                                return <Prototype03CompetitorOrganizerVerify />
                            case "SignUp":
                                return <Prototype03SignupForm />
                            case "Profile":
                                return <Prototype03CompetitorProfileForm />
                            case "Landing":
                                return <Prototype03LandingContainingDrawer />
                        }
                    })()
                }
                {
                    signupStagesState[0]?.selector === "vendor" &&
                    (function () {
                        switch (signupStagesState[0]?.stage) {
                            case "VendorForm":
                                return <Prototype03VendorForm />
                            case "Profile":
                                return <Prototype03VendorProfileForm />
                            case "Landing":
                                return <Prototype03LandingContainingDrawer />
                            case "Products":
                                return <Prototype03VendorProducts />
                        }
                    })()
                }
            </div>
        </SignupStages.Provider>
    );
};

export default Prototype03Component;
