import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import {
  useAppDispatch,
  useUserAddress,
  useUserLocation,
} from '../../../hooks/redux';
import { fetchUserAddress } from '../../../store/slices/user/userActionCreators';

export const Location = () => {
  const dispatch = useAppDispatch();
  const { latitude, longitude } = useUserLocation();
  const { country, city, village } = useUserAddress();

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      void dispatch(fetchUserAddress(latitude, longitude));
    }
  }, [latitude, longitude]);

  return <Typography>{village ?? city ?? country}</Typography>;
};
