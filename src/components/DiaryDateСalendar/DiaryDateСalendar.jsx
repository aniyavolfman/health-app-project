// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { useState } from 'react';
// import { TextField } from '@mui/material';
// import { format } from 'date-fns';
// import dayjs from 'dayjs';


// export default function DiaryDateCalendar({ date, onChange }) {
  
//   // const [selectedDate, setSelectedDate] = useState(new Date());
//   //console.log(format(date, 'yyyy-MM-dd'), onChange);

//   const formatDate = format(date, 'yyyy-MM-dd');
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DemoContainer components={['DatePicker']}>
//         <DatePicker
//           slots={{ textField: TextField }}
//           slotProps={{ textField: { variant: 'standard' } }}
//           InputProps={{
//             disableUnderline: true,
//           }}
//           sx={{
//             div: {
//               border: 'none',
//             },
//             '& .MuiInputBase-root': {
//               border: 'none !important',
//             },
//             '& .MuiInputBase-input': {
//               fontSize: '16px',
//               border: 'none !important',
//             },
//           }}
//           format="dd.MM.yyyy"
//           minDate={dayjs('2020-01-01')}
//           maxDate={dayjs(new Date())}
//           value={date}
//           onChange={onChange(formatDate)}
//           adapter={AdapterDateFns}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
