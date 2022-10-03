import questionMark from "../assets/question-mark.svg";

const NotificationSwitch: React.FC<{
    caption: string;
    on: boolean;
    onToggle: () => void;
    onHint: () => void;
}> = ({ caption, on, onToggle, onHint }) => (
    <div className="flex items-center mt-2 h-[56px] text-gray-500 gap-2 w-full px-4 py-2 border-solid rounded-xl border-[#D3DAEE] border-[1px] bg-white text-[14px]">
        <div className="flex-1 flex items-center gap-2">
            {caption}{" "}
            <img src={questionMark} alt="questions" onClick={onHint} />
        </div>
        <div
            onClick={onToggle}
            className={`${
                on ? "bg-[#F7074F]" : "bg-gray-200"
            } rounded-full h-[24px] w-[50px] p-0.5`}
        >
            <div
                className={`bg-white rounded-full h-[20px] w-[20px] transition-all ${
                    on ? "translate-x-[calc(100%_+_6px)]" : ""
                }`}
            ></div>
        </div>
    </div>
);

export default NotificationSwitch;
