import { Component, OnInit } from '@angular/core';
import { eel } from 'src/app/app.component';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/angular/theme.service';

interface Themes {
  name: string;
  themename: string;
}

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  providers: [MessageService],
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  constructor(private messageService: MessageService, private router: Router, private themeService: ThemeService) {}

  listarray : any;
  listarray_leng : any  = 0
  header : any;
  dbvalue: any = "";
  oauth_token : any = localStorage.getItem("oauth_token")
  refresh_token : any = localStorage.getItem("refresh_token")
  loading: boolean = false;
  actbtn: boolean = true;
  login: boolean = false;
  themes: Themes[] | undefined;
  selectedThemes: Themes | undefined;

  ngOnInit(): void {
    this.themes = [
      { name: 'Default', themename: "default"},
      { name: 'Test',themename: "test_theme"},
      { name: 'Dark Theme', themename: "dark_mode"},
      {name: "RangelRudi", themename: "rangelrudi"},
      {name: "Dreaon", themename: "dreaon_theme"}];
      

    if (this.oauth_token){
      this.login = true
    }
  }

  async tryeel(){
    let back = await eel.processlistsc()();
    this.header = ["Prozesse"]
    this.listarray = back
    this.listarray_leng = back.length
  }
  async threading(){
    let btntext = <HTMLTextAreaElement>document.getElementById("Multithreading")
    let back = await eel.threadtest()();
    this.messageService.add({key: 'tc', severity: 'success', summary: 'Erfolgreich', detail: 'Thread gestartet' });
    this.loading = true;
    this.actbtn = false;
  }
  changeTheme(){
    const thema = this.selectedThemes?.themename
    localStorage.setItem('appstyle', thema!);
    this.themeService.switchTheme(thema!)
  }

  clearLocalStorage(){
    localStorage.clear();
    this.router.navigate(['']);
}

  async stopthread(){
    let btntext = <HTMLTextAreaElement>document.getElementById("Multithreading")
    let back = await eel.stop_threadtest()();
    this.messageService.add({key: 'tc', severity: 'error', summary: 'Error', detail: 'Thread gestoppt' });
    this.loading = false;
    this.actbtn = true;
  }

  async autoBotDb(){
    let apps = await eel.getautodb("")();
    this.header = ["ID", "Executable", "Anwendung", "Kategorie","Window"]
    this.listarray = apps
    this.listarray_leng = apps.length
  }

  async autoBotDb_Specific(){
    this.dbvalue = <HTMLTextAreaElement>document.getElementById("dbinput")
    let apps = await eel.getautodb(this.dbvalue.value)();
    this.header = ["ID", "Executable", "Anwendung", "Kategorie","Window"]
    this.listarray = apps
  }
  async twitchlogin(){
    let back = await eel.tw_Login()();
    this.oauth_token = back[0]
    this.refresh_token = back[1]
  }
}