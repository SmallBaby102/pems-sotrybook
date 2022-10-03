import { useState } from "react";
import ExpandableSelector from "./../components/ExpandableSelector";
import TeamMemberCard from "./../components/SelectCard";

import searchIcon from "./../assets/search-icon.svg";
import profilePic1 from "./../assets/profile-pic-1.png";
import profilePic2 from "./../assets/profile-pic-2.png";
import profilePic3 from "./../assets/profile-pic-3.png";
import profilePic4 from "./../assets/profile-pic-4.png";
import authIcon from "./../assets/auth-icon.svg";
import Prototype04DrawerComponent from "../../prototype-04/global/Prototype04DrawerComponent";
import Prototype04Button from "../../prototype-04/global/Prototype04Button";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const AddTeamMemberModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    const [search, setSearch] = useState("");
    const [teamMember, setTeamMember] = useState<any[]>([
        {
            title: "Samuel Williams",
            description: "@sammy.williams",
            profile: profilePic1,
            selected: false,
            position: "",
        },
        {
            title: "Samantha James",
            description: "@samantha.james",
            profile: profilePic2,
            selected: false,
            position: "",
        },
        {
            title: "Sam Meares",
            description: "@sam_M2019",
            profile: profilePic3,
            selected: false,
            position: "",
        },
        {
            title: "Samuel Reilly",
            description: "@reillyey_samuel",
            profile: profilePic4,
            selected: false,
            position: "",
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
            title="Add team member"
            maxWidth={650}
        >
            {stage === "1" && (
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
                    <ButtonContainer className="mt-[30px]">
                        <Prototype04Button
                            caption="NEXT"
                            type={1}
                            onClick={secondStageHandle}
                            arrowIcon={true}
                            disabled={
                                teamMember.filter((item) => item.selected)
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
            {stage === "2" && (
                <>
                    {teamMember
                        .filter((item) => item.selected === true)
                        .map((item) => (
                            <div>
                                <TeamMemberCard
                                    title={item.title}
                                    description={item.description}
                                    uniqField={item.description}
                                    profile={item.profile}
                                    selected={item.selected}
                                />
                                <div className="my-4">
                                    <ExpandableSelector
                                        options={[
                                            {
                                                caption: "Authorized",
                                                value: "1",
                                            },
                                            {
                                                caption: "Unauthorized",
                                                value: "2",
                                            },
                                        ]}
                                        onChange={(value) =>
                                            selectorHandle(
                                                value,
                                                teamMember.findIndex(
                                                    (i) =>
                                                        i.description ===
                                                        item.description
                                                ),
                                                "position"
                                            )
                                        }
                                        placeholder="Select authority..."
                                        icon={authIcon}
                                        value={item.position}
                                    />
                                </div>
                            </div>
                        ))}
                    <ButtonContainer className="mt-[30px]">
                        <Prototype04Button
                            caption="SAVE"
                            type={1}
                            disabled={teamMember
                                .filter((item) => item.selected === true)
                                .some((item) => item.position === "")}
                        />
                        <Prototype04Button
                            caption="CANCEL"
                            type={3}
                            onClick={onHide}
                        />
                    </ButtonContainer>
                </>
            )}
        </Prototype04DrawerComponent>
    );
};

export default AddTeamMemberModal;
