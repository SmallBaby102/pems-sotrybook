import Prototype04DrawerComponent from "../../../prototype-04/global/Prototype04DrawerComponent";
import dealIcon1 from "./../../assets/deal-icon-2.png";
import dealIcon2 from "./../../assets/deal-icon-1-2.png";
import percentIcon from "./../../assets/percent-icon.svg";
import Prototype04Button from "./../../../prototype-04/global/Prototype04Button";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[50%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const P: React.FC = ({ children }) => (
    <p className="text-[#3C4B71] opacity-70 leading-[25px] mt-4 text-sm">
        {children}
    </p>
);

const DealDetailModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Beth Cross signing at Ariat tent today!"
            fullMinHeight={true}
            maxWidth={650}
        >
            <div className="flex gap-6 p-4 md:flex-row flex-col">
                <div className="min-w-[160px] flex md:flex-col flex-row gap-6">
                    <div className="w-[160px] h-[160px] overflow-hidden rounded-xl">
                        <img
                            src={dealIcon1}
                            alt="news icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[160px] h-[160px] overflow-hidden rounded-xl">
                        <img
                            src={dealIcon2}
                            alt="news icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-[160px] h-[160px] overflow-hidden rounded-xl">
                        <img
                            src={dealIcon1}
                            alt="news icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div>
                    <div className="mt-4 flex gap-3 items-center">
                        <div className="text-[20px] text-[#979797] line-through">
                            $150
                        </div>
                        <div className="text-[30px] text-[#27C499] font-semibold flex-1">
                            $125
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={percentIcon} alt="percent" />
                            <span className="text-[#27C499] text-[20px]">
                                SHOW25
                            </span>
                        </div>
                    </div>
                    <P>
                        Snuggled up on the couch with your favorite book or out
                        and about town, this long cardigan is irresistibly cozy.
                        The beautiful open pointelle design is made from an
                        ethically sourced wool blend in a neutral shade that
                        goes with everything.
                    </P>
                    <ul className="text-[#3C4B71] opacity-70 leading-[25px] text-sm mt-8 list-disc">
                        <li>Cozy, knit pattern</li>
                        <li>Hand pockets</li>
                        <li>Ethical wool blend</li>
                        <li>Imported</li>
                    </ul>
                </div>
            </div>
            <ButtonContainer className="mt-[20px]">
                <Prototype04Button caption="MORE" type={1} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};
export default DealDetailModal;
