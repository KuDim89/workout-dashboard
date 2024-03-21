import { type IError, type ILocationError } from './IError';

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserLocation {
  latitude: number | null;
  longitude: number | null;
  error: ILocationError | null;
}

export interface IUserAddress {
  country: string;
  countryCode: string;
  city?: string;
  village?: string;
  district?: string;
  county?: string;
  municipality?: string;
  state?: string;
  stateDistrict?: string;
  fullAddress: string;
  error: IError | null;
}

export interface IUser extends IUserCredentials {
  loginTime: string;
  location: IUserLocation;
  address: IUserAddress;
}

export type ICodeType = Record<string, string>;
