import { useState, useEffect, useRef, createRef } from "react";
import { VariableIcon } from "@heroicons/react/outline";
import bgImage from "./assets/main-bg.jpg";
import HeaderSection from "./components/HeaderSection";
import FormSection from "./components/FormSection";
import { SignupStages } from "./components/Prototype07ContextApi";
export interface Prototype07ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype07Component: React.FC<Prototype07ComponentProps> = (props) => {
    const signupStagesState = useState<{ selector: string; stage: string }>({
        selector: "",
        stage: "Init",
    });
    // for back button
    const prevStage = useRef<{ selector: string; stage: string }>({
        selector: "",
        stage: "Init",
    });

    useEffect(() => {
        prevStage.current = signupStagesState[0];
    }, [signupStagesState[0]]);

    // for centering forms when there is no overflow //////////////////
    const mainContainer = createRef<HTMLDivElement>();
    useEffect(() => {
        const marginTopCalculator = () => {
            const windowHeight = window.innerHeight - 118;
            const containerHeight = mainContainer.current?.clientHeight || 0;
            let marginTop = (windowHeight - containerHeight) / 2;
            if (marginTop < 0) marginTop = 0;
            mainContainer.current!.style!.marginTop = marginTop + "px";
        };
        const timeout = setTimeout(marginTopCalculator, 50);
        window.addEventListener("resize", marginTopCalculator, true);
        return () => {
            window.removeEventListener("resize", marginTopCalculator, true);
            clearTimeout(timeout);
        };
    }, [signupStagesState[0]]);

    /////////////////////////////////////////////////////////////////////

    return (
        <SignupStages.Provider value={[...signupStagesState, prevStage]}>
            <div
                key={props.id}
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
                className="h-screen flex flex-col bg-cover"
            >
                <HeaderSection />
                <div className="flex-1 overflow-auto pb-10 min-h-[calc(100vh_-_118px)]">
                    <div
                        className="w-[380px] ml-[100px] transition-[all_.3s]"
                        ref={mainContainer}
                    >
                        <FormSection />
                    </div>
                </div>
            </div>
        </SignupStages.Provider>
    );
};

Prototype07Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype07Component;
