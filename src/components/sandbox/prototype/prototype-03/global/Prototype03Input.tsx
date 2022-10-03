import { useState } from "react";
import showPassword from "../assets/show-password.svg";

const Prototype03Input: React.FC<{ className?: string, accept?: string, placeholder: string, type: string, disabled?: boolean, onChange?: (e: any) => void, value: string | Array<any>, icon: string }> = ({ placeholder, disabled, accept, onChange, value, icon, type, className }) => {
    const [innerType, setInnerType] = useState(type);
    return (
        <div className={`text-gray-500 flex items-center ${type === "textarea" ? "!items-start" : ""} gap-2 w-full px-4 py-2 border-solid rounded-xl border-[#D3DAEE] border-[1px] bg-white ${className}`}>
            {
                type !== "file" &&
                <div><img src={icon} alt="icon" className={`${type === "textarea" ? "mt-2" : ""}`} /></div>
            }
            {
                type === "file" &&
                <label className="flex items-center gap-2 justify-center w-full py-10">
                    <div><img src={icon} alt="icon" /></div>
                    <div>{placeholder}</div>
                    <input
                        type={innerType}
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                        className="hidden"
                        accept={accept}
                    />
                </label>

            }
            {
                type === "select" && typeof value === "object" &&

                <select
                    className="flex-1 border-0 outline-0 text-gray-600"
                    disabled={disabled}
                    value={value.filter(item => item.selected)[0]}
                    onChange={onChange}
                >
                    {
                        value.map(option => (
                            <option value={option.name}>{option.name}</option>
                        ))
                    }
                </select>
            }
            {
                type === "textarea" &&
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className="flex-1 border-0 outline-0 text-gray-600 resize-y min-h-[200px]"
                />

            }
            {
                type !== "select" && type !== "file" && type !== "textarea" &&
                <input
                    type={innerType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className="flex-1 border-0 outline-0 text-gray-600"
                />

            }
            {
                type === "password" &&
                <div onClick={() => setInnerType(innerType === "password" ? "text" : "password")}><img src={showPassword} alt="icon" className={`${innerType === "password" ? "" : "brightness-50"}`} /></div>
            }
        </div>
    )
}
export default Prototype03Input