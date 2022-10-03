import HeaderSection from "./components/HeaderSection";
import TabSection from "./components/TabSection";
import { useState } from "react";
import noTeam from "./assets/no-team.svg";
import DeleteConfirmationModal from "./modals/DeleteConfirmationModal";
import TeamCard from "./components/TeamCard";
import thumbImage1 from "./assets/thumb-image-1.png";
import AddTeamMemberModal from "./modals/AddTeamMemberModal";
import EditTeamMemberModal from "./modals/EditTeamMemberModal";

const TeamPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [teamMemberModalShow, setTeamMemberModalShow] = useState(false);
    const [editTeamMemberModalShow, setEditTeamMemberModalShow] =
        useState(false);

    return (
        <>
            <DeleteConfirmationModal
                show={deleteConfirmation}
                onHide={() => setDeleteConfirmation(false)}
                onDelete={() => {}}
                onEdit={() => {}}
            />
            <AddTeamMemberModal
                show={teamMemberModalShow}
                onHide={() => setTeamMemberModalShow(false)}
            />
            <EditTeamMemberModal
                show={editTeamMemberModalShow}
                onHide={() => setEditTeamMemberModalShow(false)}
            />
            <div className="flex flex-col h-screen">
                <div className="">
                    <HeaderSection
                        title="Team"
                        onAdd={() => setTeamMemberModalShow(true)}
                        onMenu={() => {}}
                    />
                    <TabSection
                        selected={activeTab}
                        onChange={setActiveTab}
                        tabs={["AUTHORIZED", "UNAUTHORIZED"]}
                    />
                </div>
                <div className="flex-1 m-4 overflow-auto pr-2 gap-4">
                    {activeTab === 0 && (
                        <>
                            <div className="flex flex-col items-center gap-10 h-full min-h-[300px] justify-center">
                                <div>You have no team members</div>
                                <img
                                    src={noTeam}
                                    alt="No Team"
                                    className="max-w-[192px]"
                                />
                            </div>

                            {/* <TeamCard
                                name="Samantha James"
                                id="@samantha.james"
                                thumb={thumbImage1}
                                onDelete={() => setDeleteConfirmation(true)}
                                onEdit={() => {setEditTeamMemberModalShow(true)}}
                            /> */}
                        </>
                    )}
                    {activeTab === 1 && (
                        <TeamCard
                            name="Samantha James"
                            id="@samantha.james"
                            thumb={thumbImage1}
                            onDelete={() => setDeleteConfirmation(true)}
                            onEdit={() => {
                                setEditTeamMemberModalShow(true);
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    );
};
export default TeamPage;
