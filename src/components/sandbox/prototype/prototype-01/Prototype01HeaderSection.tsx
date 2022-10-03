import Image1 from "./assets/HeaderSection/header-img-1.png";
import Image2 from "./assets/HeaderSection/header-img-2.png";
import Image3 from "./assets/HeaderSection/header-img-3.png";
import Image4 from "./assets/HeaderSection/header-img-4.png";
import Image5 from "./assets/HeaderSection/header-img-5.png";
import Image6 from "./assets/HeaderSection/header-img-6.png";
import Image7 from "./assets/HeaderSection/header-img-7.png";

import Logo from "./assets/HeaderSection/logo.png";


const ImageComponent : React.FC<{src:any, alt:string, className?:string}> = ({src, alt, className})=>(
    <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`}/>
);


const Prototype01HeaderSection : React.FC = ()=>{
    return (
        <div className="relative mb-10">
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[2fr_1fr_2fr_1fr_2fr] gap-2 rounded-xl overflow-hidden">
                <ImageComponent src={Image1} alt="header image"/>
                <div className="grid-rows-2 gap-2 hidden xl:grid">
                    <ImageComponent src={Image2} alt="header image"/>
                    <ImageComponent src={Image3} alt="header image"/> 
                </div>
                <ImageComponent src={Image4} alt="header image" className="hidden md:block"/>
                <div className="grid-rows-2 gap-2 hidden xl:grid">
                    <ImageComponent src={Image5} alt="header image"/>
                    <ImageComponent src={Image6} alt="header image"/> 
                </div>
                <ImageComponent src={Image7} alt="header image" className="hidden md:block"/>
            </div>
            <div className="flex gap-4 absolute bottom-[0] left-[50%] translate-x-[-50%] translate-y-[50%] md:translate-x-[0] md:translate-y-[0] rounded-full min-w-[280px] md:bottom-3 md:left-3 items-center bg-white md:rounded-xl shadow px-4 py-2">
                <img src={Logo} alt="logo" className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full rounded-lg"/>
                <div>
                    <h1 className="m-0 text-[16px] md:text-[20px]">Zeotis</h1>
                    <p className="m-0 color-[#122B46] text-[12px] md:text-[16px]">Proudly presents...</p>
                </div>
            </div>
        </div>
        
    )
}
export default Prototype01HeaderSection;