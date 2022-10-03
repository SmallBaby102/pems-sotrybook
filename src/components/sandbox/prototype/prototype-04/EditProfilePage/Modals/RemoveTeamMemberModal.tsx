import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";

import profilePic1 from "./../../assets/profile-pic-1.png";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const RemoveTeamMemberModal: React.FC<{ show: boolean; onHide: () => void }> =
    ({ show, onHide }) => {
        return (
            <Prototype04DrawerComponent
                show={show}
                onHide={onHide}
                title="Remove team member"
            >
                <div>
                    <div className="flex mt-2 gap-3 items-center px-0 py-2 cursor-pointer">
                        <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
                            <img
                                src={profilePic1}
                                alt="profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-[14px] text-[#122B46] m-0">
                                Sam Meares
                            </h1>
                            <p className="text-[12px] text-[#122B46B3]">
                                @sam_M2019
                            </p>
                        </div>
                    </div>
                </div>

                <ButtonContainer className="mt-[160px]">
                    <Prototype04Button caption="Remove" type={1} />
                    <Prototype04Button
                        caption="CANCEL"
                        type={3}
                        onClick={onHide}
                    />
                </ButtonContainer>
            </Prototype04DrawerComponent>
        );
    };

export default RemoveTeamMemberModal;
