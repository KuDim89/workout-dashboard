import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';

import {
  useAppDispatch,
  useUserAddress,
  useUserLocation,
} from '../../../hooks/redux';
import { fetchUserAddress } from '../../../store/slices/user/userActionCreators';

const DATE_FORMAT = 'D MMMM YYYY';
const TIME_FORMAT = 'HH:mm:ss';

export const Date = () => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(dayjs());
  const { latitude, longitude } = useUserLocation();
  const { country, city, village } = useUserAddress();

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      void dispatch(fetchUserAddress(latitude, longitude));
    }
  }, [latitude, longitude]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box display="flex">
      <Box sx={{ width: '172px', mr: 1 }}>
        {date.format(DATE_FORMAT)} | {date.format(TIME_FORMAT)}
      </Box>
      {village ?? city ?? country}
    </Box>
  );
};
