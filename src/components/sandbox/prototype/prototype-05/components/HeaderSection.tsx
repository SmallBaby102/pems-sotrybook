import backIcon from "./../assets/back-icon.svg";
import moreIcon from "./../assets/more-icon.svg";
const HeaderSection: React.FC<{
    title: string;
    onBack?: () => void;
    onMore?: () => void;
}> = ({ title, onBack, onMore }) => {
    return (
        <div className="m-4 mb-0">
            {onBack && (
                <div className="flex gap-2">
                    <button className="min-w-[20px]" onClick={onBack}>
                        <img src={backIcon} alt="icon" />
                    </button>

                    <div className="text-[24px] font-bold overflow-hidden text-ellipsis whitespace-nowrap flex-1">
                        {title}
                    </div>

                    {onMore && (
                        <button className="min-w-[20px]" onClick={onMore}>
                            <img src={moreIcon} alt="icon" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
export default HeaderSection;
