import webIcon from "./../assets/web-icon.svg";
import closeIcon from "./../assets/close-icon.svg";

const NewsPageCard: React.FC<{
    image: string;
    category: string;
    title: string;
    description: string;
    url: string;
    onDelete?: () => void;
}> = ({ image, category, title, description, url, onDelete }) => {
    return (
        <div className="flex overflow-hidden gap-4 w-full p-3 shadow-[0px_8px_25px_rgba(83,89,144,0.07)] rounded-xl cursor-pointer mt-4">
            <div className="min-w-[80px] w-[80px] overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt="Product"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                <div className="text-xs text-[#F7074F]">{category}</div>
                <div className="text-lg text-[#122B46] overflow-hidden text-ellipsis">
                    {title}
                </div>
                <div className="flex gap-2 text-sm text-[#747688] whitespace-normal">
                    <div>{description}</div>
                </div>
                <div className="flex gap-2 text-xs text-[#747688]">
                    <img src={webIcon} alt="icon" />
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {url}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={onDelete}>
                    <img src={closeIcon} alt="close" />
                </button>
            </div>
        </div>
    );
};

export default NewsPageCard;
