import React from "react";

const PrimaryButton: React.FC<{onClick?: ()=>void, caption: string, disabled?: boolean, className?: string}> = ({onClick, caption, disabled, className}) => {
  return (
    <>
      <button onClick={onClick}
        type="button"
        className={"bg-SeabiscuitMainThemeColor text-SeabiscuitWhiteThemeColor " +
          className +
          " text-sm rounded-xl border border-solid border-SeabiscuitGrayLight100ThemeColor px-4 py-4 mb-2"
        }>
        {caption}
      </button>
    </>
  );
}
export default PrimaryButton;
