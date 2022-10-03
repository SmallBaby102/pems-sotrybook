import { useState } from "react";
import Prototype04DrawerComponent from "../../global/Prototype04DrawerComponent";
import Prototype04Button from "./../../global/Prototype04Button";

import verifiedIcon from "../../assets/verified-icon.svg";
import afghanistanIcon from "../../assets/flags/afghanistan.svg";

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

const LocationModal: React.FC<{
    show: boolean;
    onHide: () => void;
    onChange: (location: string) => void;
    value: string;
}> = ({ show, onHide, onChange, value }) => {
    const [selection, setSelection] = useState(value);

    const changeHandle = (location: string) => {
        setSelection(location);
    };

    const saveHandle = () => {
        onChange(selection);
        onHide();
    };

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Select nationality"
            maxWidth={640}
        >
            <div className="pr-2 max-h-[calc(100vh_-_250px)] overflow-auto">
                <SelectBox
                    icon={afghanistanIcon}
                    caption="Afghanistan"
                    onClick={changeHandle}
                    selected={selection}
                />
                <SelectBox
                    icon={afghanistanIcon}
                    caption="USA"
                    onClick={changeHandle}
                    selected={selection}
                />
                <SelectBox
                    icon={afghanistanIcon}
                    caption="Germany"
                    onClick={changeHandle}
                    selected={selection}
                />
                <SelectBox
                    icon={afghanistanIcon}
                    caption="China"
                    onClick={changeHandle}
                    selected={selection}
                />
                <SelectBox
                    icon={afghanistanIcon}
                    caption="Japan"
                    onClick={changeHandle}
                    selected={selection}
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

export default LocationModal;
