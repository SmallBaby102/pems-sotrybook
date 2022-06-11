import React from "react";

function ButtonElement(props){
    const [show, setShow] = React.useState();
    return(
        <>
            <button onClick={() => setShow(!show)} type="button" id={props.Id} className={(show ? "bg-SeabiscuitMainThemeColor text-SeabiscuitWhiteThemeColor " : "bg-SeabiscuitWhiteThemeColor text-SeabiscuitGray200ThemeColor ") + props.Class +" text-sm inline-block rounded-lg border border-solid border-SeabiscuitGrayLight100ThemeColor h-11 px-4 py-2 mr-3 mb-2"}>
                {props.Text}
            </button>
        </>
    );
}
export default ButtonElement;
