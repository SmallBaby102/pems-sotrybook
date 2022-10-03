import { useState } from "react";
import ResultUpdatesModal from "./Modals/ResultUpdatesModal";
import NotificationSwitch from "../global/NotificationSwitch";

import backIcon from "../assets/back-icon.svg";

const Notifications: React.FC = () => {
    const [notificationData, setNotificationData] = useState({
        newMsg: false,
        weather: true,
        result: true,
        course: false,
        payment: false,
    });

    const [resultModal, setResultModal] = useState(false);

    return (
        <div className="p-6">
            <ResultUpdatesModal
                show={resultModal}
                onHide={() => setResultModal(false)}
            />
            <div className="text-[24px] flex items-center gap-2 mb-6">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Manage Password</div>
            </div>

            <NotificationSwitch
                on={notificationData.newMsg}
                onToggle={() =>
                    setNotificationData({
                        ...notificationData,
                        newMsg: !notificationData.newMsg,
                    })
                }
                onHint={() => {}}
                caption="New Message"
            />
            <NotificationSwitch
                on={notificationData.weather}
                onToggle={() =>
                    setNotificationData({
                        ...notificationData,
                        weather: !notificationData.weather,
                    })
                }
                onHint={() => {}}
                caption="Weather updates"
            />
            <NotificationSwitch
                on={notificationData.result}
                onToggle={() =>
                    setNotificationData({
                        ...notificationData,
                        result: !notificationData.result,
                    })
                }
                onHint={() => setResultModal(true)}
                caption="Results updates"
            />
            <NotificationSwitch
                on={notificationData.course}
                onToggle={() =>
                    setNotificationData({
                        ...notificationData,
                        course: !notificationData.course,
                    })
                }
                onHint={() => {}}
                caption="Course updates"
            />
            <NotificationSwitch
                on={notificationData.payment}
                onToggle={() =>
                    setNotificationData({
                        ...notificationData,
                        payment: !notificationData.payment,
                    })
                }
                onHint={() => {}}
                caption="Payment updates"
            />
        </div>
    );
};

export default Notifications;
