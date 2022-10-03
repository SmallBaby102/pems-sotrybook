import { useState, useEffect } from "react";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";

const DrawerP: React.FC<{ children: string }> = ({ children }) => (
    <p className="mt-4 text-[#122B4680]">{children}</p>
);

const ResultUpdatesModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    // this is for keeping modal height more than it's content
    const [tallScreen, setTallScreen] = useState(true);
    useEffect(() => {
        const handler = () => {
            const height = window.innerHeight;
            const width = window.innerWidth;
            if (height < 400 || width >= 1024) {
                setTallScreen(false);
            } else {
                setTallScreen(true);
            }
        };
        handler();
        window.addEventListener("resize", handler, true);
        return () => window.removeEventListener("resize", handler, true);
    }, []);
    //

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Result updates"
        >
            <DrawerP>
                You will recieve a push notification when results are published
                or edited, for events you are registered for.
            </DrawerP>
            <div className={tallScreen ? "h-[60vh]" : "h-[30vh]"}>&nbsp;</div>
        </Prototype04DrawerComponent>
    );
};

export default ResultUpdatesModal;
