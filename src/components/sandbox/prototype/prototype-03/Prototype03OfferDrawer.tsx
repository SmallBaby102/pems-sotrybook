import { useContext } from "react";
import Prototype03DrawerComponent from "./global/Prototype03DrawerComponent";
import Prototype03Button from "./global/Prototype03Button";
import { SignupStages } from "./Prototype03ContextApi";

const Prototype03OfferDrawer: React.FC<{ show: boolean, onHide: () => void }> = ({ show, onHide }) => {

    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value })
    }

    return (
        <Prototype03DrawerComponent
            show={show}
            onHide={onHide}
            type="full-modal"
            title="Success"
        >
            <p className="text-[14px] text-[#3C4B71]">Your Pegasus account is now linked to your USEF account.</p>
            <div className="mt-4 w-[90%] mx-auto">
                <Prototype03Button className="shadow-none" caption="COMPLETE PROFILE" type={1} onClick={() => stageHandle("Profile")} icon={false} />
                {
                    stage.selector === "event" &&
                    <Prototype03Button className="mt-2 shadow-none" caption="INVITE TEAM MEMBERS" type={2} onClick={() => stageHandle("Invite")} icon={false} />
                }
                {
                    stage.selector === "vendor" &&
                    <Prototype03Button className="mt-2 shadow-none" caption="ADD PRODUCTS" type={2} onClick={() => stageHandle("Products")} icon={false} />
                }
                <Prototype03Button className="mt-2 shadow-none" caption="LATER" type={3} onClick={onHide} icon={false} />
            </div>
        </Prototype03DrawerComponent>
    )
}
export default Prototype03OfferDrawer