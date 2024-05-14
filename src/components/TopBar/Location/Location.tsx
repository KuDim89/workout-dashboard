import React, { type FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import {
  useAppDispatch,
  useUserAddress,
  useUserLocation,
} from '../../../hooks/redux';
import { fetchUserAddress } from '../../../store/slices/user/userActionCreators';

interface IProps {
  isFullInformation: boolean;
}

export const Location: FC<IProps> = ({ isFullInformation }) => {
  const dispatch = useAppDispatch();
  const { latitude, longitude } = useUserLocation();
  const { country, city, village } = useUserAddress();

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      void dispatch(fetchUserAddress(latitude, longitude));
    }
  }, [latitude, longitude]);

  return (
    <>
      {isFullInformation && (
        <Typography mr={1}>{village ?? city ?? country}</Typography>
      )}
    </>
  );
};
