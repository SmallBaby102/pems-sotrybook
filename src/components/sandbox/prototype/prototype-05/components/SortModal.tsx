import { useState } from "react";
import Prototype04DrawerComponent from "../../prototype-04/global/Prototype04DrawerComponent";

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
    id: number;
    selected: boolean;
    onClick: (caption: any) => void;
}> = ({ caption, id, selected, onClick }) => (
    <div
        className={`p-4 mb-2 rounded-lg border justify-center border-solid flex items-center gap-4 text-[#122B4680] border-[#D3DAEE] cursor-pointer ${
            selected ? "bg-[#F7074F] !border-[#F7074F] !text-white" : ""
        }`}
        onClick={() => onClick({ id, caption })}
    >
        {caption}
    </div>
);

const SortModal: React.FC<{
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
        saveHandle();
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
            caption: "Popular",
            id: 1,
        },
        {
            caption: "A-Z",
            id: 2,
        },
        {
            caption: "Z-A",
            id: 3,
        },
        {
            caption: "$-$$$",
            id: 4,
        },

        {
            caption: "$$$-$",
            id: 5,
        },
    ];

    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title="Sort"
            onHelp={onHelp}
            maxWidth={640}
        >
            <div className="pr-2  overflow-auto">
                {list.map((item) => (
                    <SelectBox
                        icon={"genderIcon"}
                        caption={item.caption}
                        id={item.id}
                        onClick={changeHandle}
                        selected={optionExistanceCheckHandle(item)}
                    />
                ))}
            </div>
        </Prototype04DrawerComponent>
    );
};

export default SortModal;
