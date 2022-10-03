import CreditCardBox from "../global/CreditCardBox";
import CardLink from "./../global/CardLink";

import backIcon from "../assets/back-icon.svg";
import cardIcon from "../assets/card.svg";

const CardSettings: React.FC = () => {
    return (
        <div className="p-6">
            <div className="text-[24px] flex items-center gap-2">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Card settings</div>
            </div>
            <CardLink
                type="button"
                caption={"profileForm.location"}
                icon={cardIcon}
                onClick={() => {}}
            />
            <CreditCardBox caption="XXXX-XXXX-XXXX-1234" isDefault={true} />
            <CreditCardBox caption="XXXX-XXXX-XXXX-1234" />
            <CreditCardBox caption="XXXX-XXXX-XXXX-1234" />
            <CreditCardBox caption="XXXX-XXXX-XXXX-1234" />
        </div>
    );
};

export default CardSettings;
