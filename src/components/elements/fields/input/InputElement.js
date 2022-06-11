import React from "react";

function InputElement(props){
    return(
        <div class="relative">
            <input type={props.Type} id={props.Id} className={"bg-SeabiscuitWhiteThemeColor text-sm text-center rounded-lg border border-solid border-SeabiscuitGrayLight100ThemeColor text-SeabiscuitDark200ThemeColor placeholder-SeabiscuitGray100ThemeColor h-11 px-3 py-2 mr-3 " + (props.Class)} placeholder={props.Placeholder}/>
        </div>
    );
}
export default InputElement;
