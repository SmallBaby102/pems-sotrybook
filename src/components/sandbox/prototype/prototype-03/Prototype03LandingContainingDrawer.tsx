import { useContext, useEffect, useState } from "react";
import { SignupStages } from "./Prototype03ContextApi";
import Prototype03OfferDrawer from "./Prototype03OfferDrawer";

const Prototype03LandingContainingDrawer: React.FC = () => {

    const [stage, setStage] = useContext(SignupStages);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value })
    }

    return (
        <div>
            <div className="text-[26px] text-gray-400 text-center">LANDING DESIGN</div>
            <div className="text-[26px] text-gray-300 text-center">LANDING DESIGN</div>
            <div className="text-[26px] text-gray-200 text-center">LANDING DESIGN</div>
            <div className="text-[26px] text-gray-100 text-center">LANDING DESIGN</div>
            <Prototype03OfferDrawer show={show} onHide={() => setShow(false)} />
        </div>
    );
};

export default Prototype03LandingContainingDrawer;