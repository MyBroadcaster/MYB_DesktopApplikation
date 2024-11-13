import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { eel } from 'src/app/app.component';
import { SharedatabetweencomponentsService } from 'src/app/services/angular/sharedatabetweencomponents.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  twitch_name: any = "";
  constructor(private route: ActivatedRoute, private router: Router, private sharedService: SharedatabetweencomponentsService) { }
  oauth_token: any;
  refresh_token: any;
  hello_a: string = ""
  Homeset: boolean = true;
  loading = false
  blured = true;
  ngOnInit(): void {

    if (localStorage.getItem('oauth_token')) {
      this.router.navigate(['/dashboard']);
    }
  }
  backgroundmedia: string  = "https://static.videezy.com/system/resources/previews/000/040/575/original/Helloween_Background.mp4"
  backgroundmedia_alternative: string = "https://mybroadcaster.de/wp-content/uploads/2022/12/Kerfin7_NEA_2341.png"

  async twitchlogin(){
    this.loading = true
    let back = await eel.tw_Login()();
    console.log(back)
    localStorage.setItem('channelID', back[2]);
    localStorage.setItem('channelImage', back[5]);
    localStorage.setItem('loginName', back[3]);
    localStorage.setItem('displayName', back[4]);
    localStorage.setItem('oauthToken', back[0]);
    localStorage.setItem('refreshToken', back[1]);
    this.twitch_name = back[3]
    this.hello_a = "Willkommen, " + back[3]
    this.loading = false
    this.sharedService.setPbImageSidebar(back[5]);
    this.sharedService.setUsernamenSidebar(back[4]);
    this.router.navigate(['/dashboard'])
  }
}