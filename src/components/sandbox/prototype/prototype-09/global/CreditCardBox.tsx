import cardIcon from "../assets/card.svg";

const CreditCardBox: React.FC<{
    caption: string;
    isDefault?: boolean;
    noIcon?: boolean;
}> = ({ caption, isDefault, noIcon }) => {
    const arr = caption.split("-");
    const lastOne = arr.pop();
    return (
        <button
            className={`mt-4 h-[58px] text-gray-500 flex items-center gap-2 w-full px-4 py-2 border-solid rounded-xl border-[#D3DAEE] border-[1px] bg-white text-[14px]`}
        >
            {!noIcon && (
                <span>
                    <img src={cardIcon} alt="card" />
                </span>
            )}
            <div className="flex-1 px-3 text-left">
                {arr.join("-")}-<b>{lastOne}</b>
            </div>
            {isDefault && (
                <div className="text-[#00B6AA] bg-[#00B6AA16] px-4 py-1 rounded-full text-[14px]">
                    Default
                </div>
            )}
        </button>
    );
};
export default CreditCardBox;
