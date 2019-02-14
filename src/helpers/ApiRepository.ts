import { AxiosInstance } from 'axios';

export abstract class ApiRepository {
  protected http: AxiosInstance;

  constructor(http: AxiosInstance) {
    if (!http) {
      throw new Error('You must provide a axios instance in your domain config');
    }
    this.http = http;
  }
}
