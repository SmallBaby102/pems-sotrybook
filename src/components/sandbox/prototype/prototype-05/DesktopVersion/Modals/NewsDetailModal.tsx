import Prototype04DrawerComponent from "../../../prototype-04/global/Prototype04DrawerComponent";
import usefIcon from "./../../assets/usef-icon.svg";
import licensedIcon from "./../../assets/licensed-icon.svg";
import dateIcon from "./../../assets/date-icon.svg";
import newsIcon from "./../../assets/news-icon-1.png";
const P: React.FC = ({ children }) => (
    <p className="text-[#3C4B71] opacity-70 leading-[25px] mt-4 text-sm">
        {children}
    </p>
);

const NewsDetailModal: React.FC<{ show: boolean; onHide: () => void }> = ({
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
                <div className="min-w-[160px]">
                    <div className="w-[160px] h-[160px] overflow-hidden rounded-xl">
                        <img
                            src={newsIcon}
                            alt="news icon"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex gap-4 items-center">
                        <div>
                            <img src={usefIcon} alt="icon" />
                        </div>
                        <div>
                            <h2 className="text-[#122B46] text-[16px] font-bold m-0">
                                USEF Championship Dressage...
                            </h2>
                            <div className="flex gap-2 items-center text-[#122B46] text-xs">
                                <div>
                                    <img src={licensedIcon} alt="icon" />
                                </div>
                                <div className="opacity-70">Licensed</div>
                                <div>
                                    <img src={dateIcon} alt="icon" />
                                </div>
                                <div className="opacity-70">Date: 12.06.22</div>
                            </div>
                        </div>
                    </div>
                    <P>
                        Come celebrate our 25th anniversary at HITS Commonwealth
                        Park! This year, HITS Culpeper will feature six weeks of
                        USEF competition in the heart of Virginia’s Horse
                        Country.
                    </P>
                    <P>
                        Just one hour from Washington, D.C., HITS Commonwealth
                        Park boasts a 100+ acre permanent horse show facility
                        with 500 permanent stalls, six competition rings and a
                        climate-controlled restaurant.
                    </P>
                    <P>
                        The restaurant includes an outdoor dining deck that
                        overlooks the Grand Prix ring for friends and family to
                        enjoy each day of competition.
                    </P>
                    <P>
                        HITS Culpeper has hosted numerous USEF and USHJA
                        Championships over the years including the USEF Pony
                        Finals, USHJA Zone Team Jumper Championships and the
                        USHJA Zone 3 Junior Equitation.
                    </P>
                </div>
            </div>
        </Prototype04DrawerComponent>
    );
};
export default NewsDetailModal;
