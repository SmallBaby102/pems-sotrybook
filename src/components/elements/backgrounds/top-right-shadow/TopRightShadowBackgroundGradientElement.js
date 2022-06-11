import React from "react";

const TopRightShadowBackgroundGradientElement = () => {
    return (
        <>
        <span className="absolute -top-20 -right-12">
            <svg width="277" height="234" viewBox="0 0 277 234" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" filter="url(#filter0_f_83_528)">
            <ellipse cx="213.5" cy="29.5" rx="113.5" ry="104.5" fill="url(#paint0_angular_83_528)" fillOpacity="0.2"/>
            </g>
            <defs>
            <filter id="filter0_f_83_528" x="0" y="-175" width="427" height="409" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_83_528"/>
            </filter>
            <radialGradient id="paint0_angular_83_528" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(213.5 29.5) rotate(90) scale(182.757 198.497)">
            <stop stopColor="#B9DAFB"/>
            <stop offset="0.0001" stopColor="#9895EE"/>
            <stop offset="0.0002" stopColor="#C55492"/>
            <stop offset="0.266645" stopColor="#ECACAD"/>
            </radialGradient>
            </defs>
            </svg>
        </span>
        </>
    );
}
export {TopRightShadowBackgroundGradientElement};
