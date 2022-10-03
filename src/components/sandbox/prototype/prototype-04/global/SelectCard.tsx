const SelectCard: React.FC<{
    title: string;
    description: string;
    uniqField: number;
    profile: string;
    selected: boolean;
    onSelect?: (value: any) => void;
}> = ({ title, description, uniqField, profile, selected, onSelect }) => (
    <div
        onClick={() => (onSelect ? onSelect(uniqField) : false)}
        className="flex mt-2 gap-3 items-center px-0 py-2 cursor-pointer"
    >
        <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
            <img
                src={profile}
                alt="profile"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="flex-1">
            <h1 className="text-[14px] text-[#122B46] m-0">{title}</h1>
            <p className="text-[12px] text-[#122B46B3]">{description}</p>
        </div>

        {selected ? (
            <div className="border-[#01B6AA] border-solid border-[2px] rounded-full w-6 h-6 flex items-center justify-center">
                <div className="w-[9px] h-[5px] translate-y-[-1px] translate-x-[1px] -rotate-45 border-b-[#01B6AA] border-b-solid border-b-[2px] border-l-[#01B6AA] border-l-solid border-l-[2px]"></div>
            </div>
        ) : (
            <div className="border-[#D3DAEE] border-solid border-[2px] rounded-full w-6 h-6"></div>
        )}
    </div>
);
export default SelectCard;
