import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { format } from 'date-fns';
import dayjs from 'dayjs';

export default function DiaryDateCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  console.log(selectedDate);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          slots={{ textField: TextField }}
          slotProps={{ textField: { variant: 'standard' } }}
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            div: {
              border: 'none',
            },
            '& .MuiInputBase-root': {
              border: 'none !important',
            },
            '& .MuiInputBase-input': {
              fontSize: '16px',
              border: 'none !important',
            },
          }}
          format="dd.MM.yyyy"
          minDate={dayjs('2020-01-01')}
          maxDate={dayjs(new Date())}
          value={selectedDate}
          onChange={newValue => {
            setSelectedDate(newValue);
          }}
          // renderInput={params => (
          //   <TextField
          //     // InputProps={{
          //     //   disableUnderline: true,
          //     // }}
          //     variant="filled"
          //     value={selectedDate ? format(selectedDate, 'dd.MM.yyyy') : ''}
          //     // sx={{
          //     //   '& .MuiInputBase-root': {
          //     //     border: 'none !important', // убираем рамку
          //     //   },
          //     //   '& .MuiInputBase-input': {
          //     //     fontSize: '36px',
          //     //     border: 'none !important', // размер шрифта
          //     //   },
          //     // }}
          //   />
          // )}
          adapter={AdapterDateFns}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
