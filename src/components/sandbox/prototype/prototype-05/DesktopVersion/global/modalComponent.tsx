// ############################################################
/**
 * @todo Document this
 */
// ############################################################


import { useEffect, useState } from 'react';
import CloseIcon from '../assets/close-icon.svg';
import BackIcon from '../assets/back-icon.svg';

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export interface PropTypes {
    show: boolean,
    children: any,
    onHide: ()=>void,
    type: string,
    title: string
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const ModalComponent: React.FC<PropTypes> = (props: PropTypes) => {
    const modalBreakpoint = 768;
    const [transformInfo, setTransformInfo] = useState("");

    const transformCalculator = ()=>{
        if(window.innerWidth > modalBreakpoint){
            setTransformInfo(props.show ? "translateX(-50%) translateY(-50%)" : "translateX(-50%) translateY(-30%)");
        }else{
            setTransformInfo(props.show ? "translateX(0%) translateY(0%)" : "translateX(0%) translateY(10%)");
        }
    }
    useEffect(()=>{
        transformCalculator();
        if(props.show){
            window.addEventListener("resize", transformCalculator, true);
        }else{
            window.removeEventListener("resize", transformCalculator, true);
        }
        return ()=> window.removeEventListener("resize", transformCalculator, true);
    },[props.show])
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return ( 
        <>
            
            <div 
                className={`fixed left-0 right-0 top-0 bottom-0 z-10 transition-all`}
                style={{
                    visibility: props.show ? "visible" : "hidden"
                }}
            >
                <div 
                    className={`fixed bg-white p-4 max-h-[100vh] md:max-h-[calc(100vh_-_60px)] md:rounded-xl z-10 left-0 md:left-[calc(50%_-_1rem)] flex flex-col top-0 md:top-[calc(50%_-_1rem)] w-full md:w-[calc(100%_-_2rem)] max-w-[728px] m-0 md:m-2 transition-all`}
                    style={{
                        opacity: props.show ? 1 : 0,
                        transform: transformInfo
                    }}
                >
                    <div className='flex items-center'>
                        <div className='flex-1 font-bold text-[25px] flex items-center gap-3'>
                            <button onClick={props.onHide} className="block md:hidden">
                                <img src={BackIcon} className="w-6" alt="close icon" />
                            </button>
                            <div>
                                {props.title}
                            </div>
                        </div>
                        <div className="text-right">
                                <button onClick={props.onHide} className="hidden md:block">
                                    <img src={CloseIcon} className="w-6" alt="close icon" />
                                </button>
                            </div>
                        </div>
                    <div className="overflow-auto max-h-screen mt-4">
                        {props.children}
                    </div>
                </div>
                <div 
                    className={`fixed left-0 right-0 top-0 bottom-0 bg-black/30 transition-all`}
                    style={{
                        opacity: props.show ? 1 : 0,
                    }}
                ></div>
            </div>
            
        </>

    );
};

export default ModalComponent;
