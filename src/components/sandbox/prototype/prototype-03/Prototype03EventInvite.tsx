import Prototype03Button from "./global/Prototype03Button";
import { useContext, useState } from "react";
import { SignupStages } from "./Prototype03ContextApi";
import Prototype03Input from "./global/Prototype03Input";

import backIcon from "./assets/arrow-left.svg";
import emailIcon from "./assets/email.svg";
import plusIcon from "./assets/plus-icon.svg";

const Prototype03Invite: React.FC = () => {

    const [stage, setStage] = useContext(SignupStages);

    const stageHandle = (value: string) => {
        setStage({ ...stage, stage: value })
    }

    const [inviteList, setInviteList] = useState([{ email: '' }]);

    return (
        <div>
            <div className="text-[24px] flex items-center gap-2">
                <button onClick={() => stageHandle("Init")}>
                    <img src={backIcon} alt="back" />
                </button>
                Invite team members
            </div>
            <div className="mt-6">
                <p>SEND INVITATIONS TO TEAM MEMBERS TO JOIN PEGASUS</p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
                {
                    inviteList.map((item, index) => (
                        <Prototype03Input
                            type="email"
                            value={item.email}
                            onChange={e => setInviteList(inviteList.map((val, i) => i === index ? { email: e.target.value } : val))}
                            placeholder="abc@email.com"
                            icon={emailIcon}
                        />
                    ))
                }

            </div>
            <div className="text-center m-4">
                <button onClick={() => setInviteList([...inviteList, { email: "" }])}>
                    <img src={plusIcon} alt="plus" />
                </button>
            </div>
            <div className="w-[70%] mt-[60px] mx-auto">
                <Prototype03Button caption="SEND INVITES" type={1} disabled={!stage.selector} onClick={() => stageHandle("EventOrgVerify")} />
            </div>
        </div>
    );
};

export default Prototype03Invite;