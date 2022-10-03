import RightArrow from "../assets/more-icon.svg";
const MoreButton : React.FC<{onClick?: ()=>void, className?: string}> = ({onClick, className})=>{
    return (
        <button onClick={onClick} className={`flex items-center font-medium text-gray-400 gap-2 ${className}`}>
            <span>More</span>
            <img src={RightArrow} alt="arrow"/>
        </button>
    )
}
export default MoreButton;