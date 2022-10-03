import arrowIcon from "./../assets/arrow-icon.svg";

const DealsCard: React.FC<{
    description: string;
    category: string;
    price: string;
    offPrice?: string;
    icon: string;
}> = ({ description, category, price, offPrice, icon }) => {
    return (
        <div className="flex gap-2 border border-solid border-[#D3DAEE] bg-white rounded-2xl mb-2 p-3 items-center cursor-pointer">
            <div>
                <div className="w-[79px] h-[92px] overflow-hidden rounded-xl">
                    <img
                        src={icon}
                        alt="icon"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="flex-1">
                <div className="text-xs text-[#F7074F]">{category}</div>
                <div className="font-semibold leading-[22px] mt-1">
                    {description}
                </div>
                <div className="flex gap-6 items-center">
                    {offPrice && (
                        <span className="text-[#979797] line-through">
                            {offPrice}
                        </span>
                    )}
                    <span className="text-[#27C499] font-semibold">
                        {price}
                    </span>
                </div>
            </div>
            <div className="min-w-[14px]">
                <img src={arrowIcon} alt="arrow" />
            </div>
        </div>
    );
};

export default DealsCard;
