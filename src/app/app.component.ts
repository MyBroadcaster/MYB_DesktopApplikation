import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/angular/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private themeService: ThemeService) {}
  currentroute: any = this.router.url;
  ngOnInit(){
    if (localStorage.getItem("oauthToken") || "{}" != "{}"){
      this.refresh()
      this.router.navigate(["/dashboard"])
    }
    try{
    this.themeService.switchTheme(localStorage.getItem("appstyle") || "{default}") }
    catch{
      this.themeService.switchTheme("default")
    }
   }

  async refresh(){
    const retoken = localStorage.getItem("refreshToken")
    const newTokens: any = await eel.refreshchannel(retoken)()
    localStorage.setItem('oauthToken', newTokens[0])
    localStorage.setItem('refreshToken', newTokens[1])
  }
  faCoffee = faCoffee;
}

export const eel = (window as any).eel
//eel.set_host('ws://localhost:8000')
console.log(eel);