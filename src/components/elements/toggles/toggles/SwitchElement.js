import React from "react";
import Style from "./SwitchElement.css";

const SwitchElement = ({ on, onSwitch }) => {
  return (
    <button onClick={onSwitch} className={"relative tw-button " + (on ? "bg-SeabiscuitGreenThemeColor yes" : "bg-SeabiscuitMainThemeColor no")} value={on ? "Yes" : "No"}>
        <span className="bg-SeabiscuitWhiteThemeColor"></span>
        <div className={"btn-text text-base text-SeabiscuitWhiteThemeColor " + (on ? "yes" : "no")}>{on ? "Yes" : "No"}</div>
    </button>
  );
};

export default SwitchElement;
