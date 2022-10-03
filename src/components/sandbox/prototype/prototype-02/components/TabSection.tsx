import sortIcon from "./../assets/sort-icon.svg";

const TabSection: React.FC<{
    tabs: string[];
    onFilter?: () => void;
    onChange: (tab: number) => void;
    selected: number;
}> = ({ tabs, onFilter, onChange, selected }) => {
    return (
        <div className="bg-[rgba(0,0,0,0.0287096)] mx-4 mt-4 mb-0 p-2 rounded-full flex items-center whitespace-nowrap gap-1">
            <div className="flex flex-1">
                {tabs.map((tab, index) => (
                    <button
                        onClick={() => onChange(index)}
                        className={`p-2 px-3 rounded-full text-[#9B9B9B] text-[14px] flex-1 ${
                            selected === index
                                ? "!text-[#F7074F] bg-white shadow-md"
                                : ""
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex items-center">
                {onFilter && (
                    <button onClick={onFilter}>
                        <img src={sortIcon} alt="icon" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TabSection;
