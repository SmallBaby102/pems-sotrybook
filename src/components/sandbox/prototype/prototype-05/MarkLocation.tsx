import MapComponent from "./components/MapComponent";
import noteIcon from "./assets/note-icon.svg";
import FooterSection from "./components/FooterSection";
import backIcon from "./assets/arrow-left.svg";
import Prototype04Button from "./../prototype-04/global/Prototype04Button";
const MarkLocation: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 max-h-[calc(100vh_-_90px)] overflow-hidden relative">
                <div className="text-[24px] flex items-center gap-2 absolute z-[10000] left-4 right-4 top-4">
                    <button>
                        <img src={backIcon} alt="back" />
                    </button>
                    <div className="font-semibold text-[24px]">
                        Mark booth location
                    </div>
                </div>
                <MapComponent
                    popups={[
                        {
                            position: [51.5, -0.07],
                            icon: noteIcon,
                            bg: "red",
                        },
                    ]}
                />
                <div className="text-[24px] flex items-center gap-2 absolute z-[10000] left-10 right-10 bottom-4">
                    <Prototype04Button
                        caption="SAVE"
                        type={1}
                        className="text-[14px]"
                    />
                </div>
            </div>
            <div className="">
                <FooterSection selected="explore" />
            </div>
        </div>
    );
};
export default MarkLocation;
