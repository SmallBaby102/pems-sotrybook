import { useState } from "react";
import { upcomingEventsData } from "./TableSampleData";

import searchIcon from "./assets/search-icon-gray.svg";
import filterIcon from "./assets/filter-icon.svg";
import horseIcon from "./assets/horse-icon.svg";
import licenseIcon from "./assets/licensed.svg";
import locationIcon from "./assets/location.svg";
import dateIcon from "./assets/date-icon.svg";
import arrowIcon from "./assets/arrow.svg";
import eventOrg from "./assets/event-org.png";
import SearchFilterModal from "./SearchFilterModal";
import priceIcon from "./assets/price-icon.svg";
import vendorsIcon from "./assets/vendor-icon.svg";
import registeredIcon from "./assets/registered-icon.svg";

const TableCell: React.FC<{ title: string; icon: string }> = ({
    title,
    icon,
}) => (
    <div className="flex items-center gap-2 text-[14px]">
        <img src={icon} alt="icon" />
        <span className="whitespace-nowrap text-ellipsis overflow-hidden">
            {title}
        </span>
    </div>
);
const TableRow: React.FC<{
    icon: string;
    name: string;
    discipline: string;
    eventType: string;
    location: string;
    startDate: string;
    registered: string;
    vendors: string;
    price: string;
    onClick: () => void;
}> = ({
    icon,
    name,
    discipline,
    eventType,
    location,
    startDate,
    registered,
    vendors,
    price,
    onClick,
}) => (
    <>
        <div className="flex items-center font-bold gap-2 text-[14px]">
            <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={icon}
                    alt="icon"
                />
            </div>
            <span>{name}</span>
        </div>
        <TableCell title={discipline} icon={horseIcon} />
        <TableCell title={eventType} icon={licenseIcon} />
        <TableCell title={location} icon={locationIcon} />
        <TableCell title={startDate} icon={dateIcon} />
        <TableCell title={registered} icon={registeredIcon} />
        <TableCell title={vendors} icon={vendorsIcon} />
        <TableCell title={price} icon={priceIcon} />

        <div className="flex items-center">
            <button className="bg-[#F7074F19] text-[#F7074F] rounded-full flex items-center px-6 py-3 gap-3">
                More <img src={arrowIcon} alt="arrow" />
            </button>
        </div>
    </>
);

const SearchCard: React.FC<{ title: string; icon: string }> = ({
    title,
    icon,
}) => (
    <div className="flex items-center gap-2 hover:bg-[#F7074F10] px-6 py-4 rounded-xl">
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={icon} alt="icon" className="object-cover w-full h-full" />
        </div>
        <div className="text-[14px] font-bold ">{title}</div>
    </div>
);

const SearchShows: React.FC = () => {
    const [search, setSearch] = useState("");
    const [filtersModalShow, setFiltersModalShow] = useState(false);

    return (
        <div className="relative bg-white p-6 shadow rounded-2xl overflow-hidden min-w-[1200px]">
            <SearchFilterModal
                onApply={() => {}}
                show={filtersModalShow}
                onHide={() => setFiltersModalShow(false)}
            />
            <div
                className={`relative z-20 flex gap-1 items-center border-[#D3DAEE] border-solid border-[1px] rounded-full pl-4 pr-2 py-1 mt-4 ${
                    search
                        ? "!border-transparent !border-b-[#D3DAEE] !rounded-none"
                        : ""
                }`}
            >
                <div>
                    <img src={searchIcon} alt="search" />
                </div>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 border-none outline-none text-[14px]"
                    type="text"
                    placeholder="Search name ..."
                />
                <button
                    className="bg-[#F7074F18] rounded-full p-1"
                    onClick={() => setFiltersModalShow(true)}
                >
                    <img src={filterIcon} alt="filter" />
                </button>
            </div>
            <div
                className={`${
                    search ? "" : "hidden"
                } z-10 absolute top-[34px] bg-white shadow-slate-300 shadow-md left-[20px] right-[20px] p-6 pt-16 rounded-2xl`}
            >
                <SearchCard
                    title="USEF Championship Dressage IV"
                    icon={eventOrg}
                />
                <SearchCard title="USEF spring trials 2023" icon={eventOrg} />
                <SearchCard
                    title="USEF Championship Dressage III"
                    icon={eventOrg}
                />
            </div>
            {/* Backdrop: */}
            <div
                className={`${
                    search ? "" : "hidden"
                } fixed inset-0 bg-[rgba(0,0,0,.1)]`}
            ></div>

            <div className="overflow-auto w-full pr-2">
                <div className="grid grid-cols-[1fr_repeat(7,minmax(100px,160px))_100px] text-[#1F4173] min-w-[1000px] gap-x-4 gap-y-6">
                    <div>&nbsp;</div>
                    <div className="text-[12px] font-semibold translate-y-6">
                        Discipline
                    </div>
                    <div className="text-[12px] font-semibold translate-y-6">
                        Event type
                    </div>
                    <div className="text-[12px] font-semibold translate-y-6">
                        Location
                    </div>
                    <div className="text-[12px] font-semibold translate-y-6">
                        Start date
                    </div>
                    <div className="text-[12px] font-semibold translate-y-6">
                        Registered
                    </div>
                    <div className="text-[12px] font-semibold translate-y-6">
                        Vendors
                    </div>
                    <div className="text-[12px] font-semibold translate-y-6">
                        Sponsor/Vendor prices
                    </div>
                    <div>&nbsp;</div>
                    <div className="col-span-9 border-b-[#D3DAEE] border-b-solid border-b-[1px]"></div>

                    {upcomingEventsData.map((item) => (
                        <>
                            <TableRow {...item} onClick={() => {}} />
                            {/* Table border */}
                            <div className="col-span-9 border-b-[#D3DAEE] border-b-solid border-b-[1px]"></div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchShows;
