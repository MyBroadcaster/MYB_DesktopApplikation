import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { eel } from 'src/app/app.component';
import { LocaldataService } from 'src/app/services/angular/localdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  twitch_name: any = "";
  constructor(private route: ActivatedRoute, private router: Router, private localData: LocaldataService) { }
  oauth_token: any;
  refresh_token: any;
  hello_a: string = ""
  Homeset: boolean = true;
  loading = false
  blured = true;
  ngOnInit(): void {

    if (this.localData.getData('oauth_token')) {
      this.router.navigate(['/dashboard']);
    }
  }
  backgroundmedia: string  = "https://assets.mixkit.co/videos/preview/mixkit-big-autumn-tree-at-sunset-3d-animation-35270-large.mp4"
  backgroundmedia_alternative: string = "https://mybroadcaster.de/wp-content/uploads/2022/12/Kerfin7_NEA_2341.png"

  async twitchlogin(){
    this.loading = true
    let back = await eel.tw_Login()();
    this.localData.saveData('channelID', back[2]);
    this.localData.saveData('channelImage', back[5]);
    this.localData.saveData('loginName', back[3]);
    this.localData.saveData('displayName', back[4]);
    this.localData.saveData('oauthToken', back[0]);
    this.localData.saveData('refreshToken', back[1]);
    this.twitch_name = back[3]
    this.hello_a = "Willkommen, " + back[3]
    this.loading = false
    this.router.navigate(['/dashboard'])
  }
}