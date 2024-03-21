import axios from 'axios';
import { type IUserLocation } from '../../models/IUser';

class GeolocationService {
  async getUserLocation(): Promise<IUserLocation> {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location: IUserLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          };
          resolve(location);
        },
        (error) => {
          reject(error);
        },
      );
    });
  }

  async getLocationName(latitude: number, longitude: number) {
    const baseUrl = `${process.env.REACT_APP_OPENSTREETMAP_URL}/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (e) {
      return e;
    }
  }
}

export default new GeolocationService();
