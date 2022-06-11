import React from "react";

const TwButtonElement = (props) => {
    return (
        <button type="button"
                className={props.Class + " relative mx-auto z-10 mobile-btn flex justify-center items-center bg-SeabiscuitMainThemeColor text-SeabiscuitWhiteThemeColor w-full transition ease-in duration-200 text-center text-base font-normal focus:outline-none uppercase hover:bg-SeabiscuitSecondaryThemeColor hover:text-SeabiscuitMainThemeColor"}>
            <span className='mr-3'>{props.Text}</span>
            <svg className="absolute right-5" width="13" height="13" viewBox="0 0 13 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path className="icon transition ease-in duration-200"
                      d="M0 6.5C0 6.05127 0.363769 5.6875 0.8125 5.6875H9.87179L5.91095 1.72666C5.58722 1.40293 5.59186 0.876646 5.92125 0.558678V0.558678C6.24252 0.248547 6.75305 0.253051 7.0688 0.568802L12.9356 6.43565C12.9712 6.47119 12.9712 6.52881 12.9356 6.56435L7.07001 12.43C6.75521 12.7448 6.2448 12.7448 5.93001 12.43V12.43C5.61623 12.1162 5.61509 11.6078 5.92746 11.2926L9.87179 7.3125H0.8125C0.363768 7.3125 0 6.94873 0 6.5V6.5Z"
                      fill="white"/>
            </svg>
        </button>
    );
}
export {TwButtonElement};
