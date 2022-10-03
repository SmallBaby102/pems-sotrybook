import { useState } from "react";
import { stateNames } from "./TableSampleData";

import dateIcon from "./assets/date-icon.svg";
import Prototype04DrawerComponent from "../prototype-04/global/Prototype04DrawerComponent";
import Prototype04Input from "./../prototype-04/global/Prototype04Input";
import Prototype04Button from "./../prototype-04/global/Prototype04Button";

const SectionHeader: React.FC<{ caption: string }> = ({ caption }) => (
    <h6>{caption}</h6>
);

const SelectionButton: React.FC<{
    caption: string;
    onClick: (value: string) => void;
    selected: boolean;
}> = ({ caption, onClick, selected }) => (
    <button
        onClick={() => onClick(caption)}
        className={`border-[#BCC6D5] border-solid border-[1px] rounded-md text-[#BCC6D5] py-4 px-6 ${
            selected ? "!bg-[#F7074F] !text-white" : ""
        }`}
    >
        {caption}
    </button>
);

const SelectionButtonContainer: React.FC = (props) => (
    <div className="flex gap-2 my-2">{props.children}</div>
);

const LocationCheckbox: React.FC<{
    title: string;
    onChange: (e: any, title: string) => void;
    checked: boolean;
}> = ({ title, onChange, checked }) => (
    <label className="flex items-center gap-2 text-[14px] text-[#BCC6D5]">
        <input
            type="checkbox"
            onChange={(e) => onChange(e, title)}
            checked={checked}
        />
        {title}
    </label>
);

const SearchFilterModal: React.FC<{
    onApply: (filters: any) => void;
    show: boolean;
    onHide: () => void;
}> = ({ onApply, show, onHide }) => {
    interface IObjectKeys {
        [key: string]: any;
    }

    interface filterTypes extends IObjectKeys {
        descipline: string[];
        eventType: string[];
        startDate: string;
        endDate: string;
        location: string[];
    }
    const [filter, setFilter] = useState<filterTypes>({
        descipline: [],
        eventType: [],
        startDate: "",
        endDate: "",
        location: [],
    });

    const filterSelectorHandle = (e: string, key: string) => {
        if (filter[key].some((item: string) => item === e)) {
            setFilter({
                ...filter,
                [key]: [...filter[key].filter((item: string) => item !== e)],
            });
        } else {
            setFilter({ ...filter, [key]: [...filter[key], e] });
        }
    };

    const filterCheckboxHandle = (e: any, title: string) => {
        if (e.target.checked) {
            setFilter({ ...filter, location: [...filter.location, title] });
        } else {
            setFilter({
                ...filter,
                location: [...filter.location.filter((item) => item !== title)],
            });
        }
    };

    const clearFilterHandle = () => {
        setFilter({
            descipline: [],
            eventType: [],
            startDate: "",
            endDate: "",
            location: [],
        });
    };

    return (
        <div>
            <Prototype04DrawerComponent
                show={show}
                onHide={onHide}
                title="filters"
                maxWidth={680}
            >
                <SectionHeader caption="Descipline" />

                <SelectionButtonContainer>
                    <SelectionButton
                        caption="Eventing"
                        onClick={(e) => filterSelectorHandle(e, "descipline")}
                        selected={filter.descipline.some(
                            (item) => item === "Eventing"
                        )}
                    />
                    <SelectionButton
                        caption="Dressage"
                        onClick={(e) => filterSelectorHandle(e, "descipline")}
                        selected={filter.descipline.some(
                            (item) => item === "Dressage"
                        )}
                    />
                    <SelectionButton
                        caption="Hunter Jumper"
                        onClick={(e) => filterSelectorHandle(e, "descipline")}
                        selected={filter.descipline.some(
                            (item) => item === "Hunter Jumper"
                        )}
                    />
                </SelectionButtonContainer>
                <SelectionButtonContainer>
                    <SelectionButton
                        caption="Hunter"
                        onClick={(e) => filterSelectorHandle(e, "descipline")}
                        selected={filter.descipline.some(
                            (item) => item === "Hunter"
                        )}
                    />
                    <SelectionButton
                        caption="Jumper"
                        onClick={(e) => filterSelectorHandle(e, "descipline")}
                        selected={filter.descipline.some(
                            (item) => item === "Jumper"
                        )}
                    />
                    <SelectionButton
                        caption="Equitation"
                        onClick={(e) => filterSelectorHandle(e, "descipline")}
                        selected={filter.descipline.some(
                            (item) => item === "Equitation"
                        )}
                    />
                    <SelectionButton
                        caption="All"
                        onClick={(e) => filterSelectorHandle(e, "descipline")}
                        selected={filter.descipline.some(
                            (item) => item === "All"
                        )}
                    />
                </SelectionButtonContainer>
                <div className="border-t-[1px] border-solid border-gray-300 pt-2 mt-6">
                    <SectionHeader caption="Event Type" />
                    <SelectionButtonContainer>
                        <SelectionButton
                            caption="Licensed"
                            onClick={(e) =>
                                filterSelectorHandle(e, "eventType")
                            }
                            selected={filter.eventType.some(
                                (item) => item === "Licensed"
                            )}
                        />
                        <SelectionButton
                            caption="Schooling"
                            onClick={(e) =>
                                filterSelectorHandle(e, "eventType")
                            }
                            selected={filter.eventType.some(
                                (item) => item === "Schooling"
                            )}
                        />
                        <SelectionButton
                            caption="Clinic"
                            onClick={(e) =>
                                filterSelectorHandle(e, "eventType")
                            }
                            selected={filter.eventType.some(
                                (item) => item === "Clinic"
                            )}
                        />
                        <SelectionButton
                            caption="Other"
                            onClick={(e) =>
                                filterSelectorHandle(e, "eventType")
                            }
                            selected={filter.eventType.some(
                                (item) => item === "Other"
                            )}
                        />
                    </SelectionButtonContainer>
                </div>
                <div className="border-t-[1px] border-solid border-gray-300 pt-2 mt-6">
                    <SectionHeader caption="Dates" />
                    <div className="flex gap-4">
                        <Prototype04Input
                            type="date"
                            icon={dateIcon}
                            placeholder="Start date"
                            value={filter.startDate}
                            onChange={(e) =>
                                setFilter({
                                    ...filter,
                                    startDate: e.target.value,
                                })
                            }
                        />
                        <Prototype04Input
                            type="date"
                            icon={dateIcon}
                            placeholder="End date"
                            value={filter.endDate}
                            onChange={(e) =>
                                setFilter({
                                    ...filter,
                                    endDate: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="border-t-[1px] border-solid border-gray-300 pt-2 mt-6">
                    <SectionHeader caption="Location" />
                    <div className="grid grid-flow-col grid-rows-[repeat(17,1fr)] gap-2">
                        {stateNames.map((state) => (
                            <LocationCheckbox
                                title={state}
                                onChange={filterCheckboxHandle}
                                checked={filter.location.some(
                                    (item) => item === state
                                )}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex justify-between border-t-[1px] border-solid border-gray-300 pt-4 mt-6">
                    <button
                        className="text-[#1F417388] underline"
                        onClick={clearFilterHandle}
                    >
                        Clear filters
                    </button>
                    <Prototype04Button
                        type={1}
                        caption="Apply"
                        className="w-[240px]"
                        onClick={() => onApply(filter)}
                    />
                </div>
            </Prototype04DrawerComponent>
        </div>
    );
};
export default SearchFilterModal;
