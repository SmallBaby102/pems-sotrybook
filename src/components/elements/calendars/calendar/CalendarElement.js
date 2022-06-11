import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CalendarElement.css';

const Calander = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      className="bg-SeabiscuitWhiteThemeColor text-sm text-left rounded-lg border border-solid border-SeabiscuitGrayLight100ThemeColor text-SeabiscuitGray200ThemeColor h-11 px-3 py-2 mr-3 placeholder-SeabiscuitGray200ThemeColor react-datepickers relative"
      onChange={(date) => setStartDate(date)}
      placeholderText="Choose from Calendar"
    />
  );
};
export default Calander;
