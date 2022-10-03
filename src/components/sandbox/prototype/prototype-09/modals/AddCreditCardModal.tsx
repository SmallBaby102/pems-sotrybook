import Prototype04DrawerComponent from "../../prototype-04/global/Prototype04DrawerComponent";
import Prototype04Button from "./../../prototype-04/global/Prototype04Button";

const AddCreditCardModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    const inputClassName = `px-0 text-[14px] border-transparent w-full border-b-[1px] border-b-[#122B4680] border-solid`;

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Add credit card"
            fullMinHeight={true}
            maxWidth={650}
        >
            <div className="px-8 pb-10">
                <div className="border-[#D3DAEE] border-solid border-[1px] rounded-xl p-6 mt-4 text-[14px]">
                    <div>
                        <label>Card number</label>
                        <input
                            type="tel"
                            placeholder="0000-0000-0000-0000"
                            className={inputClassName}
                        />
                    </div>
                    <div className="flex gap-2 mt-4">
                        <div className="flex-1">
                            <label>Expiration</label>
                            <input
                                type="tel"
                                placeholder="MM/YY"
                                className={inputClassName}
                            />
                        </div>
                        <div className="flex-1">
                            <label>CVV</label>
                            <input
                                type="password"
                                placeholder="123"
                                className={inputClassName}
                            />
                        </div>
                        <div className="flex-1">
                            <label>ZIP code</label>
                            <input
                                type="tel"
                                placeholder="XXX"
                                className={inputClassName}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[250px] flex flex-col gap-2 w-[280px] mx-auto">
                    <Prototype04Button type={1} caption="SAVE" />
                    <Prototype04Button
                        type={3}
                        caption="CANCEL"
                        onClick={onHide}
                    />
                </div>
            </div>
        </Prototype04DrawerComponent>
    );
};
export default AddCreditCardModal;
