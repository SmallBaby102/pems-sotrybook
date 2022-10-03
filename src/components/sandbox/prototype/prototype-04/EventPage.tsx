import { useState } from "react";
import ResultCard from "./global/ResultCard";

import Zeotis from "./assets/zeotis.png";
import Minus from "./assets/minus-icon.svg";
import Plus from "./assets/plus-icon.svg";
import backIcon from "./assets/back-icon.svg";
import profile1 from "./assets/profile-pic-1.png";
import profile2 from "./assets/profile-pic-2.png";
import profile3 from "./assets/profile-pic-3.png";
import profile4 from "./assets/profile-pic-4.png";

const AccElement: React.FC<{
    open: boolean;
    year: string;
    title: string;
    info: Array<any>;
}> = ({ open, year, title, info }) => {
    const [isOpen, setIsOpen] = useState(open);
    const [childrenOpen, setChildrenOpen] = useState(
        info.map((item) => item.open)
    );
    return (
        <div
            className="border-gray-300 border-solid border-[1px] rounded-md p-2 mt-2 overflow-hidden"
            style={{
                height: isOpen ? "auto" : 40,
            }}
        >
            <div className="grid grid-cols-[60px_auto_50px] items-center text-[14px] font-bold cursor-pointer">
                <div
                    style={{
                        color: isOpen ? "unset" : "#aaa",
                        fontWeight: isOpen ? "unset" : "normal",
                    }}
                >
                    {year}
                </div>
                <div
                    style={{
                        color: isOpen ? "unset" : "#aaa",
                        fontWeight: isOpen ? "unset" : "normal",
                    }}
                >
                    {title}
                </div>
                <div className="text-right" onClick={() => setIsOpen(!isOpen)}>
                    <img
                        src={isOpen ? Minus : Plus}
                        alt="plus"
                        className="ml-auto"
                    />
                </div>
            </div>
            <div className="grid grid-cols-[60px_auto_50px] items-center mt-3">
                {info?.map((item, index) => (
                    <>
                        <div className="grid pb-2 col-span-2 grid-cols-1 md:grid-cols-[55%_15%_15%_15%] items-center">
                            <div className="">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className="w-[20px] h-[20px] rounded-full drop-shadow-md"
                                    />
                                    <p className="m-0 text-[#3C4B7199] text-[12px]">
                                        {item.description}
                                    </p>
                                </div>
                                <p className="font-semibold text-[14px]">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                        <div
                            className="text-right"
                            onClick={() =>
                                setChildrenOpen([
                                    ...childrenOpen.map((v, i) =>
                                        i === index ? !childrenOpen[index] : v
                                    ),
                                ])
                            }
                        >
                            <img
                                src={childrenOpen[index] ? Minus : Plus}
                                alt="plus"
                                className="ml-auto"
                            />
                        </div>
                        <div
                            className="col-span-3 mb-3 overflow-hidden border-b-[#eee] border-solid border-[1px] border-transparent"
                            style={{
                                height: childrenOpen[index] ? "auto" : 0,
                                paddingBottom: childrenOpen[index] ? 8 : 0,
                            }}
                        >
                            {item.members?.map((card: any) => (
                                <ResultCard
                                    title={card.title}
                                    description={card.description}
                                    image={card.profilePic}
                                    rate={card.rate}
                                />
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

const ResultsTabButton: React.FC<{
    title: string;
    onClick?: () => any;
    active: boolean;
}> = ({ title, onClick, active }) => (
    <button
        onClick={onClick}
        className={`px-4 py-1 rounded-full text-[#122B46] ${
            active &&
            `bg-gray-100 md:bg-transparent md:text-[#F7074F] md:font-medium md:border-b-2 md:border-[#F7074F] md:border-solid md:rounded-none`
        }`}
    >
        {title}
    </button>
);

const EventPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState("1");

    return (
        <div className="p-6">
            <div className="text-[24px] flex items-center gap-2">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                <div>Results</div>
            </div>
            <div className="overflow-auto pb-3 mb-3 mt-6">
                <div className="flex whitespace-nowrap">
                    <ResultsTabButton
                        title="Equitation"
                        active={activeTab === "1"}
                        onClick={() => setActiveTab("1")}
                    />
                    <ResultsTabButton
                        title="Hunter"
                        active={activeTab === "2"}
                        onClick={() => setActiveTab("2")}
                    />
                    <ResultsTabButton
                        title="Classic"
                        active={activeTab === "3"}
                        onClick={() => setActiveTab("3")}
                    />
                    <ResultsTabButton
                        title="Derbys"
                        active={activeTab === "4"}
                        onClick={() => setActiveTab("4")}
                    />
                    <ResultsTabButton
                        title="Leagues"
                        active={activeTab === "5"}
                        onClick={() => setActiveTab("5")}
                    />
                    <ResultsTabButton
                        title="Jumpers"
                        active={activeTab === "6"}
                        onClick={() => setActiveTab("6")}
                    />
                </div>
            </div>
            <div className="mt-4">
                {activeTab === "1" && (
                    <div>
                        <AccElement
                            open={false}
                            title="Pony Hunter Breeding"
                            year="1938"
                            info={[
                                {
                                    open: false,
                                    icon: Zeotis,
                                    description: "Ariat proudly presents",
                                    title: "Pony Hunter Breeding Yearling",
                                    members: [
                                        {
                                            profilePic: profile1,
                                            title: "Alex Less",
                                            description:
                                                "Australian • Zone 5 • Socks",
                                            rate: 1,
                                        },
                                        {
                                            profilePic: profile2,
                                            title: "Jenny Wilk",
                                            description:
                                                "American • Zone 4 • Kilby",
                                            rate: 2,
                                        },
                                        {
                                            profilePic: profile3,
                                            title: "Jemery Goss",
                                            description:
                                                "American • Zone 5 • Handy Hoov",
                                            rate: 3,
                                        },
                                        {
                                            profilePic: profile4,
                                            title: "Alexander Wilson",
                                            description:
                                                "American • Zone 3 • Whimper",
                                            rate: 4,
                                        },
                                    ],
                                },
                                {
                                    open: false,
                                    icon: Zeotis,
                                    description: "Ariat proudly presents",
                                    title: "Pony Hunter Breeding Yearling",
                                    members: [
                                        {
                                            profilePic: profile1,
                                            title: "Alex Less",
                                            description:
                                                "Australian • Zone 5 • Socks",
                                            rate: 8,
                                        },
                                    ],
                                },
                            ]}
                        />
                        <AccElement
                            open={true}
                            title="Pony Hunter Breeding"
                            year="1938"
                            info={[
                                {
                                    open: true,
                                    icon: Zeotis,
                                    description: "Ariat proudly presents",
                                    title: "Pony Hunter Breeding Yearling",
                                    members: [
                                        {
                                            profilePic: profile1,
                                            title: "Alex Less",
                                            description:
                                                "Australian • Zone 5 • Socks",
                                            rate: 1,
                                        },
                                        {
                                            profilePic: profile2,
                                            title: "Jenny Wilk",
                                            description:
                                                "American • Zone 4 • Kilby",
                                            rate: 2,
                                        },
                                        {
                                            profilePic: profile3,
                                            title: "Jemery Goss",
                                            description:
                                                "American • Zone 5 • Handy Hoov",
                                            rate: 3,
                                        },
                                        {
                                            profilePic: profile4,
                                            title: "Alexander Wilson",
                                            description:
                                                "American • Zone 3 • Whimper",
                                            rate: 4,
                                        },
                                    ],
                                },
                                {
                                    open: false,
                                    icon: Zeotis,
                                    description: "Ariat proudly presents",
                                    title: "Pony Hunter Breeding Yearling",
                                    members: [
                                        {
                                            profilePic: profile1,
                                            title: "Alex Less",
                                            description:
                                                "Australian • Zone 5 • Socks",
                                            rate: 8,
                                        },
                                    ],
                                },
                            ]}
                        />
                        <AccElement
                            open={false}
                            title="Pony Hunter Breeding"
                            year="1938"
                            info={[
                                {
                                    open: false,
                                    icon: Zeotis,
                                    description: "Ariat proudly presents",
                                    title: "Pony Hunter Breeding Yearling",
                                    members: [
                                        {
                                            profilePic: profile1,
                                            title: "Alex Less",
                                            description:
                                                "Australian • Zone 5 • Socks",
                                            rate: 1,
                                        },
                                        {
                                            profilePic: profile2,
                                            title: "Jenny Wilk",
                                            description:
                                                "American • Zone 4 • Kilby",
                                            rate: 2,
                                        },
                                        {
                                            profilePic: profile3,
                                            title: "Jemery Goss",
                                            description:
                                                "American • Zone 5 • Handy Hoov",
                                            rate: 3,
                                        },
                                        {
                                            profilePic: profile4,
                                            title: "Alexander Wilson",
                                            description:
                                                "American • Zone 3 • Whimper",
                                            rate: 4,
                                        },
                                    ],
                                },
                                {
                                    open: false,
                                    icon: Zeotis,
                                    description: "Ariat proudly presents",
                                    title: "Pony Hunter Breeding Yearling",
                                    members: [
                                        {
                                            profilePic: profile1,
                                            title: "Alex Less",
                                            description:
                                                "Australian • Zone 5 • Socks",
                                            rate: 8,
                                        },
                                    ],
                                },
                            ]}
                        />
                        <AccElement
                            open={false}
                            title="Pony Hunter Breeding"
                            year="1938"
                            info={[
                                {
                                    open: false,
                                    icon: Zeotis,
                                    description: "Ariat proudly presents",
                                    title: "Pony Hunter Breeding Yearling",
                                    members: [
                                        {
                                            profilePic: profile1,
                                            title: "Alex Less",
                                            description:
                                                "Australian • Zone 5 • Socks",
                                            rate: 1,
                                        },
                                        {
                                            profilePic: profile2,
                                            title: "Jenny Wilk",
                                            description:
                                                "American • Zone 4 • Kilby",
                                            rate: 2,
                                        },
                                        {
                                            profilePic: profile3,
                                            title: "Jemery Goss",
                                            description:
                                                "American • Zone 5 • Handy Hoov",
                                            rate: 3,
                                        },
                                        {
                                            profilePic: profile4,
                                            title: "Alexander Wilson",
                                            description:
                                                "American • Zone 3 • Whimper",
                                            rate: 4,
                                        },
                                    ],
                                },
                                {
                                    open: false,
                                    icon: Zeotis,
                                    description: "Ariat proudly presents",
                                    title: "Pony Hunter Breeding Yearling",
                                    members: [
                                        {
                                            profilePic: profile1,
                                            title: "Alex Less",
                                            description:
                                                "Australian • Zone 5 • Socks",
                                            rate: 8,
                                        },
                                    ],
                                },
                            ]}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
export default EventPage;
