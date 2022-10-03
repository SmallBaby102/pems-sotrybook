import deleteIcon from "./../assets/close-icon.svg";

const TeamCard: React.FC<{
    name: string;
    id: string;
    thumb: string;
    onDelete: () => void;
    onEdit: () => void;
}> = ({ name, id, thumb, onDelete, onEdit }) => {
    return (
        <div
            onClick={onEdit}
            className="border border-solid border-[#D3DAEE] flex items-center gap-2 rounded-xl p-2 cursor-pointer"
        >
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                    src={thumb}
                    alt="thumb"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">
                <div className="text-[#122B46] text-sm">{name}</div>
                <div className="text-[#122B46] text-xs opacity-70">{id}</div>
            </div>
            <div className="flex items-center">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                >
                    <img src={deleteIcon} alt="delete icon" />
                </button>
            </div>
        </div>
    );
};
export default TeamCard;
