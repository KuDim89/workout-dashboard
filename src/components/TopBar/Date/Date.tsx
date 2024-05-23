import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';

const DATE_FORMAT = 'D MMMM YYYY';
const TIME_FORMAT = 'HH:mm:ss';

export const Date = () => {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box>
      {date.format(DATE_FORMAT)} | {date.format(TIME_FORMAT)}
    </Box>
  );
};
