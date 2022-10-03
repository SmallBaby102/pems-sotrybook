import { useState } from "react";

import whiteCheckIcon from "../assets/white-check.svg";
import horseProfilePicBig from "../assets/horse-profile-pic-big.svg";
import Prototype04DrawerComponent from "../../prototype-04/global/Prototype04DrawerComponent";
import Prototype04Button from "./../../prototype-04/global/Prototype04Button";

const ButtonContainer: React.FC<{ children: any; className?: string }> = ({
    children,
    className,
}) => (
    <div className={`w-[80%] flex flex-col gap-3 p-4 mx-auto ${className}`}>
        {children}
    </div>
);

const SelectBox: React.FC<{
    value: string;
    id: number;
    selected: boolean;
    onClick: (caption: any) => void;
}> = ({ value, id, selected, onClick }) => (
    <div
        className={` relative rounded-2xl  flex items-center gap-4 text-[14px] text-[#122B4680] cursor-pointer`}
        onClick={() => onClick({ id, image: value })}
    >
        <img src={value} alt="icon" className="w-full" />

        {selected && (
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
                <img src={whiteCheckIcon} alt="verified" />
            </div>
        )}
        {selected && (
            <div className="absolute inset-0 bg-black opacity-30"></div>
        )}
    </div>
);

const CameraRoleModal: React.FC<{
    show: boolean;
    onHide: () => void;
    onChange: (value: any) => void;
    value: any;
    multiple?: boolean;
    onHelp?: () => void;
}> = ({ show, onHide, onChange, value, multiple, onHelp }) => {
    const [selection, setSelection] = useState(value);

    const changeHandle = (value: any) => {
        if (multiple) {
            if (selection.some((item: any) => item.id === value.id)) {
                setSelection(
                    selection.filter((item: any) => item.id !== value.id)
                );
            } else {
                let temp = [...selection, value];
                setSelection(temp);
            }
        } else {
            setSelection([value]);
        }
    };

    const optionExistanceCheckHandle = (value: any) => {
        return selection.some((item: any) => item.id === value.id);
    };

    const saveHandle = () => {
        console.log(selection);
        onChange(selection);
        onHide();
    };

    const list = [
        {
            caption: horseProfilePicBig,
            id: 1,
        },
        {
            caption: horseProfilePicBig,
            id: 2,
        },
        {
            caption: horseProfilePicBig,
            id: 3,
        },
        {
            caption: horseProfilePicBig,
            id: 4,
        },

        {
            caption: horseProfilePicBig,
            id: 5,
        },
        {
            caption: horseProfilePicBig,
            id: 6,
        },
        {
            caption: horseProfilePicBig,
            id: 7,
        },
        {
            caption: horseProfilePicBig,
            id: 8,
        },
        {
            caption: horseProfilePicBig,
            id: 9,
        },
        {
            caption: horseProfilePicBig,
            id: 10,
        },
    ];

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Camera Role"
            onHelp={onHelp}
            maxWidth={540}
        >
            <div className="pr-2 overflow-auto grid grid-cols-3 gap-2">
                {list.map((item) => (
                    <SelectBox
                        value={item.caption}
                        id={item.id}
                        onClick={changeHandle}
                        selected={optionExistanceCheckHandle(item)}
                    />
                ))}
            </div>
            <ButtonContainer className="mt-2">
                <Prototype04Button
                    caption="SAVE"
                    type={1}
                    onClick={saveHandle}
                />
                <Prototype04Button caption="CANCEL" type={3} onClick={onHide} />
            </ButtonContainer>
        </Prototype04DrawerComponent>
    );
};

export default CameraRoleModal;
