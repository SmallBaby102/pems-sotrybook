import { useState } from "react";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";
import ExpandableSelector from "../../global/ExpandableSelector";
import TeamMemberCard from "./../../global/SelectCard";

import profilePic1 from "./../../assets/profile-pic-1.png";
import authorityIcon from "./../../assets/authority-icon.svg";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const EditTeamMemberModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    const [authority, setAuthority] = useState("1");

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Edit team member"
        >
            <div>
                <TeamMemberCard
                    title="Sam Meares"
                    description="@sam_M2019"
                    uniqField={1}
                    profile={profilePic1}
                    selected={true}
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
                        onChange={(value) => setAuthority(value)}
                        placeholder="Select authority..."
                        icon={authorityIcon}
                        value={authority}
                    />
                </div>
            </div>

            <ButtonContainer className="mt-[160px]">
                <Prototype04Button caption="SAVE" type={1} />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default EditTeamMemberModal;
