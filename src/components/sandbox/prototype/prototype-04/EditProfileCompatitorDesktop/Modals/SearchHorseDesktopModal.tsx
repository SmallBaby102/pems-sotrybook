import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "../../global/Prototype04Button";
import { useState } from "react";
import searchIcon from "./../../assets/search-icon.svg";
import profilePic1 from "./../../assets/horse-pic-1.png";
import profilePic2 from "./../../assets/horse-pic-2.png";
import profilePic3 from "./../../assets/horse-pic-3.png";
import profilePic4 from "./../../assets/profile-pic-4.png";
import ExpandableSelector from "../../global/ExpandableSelector";
import positionIcon from "./../../assets/position-icon.svg";
import authorityIcon from "./../../assets/authority-icon.svg";
import boxArrowIcon from "./../../assets/box-arrow.svg";
import { useEffect } from "react";
import HorseCard from "../../global/SelectCard";

const DrawerP: React.FC<{ children: string }> = ({ children }) => (
    <p className="mt-4 text-[#122B4680]">{children}</p>
);

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const LinkCard: React.FC<{ title: string; onClick?: () => void }> = ({
    title,
    onClick,
}) => (
    <div
        onClick={onClick}
        className="flex mt-2 gap-3 items-center p-4 cursor-pointer border-solid border-[1px] border-[#D3DAEE] rounded-xl text-[#122B4680] text-[14px]"
    >
        <div className="flex-1">{title}</div>
        <div>
            <img src={boxArrowIcon} alt="arrow" />
        </div>
    </div>
);

const SearchHorseDesktopModal: React.FC<{ show: boolean; onHide: () => void }> =
    ({ show, onHide }) => {
        const [stage, setStage] = useState("1");
        const [search, setSearch] = useState("");

        const secondStageHandle = () => {
            setStage("2");
        };

        const [horses, setHorses] = useState<any[]>([
            {
                id: 1,
                title: "Super 8",
                description: "Jumping • AA Show • Zone 4",
                profile: profilePic1,
                selected: false,
            },
            {
                id: 2,
                title: "Super Bullet",
                description: "Jumping • AA Show • Zone 4",
                profile: profilePic2,
                selected: false,
            },
            {
                id: 3,
                title: "Supres",
                description: "Jumping • A Show • Zone 3",
                profile: profilePic3,
                selected: false,
            },
        ]);

        // this is for keeping modal height more than it's content
        const [tallScreen, setTallScreen] = useState(true);
        useEffect(() => {
            const handler = () => {
                const height = window.innerHeight;
                const width = window.innerWidth;
                if (height < 400 || width >= 1024) {
                    setTallScreen(false);
                } else {
                    setTallScreen(true);
                }
            };
            handler();
            window.addEventListener("resize", handler, true);
            return () => window.removeEventListener("resize", handler, true);
        }, []);
        //

        const selectHorseHandle = (value: string) => {
            let temp = [...horses];
            temp = temp.map((item) =>
                item.id === value ? { ...item, selected: !item.selected } : item
            );
            console.log(temp, value);
            setHorses(temp);
        };

        return (
            <Prototype04DrawerComponent
                show={show}
                onHide={onHide}
                title="Add horse"
                fullMinHeight={true}
                maxWidth={650}
            >
                <div className="border-[#D3DAEE] border-solid border-[1px] py-1 px-4 rounded-full flex items-center mb-4">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="!border-none !outline-none flex-1"
                    />
                    <button>
                        <img src={searchIcon} alt="search" />
                    </button>
                </div>
                {horses.map((item) => (
                    <HorseCard
                        title={item.title}
                        description={item.description}
                        uniqField={item.id}
                        profile={item.profile}
                        selected={item.selected}
                        onSelect={selectHorseHandle}
                    />
                ))}
                <ButtonContainer className="mt-[200px]">
                    <Prototype04Button
                        caption="SAVE"
                        type={1}
                        disabled={
                            !horses.some((item) => item.selected === true)
                        }
                    />
                    <Prototype04Button
                        caption="CANCEL"
                        type={3}
                        onClick={onHide}
                    />
                </ButtonContainer>
            </Prototype04DrawerComponent>
        );
    };

export default SearchHorseDesktopModal;
