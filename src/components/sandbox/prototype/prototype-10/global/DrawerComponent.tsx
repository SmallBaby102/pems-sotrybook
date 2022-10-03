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
    title: string,
    tabComponent: any
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const DrawerComponent: React.FC<PropTypes> = (props: PropTypes) => {
    const modalBreakpoint = 768;
    const [transformInfo, setTransformInfo] = useState("");

    const transformCalculator = ()=>{
        if(window.innerWidth > modalBreakpoint){
            setTransformInfo(props.show ? "translateX(-50%) translateY(-50%)" : "translateX(-50%) translateY(-30%)");
        }else{
            setTransformInfo(props.show ? "translateX(0%) translateY(0%)" : "translateX(0%) translateY(100%)");
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
                className={`fixed left-0 right-0 top-0 bottom-0 z-10`}
                style={{
                    visibility: props.show ? "visible" : "hidden",
                    transition: "all .3s"
                }}
            >
                <div 
                    className={`fixed bg-white p-4 h-[100vh] max-h-[100vh] md:max-h-[calc(100vh_-_60px)] rounded-t-3xl md:rounded-xl z-10 left-0 md:left-[calc(50%_-_1rem)] flex flex-col top-[80px] md:top-[calc(50%_-_1rem)] w-full md:w-[calc(100%_-_2rem)] max-w-[728px] m-0 md:m-2`}
                    style={{
                        opacity: props.show ? 1 : (window.innerWidth > modalBreakpoint ? 0 : 1),
                        transform: transformInfo,
                        transition: "all .3s"
                    }}
                >
                    <div className='text-center md:hidden'>
                        <button className='h-[30px] border-none outline-none bg-transparent' onClick={props.onHide}>
                            <div className='w-[30px] h-[8px] bg-gray-300 rounded-full'></div>
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex-1 md:font-bold text-[25px] flex items-center gap-3'> 
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
                        <div>
                            {props.tabComponent}
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

export default DrawerComponent;
