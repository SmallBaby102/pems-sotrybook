import { useEffect, useState } from "react";
import CloseIcon from "../assets/close-icon.svg";
import helpIcon from "../assets/help-icon.svg";

export interface PropTypes {
    show: boolean;
    children: any;
    onHide: () => void;
    title: string;
    tabComponent?: any;
    fullMinHeight?: boolean;
    maxWidth?: number;
    onHelp?: () => void;
}

const Prototype04DrawerComponent: React.FC<PropTypes> = (props: PropTypes) => {
    const modalBreakpoint = 1024;
    const [transformInfo, setTransformInfo] = useState("");

    const transformCalculator = () => {
        if (window.innerWidth > modalBreakpoint) {
            setTransformInfo(
                props.show
                    ? "translateX(-50%) translateY(-50%)"
                    : "translateX(-50%) translateY(-30%)"
            );
        } else {
            setTransformInfo(
                props.show
                    ? "translateX(0%) translateY(0%)"
                    : "translateX(0%) translateY(100%)"
            );
        }
    };
    useEffect(() => {
        transformCalculator();
        if (props.show) {
            window.addEventListener("resize", transformCalculator, true);
        } else {
            window.removeEventListener("resize", transformCalculator, true);
        }
        return () =>
            window.removeEventListener("resize", transformCalculator, true);
    }, [props.show]);

    return (
        <>
            <div
                className={`fixed left-0 right-0 top-0 bottom-0 z-50`}
                style={{
                    visibility: props.show ? "visible" : "hidden",
                    transition: "all .3s",
                }}
            >
                <div
                    className={`${
                        props.fullMinHeight ? "min-h-[80vh] lg:min-h-fit" : ""
                    } fixed bg-white p-4 max-h-[100vh] lg:max-h-[calc(100vh_-_60px)] rounded-t-3xl lg:rounded-xl z-50 left-0 lg:left-[calc(50%_-_1rem)] flex flex-col bottom-[0] lg:bottom-auto lg:top-[50%] w-full lg:w-[calc(100%_-_2rem)] max-w-[1024px] m-0 lg:m-2`}
                    style={{
                        opacity: props.show
                            ? 1
                            : window.innerWidth > modalBreakpoint
                            ? 0
                            : 1,
                        transform: transformInfo,
                        transition: "all .3s",
                        maxWidth:
                            window.innerWidth > modalBreakpoint
                                ? props.maxWidth
                                : undefined,
                    }}
                >
                    <div className="text-center lg:hidden">
                        <button
                            className="h-[30px] border-none outline-none bg-transparent"
                            onClick={props.onHide}
                        >
                            <div className="w-[30px] h-[8px] bg-gray-300 rounded-full"></div>
                        </button>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-1 lg:font-bold text-[25px] flex items-center gap-3">
                            <div className="text-[#122B46]">{props.title}</div>
                        </div>
                        {props.onHelp && (
                            <div>
                                <button className="mt-2" onClick={props.onHelp}>
                                    <img src={helpIcon} alt="icon" />
                                </button>
                            </div>
                        )}
                        <div className="text-right">
                            <button
                                onClick={props.onHide}
                                className="hidden lg:block"
                            >
                                <img
                                    src={CloseIcon}
                                    className="w-6"
                                    alt="close icon"
                                />
                            </button>
                        </div>
                    </div>
                    {props.tabComponent && <div>{props.tabComponent}</div>}
                    <div className="overflow-auto max-h-screen mt-4">
                        {props.children}
                    </div>
                </div>
                <div
                    className={`fixed left-0 right-0 top-0 bottom-0 bg-black/30 transition-all`}
                    style={{
                        opacity: props.show ? 1 : 0,
                    }}
                    onClick={props.onHide}
                ></div>
            </div>
        </>
    );
};

export default Prototype04DrawerComponent;
