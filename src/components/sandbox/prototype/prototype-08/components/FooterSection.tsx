import eventIcon from "./../assets/event-icon.svg";
import vendorsIcon from "./../assets/vendors-icon.svg";
import addIcon from "./../assets/add-icon.svg";
import exploreIcon from "./../assets/explore-icon.svg";
import profileIcon from "./../assets/profile-icon.svg";

const FooterButton: React.FC<{
    icon: string;
    caption: string;
    selected: boolean;
    onClick?: () => void;
    customizeIcon?: string;
}> = ({ icon, caption, selected, onClick, customizeIcon }) => {
    const activeStyle = {
        // red icons
        filter: "brightness(0) saturate(100%) invert(13%) sepia(98%) saturate(7362%) hue-rotate(338deg) brightness(99%) contrast(95%)",
    };
    const inactiveStyle = {
        // gray icons
        filter: "brightness(0) saturate(100%) invert(100%) sepia(46%) saturate(0%) hue-rotate(144deg) brightness(88%) contrast(94%)",
    };
    return (
        <button
            className="text-[14px] text-[#D9D9D9] text-center"
            onClick={onClick}
        >
            <img
                src={icon}
                alt="icon"
                style={selected ? activeStyle : inactiveStyle}
                className={`inline-block ${customizeIcon}`}
            />
            <div className={selected ? "text-[#F7074F]" : ""}>{caption}</div>
        </button>
    );
};
const FooterSection: React.FC<{ selected: string }> = ({ selected }) => {
    return (
        <div className="flex justify-between px-6 h-[90px] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,.1)] bg-white">
            <FooterButton
                icon={eventIcon}
                caption="Event"
                selected={selected === "event"}
            />
            <FooterButton
                icon={vendorsIcon}
                caption="Vendors"
                selected={selected === "vendors"}
            />

            <button className="text-[14px] text-[#D9D9D9] w-[60px] flex justify-center items-center h-[60px] mt-5">
                <img
                    src={addIcon}
                    alt="icon"
                    className="min-w-[90px] min-h-[90px]"
                />
            </button>
            <FooterButton
                icon={exploreIcon}
                caption="Explore"
                selected={selected === "explore"}
                customizeIcon="mb-1 w-6"
            />
            <FooterButton
                icon={profileIcon}
                caption="Profile"
                selected={selected === "profile"}
                customizeIcon="mb-1 w-[36px] -mt-2"
            />
        </div>
    );
};
export default FooterSection;
