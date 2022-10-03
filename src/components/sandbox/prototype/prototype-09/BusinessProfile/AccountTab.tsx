import emailIcon from "./../assets/email.svg";
import passwordIcon from "./../assets/password.svg";
import creditIcon from "./../assets/credit.svg";
import ButtonElement from "../../../../elements/buttons/button/ButtonElement";
import CreditCardBox from "./../global/CreditCardBox";
import bankIcon from "./../assets/bank.svg";
import notifIcon from "./../assets/notification.svg";
import saveIcon from "./../assets/save-icon.svg";
import NotificationSwitch from "../global/NotificationSwitch";
import AddCreditCardModal from "../modals/AddCreditCardModal";
import { useState } from "react";
import DesktopFormBlock from "../global/DesktopFormBlock";
import Prototype04Input from "../../prototype-04/global/Prototype04Input";
import Prototype04Button from "./../../prototype-04/global/Prototype04Button";

const AccountTab: React.FC = () => {
    const [addCreditModalShow, setAddCreditModalShow] = useState(false);
    return (
        <>
            <AddCreditCardModal
                show={addCreditModalShow}
                onHide={() => setAddCreditModalShow(false)}
            />
            <div className="max-w-[850px] flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">
                        Account settings
                    </h1>
                    <p className="text-[#122B4680] mt-2">
                        Manage your log in, financial, notification and security
                        details
                    </p>
                </div>
                <div className="py-5">
                    <DesktopFormBlock caption="Account email" icon={emailIcon}>
                        <Prototype04Input
                            type="text"
                            placeholder="david@gmail.com"
                            value=""
                            onChange={() => {}}
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Current password"
                        icon={passwordIcon}
                    >
                        <Prototype04Input
                            value=""
                            onChange={() => {}}
                            placeholder="Your Password"
                            type="password"
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="New password"
                        icon={passwordIcon}
                    >
                        <Prototype04Input
                            value=""
                            onChange={() => {}}
                            placeholder="New Password"
                            type="password"
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Confirm password"
                        icon={passwordIcon}
                    >
                        <Prototype04Input
                            value=""
                            onChange={() => {}}
                            placeholder="Confirm Password"
                            type="password"
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Add credit card"
                        icon={creditIcon}
                    >
                        <ButtonElement
                            Text="Add card"
                            onClick={() => setAddCreditModalShow(true)}
                        />
                    </DesktopFormBlock>
                    <DesktopFormBlock
                        caption="Cards on file"
                        icon={creditIcon}
                        captionOnTop={true}
                    >
                        <div className="flex-1">
                            <CreditCardBox
                                caption="XXXX-XXXX-XXXX-1234"
                                noIcon={true}
                            />
                            <CreditCardBox
                                caption="XXXX-XXXX-XXXX-1234"
                                isDefault={true}
                                noIcon={true}
                            />
                            <CreditCardBox
                                caption="XXXX-XXXX-XXXX-1234"
                                noIcon={true}
                            />
                            <CreditCardBox
                                caption="XXXX-XXXX-XXXX-1234"
                                noIcon={true}
                            />
                        </div>
                    </DesktopFormBlock>
                    <DesktopFormBlock caption="Bank account" icon={bankIcon}>
                        <Prototype04Input
                            value=""
                            onChange={() => {}}
                            placeholder="Bank account details"
                            type="text"
                        />
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock caption="Notifications" icon={notifIcon}>
                        <div className="flex-1">
                            <NotificationSwitch
                                caption="New message"
                                on={true}
                                onToggle={() => {}}
                                onHint={() => {}}
                            />
                            <NotificationSwitch
                                caption="Weather updates"
                                on={true}
                                onToggle={() => {}}
                                onHint={() => {}}
                            />
                            <NotificationSwitch
                                caption="Results updates"
                                on={true}
                                onToggle={() => {}}
                                onHint={() => {}}
                            />
                            <NotificationSwitch
                                caption="Course updates"
                                on={true}
                                onToggle={() => {}}
                                onHint={() => {}}
                            />
                            <NotificationSwitch
                                caption="Payment updates"
                                on={true}
                                onToggle={() => {}}
                                onHint={() => {}}
                            />
                        </div>
                    </DesktopFormBlock>
                </div>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Save all updates"
                        icon={saveIcon}
                    >
                        <Prototype04Button
                            caption="Save"
                            type={2}
                            className="w-auto px-12"
                        />
                    </DesktopFormBlock>
                </div>
            </div>
        </>
    );
};

export default AccountTab;
