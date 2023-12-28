import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/angular/theme.service';
import { LocaldataService } from 'src/app/services/angular/localdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private themeService: ThemeService, private localData: LocaldataService) {}
  currentroute: any = this.router.url;
  ngOnInit(){
    if (this.localData.getData("oauthToken") || "{}" != "{}"){
      this.refresh()
      this.router.navigate(["/dashboard"])
    }
    try{
    this.themeService.switchTheme(this.localData.getData("appstyle") || "default") }
    catch{
      this.themeService.switchTheme("default")
    }
   }

  async refresh(){
    const retoken = this.localData.getData("refreshToken")
    const newTokens: any = await eel.refreshchannel(retoken)()
    this.localData.saveData('oauthToken', newTokens[0])
    this.localData.saveData('refreshToken', newTokens[1])
  }
  faCoffee = faCoffee;
}

export const eel = (window as any).eel
eel.set_host('ws://localhost:8000')
console.log(eel);