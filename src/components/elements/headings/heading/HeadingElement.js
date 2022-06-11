import React from "react";
import './HeadingElement.css';
function HeadingElement (props){
    return(
        <>
            <div className={props.classname}>
                <h3>{props.title}</h3>
            </div>
        </>
    );
}

export default HeadingElement;
