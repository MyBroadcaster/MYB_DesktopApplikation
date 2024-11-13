import { Component } from '@angular/core';
import { eel } from 'src/app/app.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-usermanagment',
  templateUrl: './usermanagment.component.html',
  styleUrls: ['./usermanagment.component.scss']
})
export class UsermanagmentComponent {
tw_name: any;
pbimage: any;
description: any;
twitch_id: any;
permissions: any[] = ["Admin", "Tester"];
selected_permission: any;
user: any;
newuser: any
loading: boolean|undefined;
userset: any = [{
  id: "1",
  name: "Dreaon",
  tw_id: "1458721",
  image: "https://static-cdn.jtvnw.net/jtv_user_pictures/9d5e9779-b23b-4f5b-a3eb-75f767acc375-profile_image-300x300.png",
  permission: "Admin"
},
{
  id: "2",
  name: "Dreaon_dev",
  tw_id: "231857267",
  image: "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  permission: "Tester"
}]
activindex= 1

async getinfos(){
  let infos = await eel.getinfobyname(localStorage.getItem('oauthToken'), this.tw_name)()
  console.log(infos)
  this.tw_name = infos["data"][0]["display_name"]
  this.description = infos["data"][0]["description"]
  this.pbimage = infos["data"][0]["profile_image_url"]
  this.twitch_id = infos["data"][0]["id"]
  this.activindex = 0
}

adduser(){
  this.newuser = {id: "3",name: this.tw_name, tw_id: this.twitch_id, image:this.pbimage , permission: this.selected_permission}
  this.userset.push(this.newuser)
}
}
