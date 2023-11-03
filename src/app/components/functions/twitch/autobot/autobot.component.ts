import { Component, OnInit } from '@angular/core';
import { eel } from 'src/app/app.component';


@Component({
  selector: 'app-autobot',
  templateUrl: './autobot.component.html',
  styleUrls: ['./autobot.component.scss']
})

export class AutobotComponent implements OnInit{
  constructor(){}
  appImage : string = "";
  deactivatebtn = false;
  ngOnInit(){
    var dataset: any = this.getinfos()
    this.appImage =  dataset[0] || "https://static-cdn.jtvnw.net/ttv-boxart/417752-%7Bwidth%7Dx%7Bheight%7D.jpg"

}
    
    
  async getinfos(){
    const infos = await eel.startbot()()
    return infos
  }

  async startbot(){
    await eel.startbot(localStorage.getItem('channelID'),localStorage.getItem('oauthToken'), "Just Chatting")
    this.deactivatebtn = true;
  }
  async stopbot(){
    await eel.stopbot()
    this.deactivatebtn = false;
  }

}
eel.expose(updateInformations);
function updateInformations(image: string){
  let appimg = <HTMLImageElement>document.getElementById("appImage")
  appimg.src = image
}
