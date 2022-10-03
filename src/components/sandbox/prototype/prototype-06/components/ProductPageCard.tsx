import priceIcon from "./../assets/price-icon.svg";
import percentIcon from "./../assets/percent-icon.svg";
import webIcon from "./../assets/web-icon.svg";
import closeIcon from "./../assets/close-icon.svg";
import arrowIcon from "./../assets/arrow-icon.svg";

const ProductPageCard: React.FC<{
    image: string;
    category: string;
    title: string;
    price: string;
    tag: string;
    url: string;
    onClose?: () => void;
}> = ({ image, category, title, price, tag, url, onClose }) => {
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
                <div className="flex gap-2 text-xs text-[#747688]">
                    <img src={priceIcon} alt="icon" />
                    <div>{price}</div>
                </div>
                <div className="flex gap-2 text-xs text-[#747688]">
                    <img src={percentIcon} alt="icon" />
                    <div>{tag}</div>
                </div>
                <div className="flex gap-2 text-xs text-[#747688]">
                    <img src={webIcon} alt="icon" />
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {url}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={onClose}>
                    <img src={closeIcon} alt="close" />
                </button>
                <div className="mt-4">
                    <img src={arrowIcon} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default ProductPageCard;
