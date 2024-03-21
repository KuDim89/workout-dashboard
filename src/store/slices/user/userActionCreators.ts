import { type AppDispatch } from '../../index';
import GeolocationService from '../../../services/geolocation/geolocation.service';
import {
  saveAddressError,
  saveLocationError,
  saveUserAddress,
  saveUserLocation,
} from './userSlice';
import CustomErrorService from '../../../services/customeError/customeError.service';
import { type ICodeType } from '../../../models/IUser';
import { type IError, type ILocationError } from '../../../models/IError';

const errorCodeDescription: ICodeType = {
  1: "The acquisition of the geolocation information failed because the page didn't have the permission to do it.",
  2: 'The acquisition of the geolocation failed because one or several internal sources of position returned an internal error.',
  3: 'Geolocation information was not obtained in the allowed time.',
};

export const fetchLocation = () => async (dispatch: AppDispatch) => {
  try {
    const location = await GeolocationService.getUserLocation();
    dispatch(saveUserLocation(location));
  } catch (e) {
    const locationError = e as ILocationError;
    dispatch(
      saveLocationError({
        code: 403,
        message: locationError.message,
        description: errorCodeDescription[locationError.code],
      }),
    );
  }
};

export const fetchUserAddress =
  (latitude: number, longitude: number) => async (dispatch: AppDispatch) => {
    try {
      const addressData = await GeolocationService.getLocationName(
        latitude,
        longitude,
      );

      if ('error' in addressData) {
        CustomErrorService.throwError('403', addressData.error);
      }

      dispatch(
        saveUserAddress({
          country: addressData.address?.country,
          city: addressData.address?.city,
          village: addressData.address?.village,
          countryCode: addressData.address?.country_code,
          district: addressData.address?.district,
          county: addressData.address?.county,
          municipality: addressData.address?.municipality,
          state: addressData.address?.state,
          stateDistrict: addressData.address?.state_district,
          fullAddress: addressData?.display_name,
          error: null,
        }),
      );
    } catch (e) {
      const addressError = e as IError;

      dispatch(
        saveAddressError({
          code: addressError.code,
          message: addressError.message,
        }),
      );
    }
  };
