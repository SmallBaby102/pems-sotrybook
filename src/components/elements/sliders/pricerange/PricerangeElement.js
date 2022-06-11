import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import "./PricerangeElement.css";
import images from "../../../utils/images/ImageHelper";

const PricerangeElement = () => {
  const STEP = 1;
  const MIN = 10;
  const MAX = 100;
  const [values, setValues] = useState([25, 75]);

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={values => {
        console.log(values);
        setValues(values);
      }}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            display: "flex",
            width: "100%"
          }}
        >
            <img 
                style={{
                    position: "absolute",
                    top: "0",
                    left: values[0],
                    width: values[1]+'%',
                    height: "51px"
                }}
                src={images.priceRangeChart}  alt={values[0]
            }/>
          <div
            ref={props.ref}
            style={{
              height: "3px",
              marginTop: "51px",
              width: "100%",
              background: getTrackBackground({
                values,
                colors: ["#FDCDDC", "#F7074F", "#FDCDDC"],
                min: MIN,
                max: MAX
              }),
              alignSelf: "center"
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "35px",
            width: "35px",
            borderRadius: "9px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #F7074F"
          }}
        >
            <img src={images.leftRightArrow} alt={values[0]}/>
        </div>
      )}
    />
  );
};

export default PricerangeElement;
