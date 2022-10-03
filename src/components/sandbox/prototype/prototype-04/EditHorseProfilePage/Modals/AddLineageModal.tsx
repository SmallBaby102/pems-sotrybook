import { useState } from "react";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";
import ExpandableSelector from "../../global/ExpandableSelector";
import TeamMemberCard from "./../../global/SelectCard";

import searchIcon from "./../../assets/search-icon.svg";
import profilePic1 from "./../../assets/horse-pic-1.png";
import profilePic2 from "./../../assets/horse-pic-2.png";
import tagIcon from "./../../assets/tag-icon.svg";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const AddLineageModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    const [search, setSearch] = useState("");
    const [teamMember, setTeamMember] = useState<any[]>([
        {
            id: 1,
            title: "Wendy Rose",
            description: "Retired",
            profile: profilePic1,
            selected: false,
            tag: "",
        },
        {
            id: 2,
            title: "Wendy Romeo",
            description: "Retired",
            profile: profilePic2,
            selected: false,
            tag: "",
        },
    ]);
    const [stage, setStage] = useState("1");

    const secondStageHandle = () => {
        setStage("2");
    };

    const selectMemberHandle = (value: number) => {
        let temp = [...teamMember];
        temp = temp.map((item) =>
            item.id === value ? { ...item, selected: !item.selected } : item
        );
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
            title="Add lineage"
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
                            uniqField={item.id}
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
                                                caption: "Grand Sire",
                                                value: "1",
                                            },
                                            {
                                                caption: "Grand Dam",
                                                value: "2",
                                            },
                                            { caption: "Sire", value: "3" },
                                            { caption: "Dam", value: "4" },
                                        ]}
                                        onChange={(value) =>
                                            selectorHandle(
                                                value,
                                                teamMember.findIndex(
                                                    (i) => i.id === item.id
                                                ),
                                                "tag"
                                            )
                                        }
                                        placeholder="Tag lineage..."
                                        icon={tagIcon}
                                        value={item.tag}
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

export default AddLineageModal;
