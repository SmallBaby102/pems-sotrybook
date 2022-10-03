import Prototype07Signup from "./Prototype07Signup";
import { useContext } from "react";
import { SignupStages } from "./Prototype07ContextApi";
import Prototype07VendorForm from "./Prototype07VendorForm";
import Prototype07SigninForm from "./Prototype07SigninForm";
import Prototype07CompetitorOrganizer from "./Prototype07CompetitorOrganizer";
import Prototype07CompetitorOrganizerVerify from "./Prototype07CompetitorOrganizerVerify";
import Prototype07CompetitorSignupForm from "./Prototype07CompetitorSignupForm";
import Prototype07EventOrganizer from "./Prototype07EventOrganizer";
import Prototype07EventOrganizerVerify from "./Prototype07EventOrganizerVerify";
import Prototype07EventOrganizerSignupForm from "./Prototype07EventOrganizerSignupForm";
const FormSection: React.FC = () => {
    const [stageObj, setStageObj] = useContext(SignupStages);
    return (
        <div>
            {stageObj.stage === "Init" && <Prototype07Signup />}
            {stageObj.selector === "event" &&
                (function () {
                    switch (stageObj.stage) {
                        case "EventOrg":
                            return <Prototype07EventOrganizer />;
                        case "EventOrgVerify":
                            return <Prototype07EventOrganizerVerify />;
                        case "SignUp":
                            return <Prototype07EventOrganizerSignupForm />;
                    }
                })()}
            {stageObj.selector === "competitor" &&
                (function () {
                    switch (stageObj.stage) {
                        case "CompOrg":
                            return <Prototype07CompetitorOrganizer />;
                        case "CompOrgVerify":
                            return <Prototype07CompetitorOrganizerVerify />;
                        case "SignUp":
                            return <Prototype07CompetitorSignupForm />;
                    }
                })()}
            {stageObj.selector === "vendor" &&
                (function () {
                    switch (stageObj.stage) {
                        case "VendorForm":
                            return <Prototype07VendorForm />;
                        case "SignIn":
                            return <Prototype07SigninForm />;
                    }
                })()}
        </div>
    );
};
export default FormSection;
