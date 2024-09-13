declare global {
  interface Window {
    componentInstance: AutobotComponent;
  }
}

import { Component, OnInit } from '@angular/core';
import { eel } from 'src/app/app.component';
import { SharedatabetweencomponentsService } from 'src/app/services/angular/sharedatabetweencomponents.service';
import {  botsetting, gamemeta } from 'src/app/enviroments/autobot';
@Component({
  selector: 'app-autobot',
  templateUrl: './autobot.component.html',
  styleUrls: ['./autobot.component.scss'],
  providers: [MessageService]
})
export class AutobotComponent implements OnInit {
categorytitle: any;
  constructor(private sharedService: SharedatabetweencomponentsService) { }
  appImage: string = "";
  deactivatebtn = false;

  ngOnInit() {
    // Assign this component to the globally declared componentInstance variable
  this.appImage = gamemeta.image
  this.categorytitle = gamemeta.title
  this.deactivatebtn = botsetting.status
  }

  async startbot() {
    // this.source[0].activebot = true;
    botsetting.status = true;
    // this.saveinfo();
    await eel.startbot(localStorage.getItem('channelID'), localStorage.getItem('oauthToken'), "Just Chatting");
    this.deactivatebtn = true;
  }

  async stopbot() {
    botsetting.status = false;
    // this.saveinfo();
    await eel.stopbot();
    this.deactivatebtn = false;
  }
}

// Expose the function to Python with eel
eel.expose(updateInformations);
function updateInformations(image: string, gametitle: string) {
  let appimg = <HTMLImageElement>document.getElementById("appImage");
  appimg.src = image;
  gamemeta.image = image
  gamemeta.title = gametitle
  let title = <HTMLHeadingElement>document.getElementById("appname");
  console.log(gametitle)
  title.innerText = gametitle
}