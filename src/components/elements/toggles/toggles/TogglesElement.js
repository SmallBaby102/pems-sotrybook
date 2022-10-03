import React from "react";
import SwitchElement from "./SwitchElement";
import ToggleElement from "./ToggleElement";


function TogglesElement({onToggle, on}) {
  // const onToggle = state => {
  //   console.log("ontoggle", state);
  // };
  return (
    <ToggleElement onToggle={onToggle}>
        {({ onToggle }) => (
          <div>
            <SwitchElement on={on} onSwitch={onToggle} />
          </div>
        )}
    </ToggleElement>
  );
}

export default TogglesElement;
