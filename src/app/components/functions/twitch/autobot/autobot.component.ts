import { Component, OnInit } from '@angular/core';
import { eel } from 'src/app/app.component';
import { MessageService } from 'primeng/api';
import { LocaldataService } from 'src/app/services/angular/localdata.service';

@Component({
  selector: 'app-autobot',
  templateUrl: './autobot.component.html',
  styleUrls: ['./autobot.component.scss'],
  providers: [MessageService]
})

export class AutobotComponent implements OnInit{
  constructor(private messageService: MessageService, private localData: LocaldataService){}
  appImage : string = "https://static-cdn.jtvnw.net/ttv-boxart/417752-%7Bwidth%7Dx%7Bheight%7D.jpg";
  deactivatebtn = false;

  async ngOnInit(){
    var currentdata: any = await this.getcurrentCategory()
    this.appImage = currentdata[1]
    var dataset: any =  await this.getinfos()
    console.log(dataset)
    this.appImage =  dataset[0] || "https://static-cdn.jtvnw.net/ttv-boxart/417752-%7Bwidth%7Dx%7Bheight%7D.jpg"
    this.deactivatebtn = dataset[3]

}
    
    
  async getinfos(){
    const infos = await eel.getpydata()()
    return infos
  }

  async getcurrentCategory(){
    const infos = await eel.currentCategory(this.localData.getData("oauthToken"),this.localData.getData("channelID"))()
    return infos
  }
  async startbot(){
    await eel.startbot(this.localData.getData("channelID"),this.localData.getData("oauthToken"), "Just Chatting")
    this.deactivatebtn = true;
  }
  async stopbot(){
    await eel.stopbot()
    this.deactivatebtn = false;
  }

}

eel.expose(updateInformations);
async function updateInformations(image: string){
  let appimg = <HTMLImageElement>document.getElementById("appImage")
  appimg.src = image
}