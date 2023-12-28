import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  constructor() { }
  
  
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    var item : any
    item = localStorage.getItem(key);
    return item
  }
  public clearData() {
    localStorage.clear
  }
}
