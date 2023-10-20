import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  user: string;

  setData(data: string) {
    this.user = data;
  }

  getData() {
    return this.user;
  }
}
