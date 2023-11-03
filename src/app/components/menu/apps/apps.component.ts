import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent {
  constructor(private router: Router){}

changetoapp(path: string){
  this.router.navigate([path])
}

twitchid = localStorage.getItem("channelID") || "{}";
devids = ["147456736"]

cardItems: any =[{
  functionname: "Autobot",
  description: "test",
  approute: "/autobot",
  styleclass: "autobot",
  public: true,
},
{
  functionname: "Giveaway",
  description: "Giveaway",
  approute: "#",
  styleclass: "giveaway",
  public: false,
},
{
  functionname: "AutoTitle",
  description: "Auto Title",
  approute: "#",
  styleclass: "auto_title",
  public: false,
},
{
  functionname: "Raid Gallery",
  description: "Raid Gallery",
  approute: "#",
  styleclass: "raid_gallery",
  public: false,
},
{
  functionname: "Twitch Chat",
  description: "Chat",
  approute: "/twitchchat",
  styleclass: "twitch_chat",
  public: true,
},
]

youtItems: any =[{
  functionname: "Autobot",
  description: "test",
  approute: "",
  styleclass: "autobot",
  public: true,
},
]
}
