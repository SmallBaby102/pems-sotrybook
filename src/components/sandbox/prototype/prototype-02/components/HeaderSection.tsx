import backIcon from "./../assets/back-icon.svg";
import addIcon from "./../assets/plus-icon-color.svg";
import menuIcon from "./../assets/menu-icon.svg";

const HeaderSection: React.FC<{
    title: string;
    onBack?: () => void;
    onAdd?: () => void;
    onMenu?: () => void;
}> = ({ title, onBack, onAdd, onMenu }) => {
    return (
        <div className="m-4 mb-0">
            <div className="flex gap-2">
                {onBack && (
                    <button className="min-w-[20px]" onClick={onBack}>
                        <img src={backIcon} alt="icon" />
                    </button>
                )}
                {onMenu && (
                    <button className="min-w-[20px]" onClick={onMenu}>
                        <img src={menuIcon} alt="icon" />
                    </button>
                )}
                <div className="text-[24px] font-bold overflow-hidden text-ellipsis whitespace-nowrap flex-1">
                    {title}
                </div>

                {onAdd && (
                    <button className="min-w-[20px]" onClick={onAdd}>
                        <img src={addIcon} alt="icon" />
                    </button>
                )}
            </div>
        </div>
    );
};
export default HeaderSection;
