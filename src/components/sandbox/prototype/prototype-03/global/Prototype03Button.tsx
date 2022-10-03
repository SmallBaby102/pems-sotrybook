import nextIcon from "../assets/next.svg";
const Prototype03Button: React.FC<{className?: string, caption: string, type: number, disabled?: boolean, onClick?:()=>void, icon?: boolean}> = ({className, caption, type, disabled, onClick, icon})=>{
    
    const buttonTypeClassGenerator = ()=>{
        switch(type){
            case 1:
                return "items-center py-4 rounded-xl w-full relative bg-[#F7074F] text-white shadow-xl disabled:opacity-[.5] border-1 border-transparent border-solid"
            case 2:
                return "items-center py-4 rounded-xl w-full relative bg-white border-[1px] border-solid border-[#F7074F] text-[#F7074F] shadow-xl disabled:opacity-[.5]"
            case 3:
                return "items-center py-4 rounded-xl w-full relative bg-[#EEEEEF] text-[#484646] shadow-xl disabled:opacity-[.5] border-1 border-transparent border-solid"
    
        }
    }
    return (
        <button onClick={onClick} className={`${buttonTypeClassGenerator()} ${className}`} disabled={disabled}>
            {caption}
            {
                icon !== false &&
                <img src={nextIcon} alt="next" className="absolute right-2 top-[50%] translate-y-[-50%]"/>
            }
        </button>
    )
}
export default Prototype03Button