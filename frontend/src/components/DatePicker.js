import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../static/date-picker.css';

function DatePicker(props: ReactDatePickerProps) {
  const { isClearable = false, showPopperArrow = false, ...rest } = props;

  return (
    <div className="dark-theme">
      <ReactDatePicker
        isClearable={isClearable}
        timeFormat='HH:mm'
        showPopperArrow={showPopperArrow}
        className="react-datapicker__input-text"
        {...rest}
      />
    </div>
  );
}

export default DatePicker;
