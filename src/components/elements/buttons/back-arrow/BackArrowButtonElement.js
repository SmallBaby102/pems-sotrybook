import React from "react";

const BackArrowButtonElement = (props) => {
    return (
        <span className="back-arrow">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6166 11H4.58331" stroke="#120D26" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M11 17.4167L4.58331 11L11 4.58334" stroke="#120D26" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </span>
    );
}
export {BackArrowButtonElement};
