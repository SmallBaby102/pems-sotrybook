import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";
import { useState } from "react";
import searchIcon from "./../../assets/search-icon.svg";
import profilePic1 from "./../../assets/profile-pic-1.png";
import profilePic2 from "./../../assets/profile-pic-2.png";
import profilePic3 from "./../../assets/profile-pic-3.png";
import profilePic4 from "./../../assets/profile-pic-4.png";
import ExpandableSelector from "../../global/ExpandableSelector";
import positionIcon from "./../../assets/position-icon.svg";
import authorityIcon from "./../../assets/authority-icon.svg";
import TeamMemberCard from "./../../global/SelectCard";
const DrawerP: React.FC<{ children: string }> = ({ children }) => (
    <p className="mt-4 text-[#122B4680]">{children}</p>
);

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[50%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const AddTeamMemberDesktopModal: React.FC<{
    show: boolean;
    onHide: () => void;
}> = ({ show, onHide }) => {
    const [search, setSearch] = useState("");
    const [teamMember, setTeamMember] = useState<any[]>([
        {
            title: "Samuel Williams",
            description: "@sammy.williams",
            profile: profilePic1,
            selected: false,
            position: "",
            authority: "",
        },
        {
            title: "Samantha James",
            description: "@samantha.james",
            profile: profilePic2,
            selected: false,
            position: "",
            authority: "",
        },
        {
            title: "Sam Meares",
            description: "@sam_M2019",
            profile: profilePic3,
            selected: false,
            position: "",
            authority: "",
        },
        {
            title: "Samuel Reilly",
            description: "@reillyey_samuel",
            profile: profilePic4,
            selected: false,
            position: "",
            authority: "",
        },
    ]);
    const [stage, setStage] = useState("1");

    const secondStageHandle = () => {
        setStage("2");
    };

    const selectMemberHandle = (value: string) => {
        let temp = [...teamMember];
        temp = temp.map((item) =>
            item.description === value
                ? { ...item, selected: !item.selected }
                : item
        );
        console.log(temp, value);
        setTeamMember(temp);
    };

    const selectorHandle = (value: string, index: number, key: string) => {
        let temp = [...teamMember];
        temp[index][key] = value;
        setTeamMember(temp);
    };

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Add member"
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
            {teamMember.map((item) => (
                <TeamMemberCard
                    title={item.title}
                    description={item.description}
                    uniqField={item.description}
                    profile={item.profile}
                    selected={item.selected}
                    onSelect={selectMemberHandle}
                />
            ))}

            <ButtonContainer className="mt-[200px]">
                <Prototype04Button
                    caption="SAVE"
                    type={1}
                    disabled={
                        !teamMember
                            .filter((item) => item.selected === true)
                            .some(
                                (item) =>
                                    item.position === "" ||
                                    item.authority === ""
                            )
                    }
                />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default AddTeamMemberDesktopModal;
