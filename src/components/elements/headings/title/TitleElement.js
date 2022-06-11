import React from "react";

const TitleElement = (props) => {
    return (
        <h2 className={"text-SeabiscuitDark600ThemeColor text-2xl font-normal mb-0.5" + props.Class}>{props.Text}</h2>
    );
}
export {TitleElement};
