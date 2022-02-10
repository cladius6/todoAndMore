import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { useColorMode, Input } from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';
import '../static/date-picker.css';

function DatePicker(props: ReactDatePickerProps) {
  const {
  isClearable = false,
  showPopperArrow = false,
  ...rest
} = props

  return (
    <div className='dark-theme'>
      <ReactDatePicker
        isClearable={isClearable}
        showPopperArrow={showPopperArrow}
        className="react-datapicker__input-text"
        {...rest}
      />
    </div>
  );
};

export default DatePicker
