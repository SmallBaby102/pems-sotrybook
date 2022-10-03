import Zeotis from "./assets/Sponsers/zeotis.png";
import { useState } from "react";
import Prototype01AccElement from "./Prototype01AccElement";

const Prototype01PrizeListTabButton: React.FC<{
    title: string;
    onClick?: () => any;
    active: boolean;
}> = ({ title, onClick, active }) => (
    <button
        onClick={onClick}
        className={`px-4 py-1 rounded-full text-[#122B46] ${
            active &&
            `bg-gray-100 md:bg-transparent md:font-medium md:border-b-2 md:border-[#122B46] md:border-solid md:rounded-none`
        }`}
    >
        {title}
    </button>
);

const Prototype01PrizeList: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");

    return (
        <div>
            <div className="overflow-auto pb-3 mb-3">
                <div className="flex whitespace-nowrap">
                    <Prototype01PrizeListTabButton
                        title="Equitation"
                        active={activeTab === "1"}
                        onClick={() => setActiveTab("1")}
                    />
                    <Prototype01PrizeListTabButton
                        title="Hunter"
                        active={activeTab === "2"}
                        onClick={() => setActiveTab("2")}
                    />
                    <Prototype01PrizeListTabButton
                        title="Classic"
                        active={activeTab === "3"}
                        onClick={() => setActiveTab("3")}
                    />
                    <Prototype01PrizeListTabButton
                        title="Derbys"
                        active={activeTab === "4"}
                        onClick={() => setActiveTab("4")}
                    />
                    <Prototype01PrizeListTabButton
                        title="Leagues"
                        active={activeTab === "5"}
                        onClick={() => setActiveTab("5")}
                    />
                    <Prototype01PrizeListTabButton
                        title="Jumpers"
                        active={activeTab === "6"}
                        onClick={() => setActiveTab("6")}
                    />
                </div>
            </div>
            <div className="mt-4">
                {activeTab === "1" && (
                    <div>
                        <Prototype01AccElement
                            open={true}
                            title="Pony Hunter Breeding"
                            year="1938"
                            info={{
                                icon: Zeotis,
                                title: "Ariat proudly presents",
                                items: [
                                    {
                                        item: "Pony Hunter Breeding Yearling",
                                        registered: "15",
                                        price: "$175",
                                        class: "$60",
                                    },
                                    {
                                        item: "Pony Hunter Breeding 2 Year Old",
                                        registered: "05",
                                        price: "$175",
                                        class: "$60",
                                    },
                                    {
                                        item: "Pony Hunter Breeding 3 Year Old",
                                        registered: "09",
                                        price: "$175",
                                        class: "$60",
                                    },
                                ],
                            }}
                        />
                        <Prototype01AccElement
                            open={false}
                            title="Pony Hunter Breeding"
                            year="1938"
                            info={{
                                icon: Zeotis,
                                title: "Ariat proudly presents",
                                items: [
                                    {
                                        item: "Pony Hunter Breeding Yearling",
                                        registered: "15",
                                        price: "$175",
                                        class: "$60",
                                    },
                                    {
                                        item: "Pony Hunter Breeding 2 Year Old",
                                        registered: "05",
                                        price: "$175",
                                        class: "$60",
                                    },
                                    {
                                        item: "Pony Hunter Breeding 3 Year Old",
                                        registered: "09",
                                        price: "$175",
                                        class: "$60",
                                    },
                                ],
                            }}
                        />
                        <Prototype01AccElement
                            open={false}
                            title="Pony Hunter Breeding"
                            year="1938"
                            info={{
                                icon: Zeotis,
                                title: "Ariat proudly presents",
                                items: [
                                    {
                                        item: "Pony Hunter Breeding Yearling",
                                        registered: "15",
                                        price: "$175",
                                        class: "$60",
                                    },
                                    {
                                        item: "Pony Hunter Breeding 2 Year Old",
                                        registered: "05",
                                        price: "$175",
                                        class: "$60",
                                    },
                                    {
                                        item: "Pony Hunter Breeding 3 Year Old",
                                        registered: "09",
                                        price: "$175",
                                        class: "$60",
                                    },
                                ],
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
export default Prototype01PrizeList;
