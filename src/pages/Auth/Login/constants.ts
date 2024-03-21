import {
  type IUserCredentials,
  type IUserLocation,
} from '../../../models/IUser';

export const initialValues: IUserCredentials = {
  email: '',
  password: '',
};

export const initialUserLocation: IUserLocation = {
  latitude: null,
  longitude: null,
  error: null,
};
