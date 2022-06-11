import React from "react";

const HideShowIconElement = () => {
    return (
        <span className="absolute inset-y-0 right-0 flex items-center pl-3 pr-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.0955 17.9608C11.3879 17.9865 11.6894 18 12 18C16.9091 18 21 12 21 12C21 12 20.3304 11.0179 19.2079 9.84839L11.0955 17.9608Z"
                      fill="#979797"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14.5051 6.49485C13.7076 6.18695 12.8665 6 12 6C5.45455 6 3 12 3 12C3 12 3.75006 13.8335 5.52661 15.4734L9 12C9 10.3431 10.3431 9 12 9L14.5051 6.49485Z"
                      fill="#979797"/>
                <rect opacity="0.3" x="5.09998" y="18.4351" width="19" height="2"
                      transform="rotate(-45 5.09998 18.4351)" fill="#979797"/>
            </svg>
        </span>
    );
}
export {HideShowIconElement};
