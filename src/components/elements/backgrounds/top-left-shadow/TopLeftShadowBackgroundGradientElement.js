import React from "react";

const TopLeftShadowBackgroundGradientElement = () => {
    return (
        <>
        <span className="absolute top-0 -left-14">
            <svg width="235" height="274" viewBox="0 0 235 274" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_83_527)">
            <ellipse cx="40.5" cy="86.9714" rx="94.5" ry="86.9714" fill="url(#paint0_angular_83_527)"
                     fillOpacity="0.2"/>
            </g>
            <defs>
            <filter id="filter0_f_83_527" x="-154" y="-100" width="389" height="373.943" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_83_527"/>
            </filter>
            <radialGradient id="paint0_angular_83_527" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(40.5 86.9714) rotate(90) scale(152.102 165.268)">
            <stop stopColor="#B9DAFB"/>
            <stop offset="0.791667" stopColor="#9895EE"/>
            <stop offset="0.9999" stopColor="#ECACAD"/>
            <stop offset="1" stopColor="#C55492"/>
            </radialGradient>
            </defs>
            </svg>
        </span>
        </>
    );
}
export {TopLeftShadowBackgroundGradientElement};
