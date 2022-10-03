import { useState } from "react";
import Prototype04Button from "./../../global/Prototype04Button";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";

import verifiedIcon from "../../assets/verified-icon.svg";
import chartIcon from "../../assets/chart.svg";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const SelectBox: React.FC<{
    icon: string;
    caption: string;
    selected: string;
    onClick: (caption: string) => void;
}> = ({ icon, caption, selected, onClick }) => (
    <div
        className={`p-4 mb-2 rounded-2xl border-[1px] border-solid flex items-center gap-4 text-[14px] text-[#122B4680] border-[#D3DAEE]`}
        onClick={() => onClick(caption)}
    >
        <div>
            <img src={icon} alt="icon" />
        </div>
        <div className="flex-1">{caption}</div>
        <div>
            {selected === caption && <img src={verifiedIcon} alt="verified" />}
        </div>
    </div>
);

const ZoneModal: React.FC<{
    show: boolean;
    onHide: () => void;
    onChange: (location: string) => void;
    value: string;
    onHelp?: () => void;
}> = ({ show, onHide, onChange, value, onHelp }) => {
    const [selection, setSelection] = useState(
        value.trim() ? value.trim().split(", ") : []
    );

    const changeHandle = (value: string) => {
        if (selection.includes(value)) {
            setSelection(selection.filter((item) => item !== value));
        } else {
            let temp = [...selection, value];
            setSelection(temp);
        }
    };

    const optionExistanceCheckHandle = (value: string) => {
        if (selection.includes(value)) return value;
        return "";
    };

    const saveHandle = () => {
        console.log(selection);
        onChange(selection.join(", "));
        onHide();
    };

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Select zone"
            onHelp={onHelp}
            maxWidth={640}
        >
            <div className="pr-2 max-h-[calc(100vh_-_250px)] overflow-auto">
                <SelectBox
                    icon={chartIcon}
                    caption="International"
                    onClick={changeHandle}
                    selected={optionExistanceCheckHandle("International")}
                />
                <SelectBox
                    icon={chartIcon}
                    caption="1"
                    onClick={changeHandle}
                    selected={optionExistanceCheckHandle("1")}
                />
                <SelectBox
                    icon={chartIcon}
                    caption="2"
                    onClick={changeHandle}
                    selected={optionExistanceCheckHandle("2")}
                />
                <SelectBox
                    icon={chartIcon}
                    caption="3"
                    onClick={changeHandle}
                    selected={optionExistanceCheckHandle("3")}
                />
                <SelectBox
                    icon={chartIcon}
                    caption="4"
                    onClick={changeHandle}
                    selected={optionExistanceCheckHandle("4")}
                />
            </div>
            <ButtonContainer className="mt-2">
                <Prototype04Button
                    caption="SAVE"
                    type={1}
                    onClick={saveHandle}
                />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default ZoneModal;
