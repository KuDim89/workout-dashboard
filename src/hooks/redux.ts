import { useMemo } from 'react';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { type AppDispatch, type RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* export const useHome = () => {
  const { isLoading } = useAppSelector((state) => state.home);
  return isLoading;
}; */

/* export const useHome = () => {
  const {isLoading, error }  = useAppSelector((state) => state.home);
  return useMemo(() => [isLoading, error] as const, [isLoading, error]);
} */

export const useUserCredentials = () => {
  const { email, password, loginTime } = useAppSelector((state) => state.user);
  return useMemo(
    () => ({ email, password, loginTime }),
    [email, password, loginTime],
  );
};

export const useUserLocation = () => {
  const { latitude, longitude, error } = useAppSelector(
    (state) => state.user.location,
  );
  return useMemo(
    () => ({ latitude, longitude, error }),
    [latitude, longitude, error],
  );
};

export const useUserAddress = () => {
  const {
    country,
    city,
    countryCode,
    village,
    county,
    state,
    stateDistrict,
    district,
    municipality,
    fullAddress,
    error,
  } = useAppSelector((state) => state.user.address);
  return useMemo(
    () => ({
      country,
      city,
      countryCode,
      village,
      county,
      state,
      stateDistrict,
      district,
      municipality,
      fullAddress,
      error,
    }),
    [
      country,
      city,
      countryCode,
      village,
      county,
      state,
      stateDistrict,
      district,
      municipality,
      fullAddress,
      error,
    ],
  );
};
