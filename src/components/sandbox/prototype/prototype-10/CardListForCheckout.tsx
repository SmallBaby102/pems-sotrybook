import greenBasket from "./assets/green-basket.svg";
import deleteIcon from "./assets/delete-icon.svg";

const BorderedContainer: React.FC<{ children: any }> = ({ children }) => (
    <div className="border border-solid border-[#3C4B7120] text-[#3C4B71AB] rounded-md px-4 py-3 whitespace-nowrap text-ellipsis overflow-hidden">
        {children}
    </div>
);

const BasketRow: React.FC<{
    title: string;
    price: string;
    onDelete: () => void;
}> = ({ title, price, onDelete }) => (
    <div className="grid grid-cols-[60%_calc(30%_-_20px)_20px] gap-2 mb-2 items-center">
        <BorderedContainer>{title}</BorderedContainer>
        <BorderedContainer>{price}</BorderedContainer>
        <button onClick={onDelete}>
            <img src={deleteIcon} alt="delete" />
        </button>
    </div>
);

const GreenTitle: React.FC = ({ children }) => (
    <div className="text-[#00B6AA] mt-4">{children}</div>
);

const CardListForCheckout: React.FC = () => {
    return (
        <div>
            <div className="text-[#00B6AA] font-bold text-xl flex gap-2 items-center mb-4">
                <img src={greenBasket} alt="icon" /> <span>Cart</span>
            </div>
            <GreenTitle>Event</GreenTitle>
            <BasketRow
                title="Title sponsor"
                price="$30,000"
                onDelete={() => {}}
            />
            <BasketRow
                title="Medium size sign"
                price="$500"
                onDelete={() => {}}
            />
            <BasketRow
                title="Medium size sign"
                price="$500"
                onDelete={() => {}}
            />
            <BasketRow title="Small sign" price="$200" onDelete={() => {}} />

            <GreenTitle>Prize List</GreenTitle>
            <BasketRow
                title="Pony Hunter Breeding 2 Y Hunter Breeding 2 Y"
                price="$175"
                onDelete={() => {}}
            />
            <BasketRow
                title="Performance Hunter 3’6”"
                price="$500"
                onDelete={() => {}}
            />
            <GreenTitle>Vendor</GreenTitle>
            <BasketRow
                title="Virtual vendor"
                price="$600"
                onDelete={() => {}}
            />
            <BasketRow title="Large tent" price="$2000" onDelete={() => {}} />
            <BasketRow
                title="Coffee stand at entranc stand at entranc"
                price="$2500"
                onDelete={() => {}}
            />
        </div>
    );
};

export default CardListForCheckout;
