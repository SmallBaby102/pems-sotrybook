import ExpandableSelector from "./../components/ExpandableSelector";
import TeamMemberCard from "./../components/SelectCard";

import profilePic1 from "./../assets/profile-pic-1.png";

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

const EditTeamMemberModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Edit authority"
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
                        onChange={(value) => {}}
                        placeholder="Select authority..."
                        icon={authIcon}
                        value={"1"}
                    />
                </div>
            </div>

            <ButtonContainer className="mt-[30px]">
                <Prototype04Button caption="SAVE" type={1} />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default EditTeamMemberModal;
