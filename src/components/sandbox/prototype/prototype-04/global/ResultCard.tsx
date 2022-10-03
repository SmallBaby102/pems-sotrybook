const ResultCard: React.FC<{
    title: string;
    description: string;
    image: string;
    rate: number;
}> = ({ title, description, image, rate }) => (
    <div className="flex gap-2 items-center my-4">
        <div>
            <img
                src={image}
                alt="profile picture"
                className="w-[45px] h-[45px] object-cover rounded-full"
            />
        </div>
        <div className="flex-1">
            <div className="text-[#122B46] text-[14px]">{title}</div>
            <div className="text-[#122B46] text-[12px] opacity-70">
                {description}
            </div>
        </div>
        <div>
            <div
                className={`bg-[#8c95ac] w-7 h-7 text-white flex items-center justify-center rounded-full ${
                    rate === 1 ? "bg-[#00b6aa]" : ""
                } ${rate === 2 ? "bg-[#f8da78]" : ""} ${
                    rate === 3 ? "bg-[#3b6af6]" : ""
                }`}
            >
                {rate}
            </div>
        </div>
    </div>
);
export default ResultCard;
