import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedatabetweencomponentsService {
  constructor() { }
  private imageSource = new BehaviorSubject<string | ArrayBuffer | null>(null);
  currentPBImage = this.imageSource.asObservable();
  private sidebarusernameSource = new BehaviorSubject<string | ArrayBuffer | null>(null);
  currentPBUsername = this.sidebarusernameSource.asObservable();
  private autobotSource = new BehaviorSubject<string | ArrayBuffer | null>(null);
  autobotSources = this.autobotSource.asObservable();
  setPbImageSidebar(image: string | ArrayBuffer | null) {
    this.imageSource.next(image);
  }
  setUsernamenSidebar(username: string | ArrayBuffer | null) {
    this.sidebarusernameSource.next(username);
  }

  setAutoBotCategoryImage(source: any | ArrayBuffer | null) {
    this.autobotSource.next(source);
  }
}
