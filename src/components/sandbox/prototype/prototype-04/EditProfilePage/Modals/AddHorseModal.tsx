import { useState, useEffect } from "react";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";
import HorseCard from "./../../global/SelectCard";

import searchIcon from "./../../assets/search-icon.svg";
import profilePic1 from "./../../assets/profile-pic-1.png";
import profilePic2 from "./../../assets/profile-pic-2.png";
import boxArrowIcon from "./../../assets/box-arrow.svg";
import Prototype04Input from "./../../global/Prototype04Input";
import USEFIcon from "./../../assets/usef-icon.svg";
import eventOrgIcon from "./../../assets/event-org.png";
import emailIcon from "./../../assets/email.svg";
import EditProfileHorses from "../EditProfileHorses";
import ProfileForm from "./../../EditHorseProfilePage/ProfileForm";

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

const AddHorseModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    const [stage, setStage] = useState("select");
    const [search, setSearch] = useState("");

    const [horses, setHorses] = useState<any[]>([
        {
            id: 1,
            title: "Wendy Rose",
            description: "Retired",
            profile: profilePic1,
            selected: false,
        },
        {
            id: 2,
            title: "Wendy Romeo",
            description: "Retired",
            profile: profilePic2,
            selected: false,
        },
    ]);

    // this is for keeping modal height more than it's content
    const [tallScreen, setTallScreen] = useState(true);
    const [USEF, setUSEF] = useState("");
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
            maxWidth={540}
        >
            {stage === "select" && (
                <>
                    <LinkCard
                        title="Search horse"
                        onClick={() => setStage("addBySearch")}
                    />
                    <LinkCard
                        title="Add horse from USEF database"
                        onClick={() => setStage("addByUSEFNumber")}
                    />
                    <LinkCard
                        title="Create new horse"
                        onClick={() => setStage("createNewHorse")}
                    />
                    <Prototype04Button
                        caption="CANCEL"
                        type={3}
                        onClick={onHide}
                        className={`${
                            tallScreen
                                ? "!absolute !bottom-6 left-[50%] w-[80%] max-w-[300px] mx-auto translate-x-[-50%]"
                                : "w-[80%] max-w-[300px] mx-auto mt-[280px] block"
                        }`}
                    />
                </>
            )}
            {stage === "addBySearch" && (
                <>
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
                    <ButtonContainer
                        className={`${
                            tallScreen
                                ? "!absolute !bottom-6 left-[50%] w-[80%] max-w-[300px] mx-auto translate-x-[-50%]"
                                : "w-[80%] max-w-[300px] mx-auto mt-[280px] block"
                        }`}
                    >
                        <Prototype04Button
                            caption="NEXT"
                            type={1}
                            arrowIcon={true}
                            disabled={
                                horses.filter((item) => item.selected)
                                    .length === 0
                            }
                        />
                        <Prototype04Button
                            caption="CANCEL"
                            type={3}
                            onClick={onHide}
                        />
                    </ButtonContainer>
                </>
            )}
            {stage === "addByUSEFNumber" && (
                <div className="max-w-[400px] mx-auto">
                    <div className="mt-10">
                        <img
                            src={eventOrgIcon}
                            alt="icon"
                            className="rounded-full shadow-xl mx-auto"
                        />
                    </div>
                    <div className="mt-[60px]">
                        <p className="text-[18px] text-[#3C4B71] mt-4">
                            Enter your USEF number
                        </p>
                        <Prototype04Input
                            type="text"
                            value={USEF}
                            onChange={(e) => setUSEF(e.target.value)}
                            placeholder="USEF number"
                            icon={USEFIcon}
                        />
                    </div>
                    <div className="w-[70%] mt-[60px] mx-auto">
                        <Prototype04Button
                            caption="SEARCH"
                            type={1}
                            onClick={() => setStage("addByUSEFNumberVerified")}
                        />
                    </div>
                    <div className="text-center text-[#777E85] mt-10">OR</div>
                    <div className="text-[#120D26] my-10 text-center">
                        Don’t have a USEF number?{" "}
                        <a className="text-[#F7074F]">Continue &gt;</a>
                    </div>
                </div>
            )}
            {stage === "addByUSEFNumberVerified" && (
                <div className="max-w-[400px] mx-auto">
                    <div className="mt-10">
                        <img
                            src={eventOrgIcon}
                            alt="icon"
                            className="rounded-full shadow-xl mx-auto"
                        />
                    </div>
                    <div className="my-[100px] flex gap-4 items-start border-gray-300 border-solid border-[1px] bg-white p-3 rounded-xl max-w-[300px] mx-auto">
                        <div className="min-w-[25px]">
                            <img
                                src={emailIcon}
                                alt="email"
                                className="w-full"
                            />
                        </div>
                        <div className="text-[#777E85] ">
                            <p>
                                A verification email was sent to the email
                                address on file with the USEF for the membership
                                number you entered.
                            </p>
                            <p>Click the link in the email to continue.</p>
                        </div>
                    </div>
                    <div className="w-[70%] mb-[60px] mx-auto">
                        <Prototype04Button
                            caption="CLOSE"
                            type={1}
                            onClick={onHide}
                        />
                    </div>
                </div>
            )}
            {stage === "createNewHorse" && <ProfileForm />}
        </Prototype04DrawerComponent>
    );
};

export default AddHorseModal;
