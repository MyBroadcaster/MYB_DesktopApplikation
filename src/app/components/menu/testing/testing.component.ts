import { Component, OnInit } from '@angular/core';
import { eel } from 'src/app/app.component';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/angular/theme.service';
import { LocaldataService } from 'src/app/services/angular/localdata.service';


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
  constructor(private messageService: MessageService, private router: Router, private themeService: ThemeService, private localData: LocaldataService) {}

  listarray : any;
  listarray_leng : any  = 0
  header : any;
  dbvalue: any = "";
  oauth_token : any = this.localData.getData('oauthToken')
  refresh_token : any = this.localData.getData("refreshToken")
  loading: boolean = false;
  actbtn: boolean = true;
  login: boolean = false;
  themes: Themes[] | undefined;
  processes: Processes[] | undefined;
  selectedThemes: Themes | undefined;
  selectedProcess: Processes | undefined;
  badges:any

  ngOnInit(): void {
    this.themes = [
      { name: 'Default', themename: "default"},
      { name: 'Test',themename: "test_theme"},
      { name: 'Dark Theme', themename: "dark_mode"},
      {name: "RangelRudi", themename: "rangelrudi"},
      {name: "Dreaon", themename: "dreaon_theme"}];

    this.processes = [{name: "Process"}]

    if (this.oauth_token){
      this.login = true
    }
    this.processlist()
  }

  async processlist(){
    this.processes = []
    this.processes = [{name: "Process"}]
    let back = await eel.processlist_Scan()();
    back.forEach((element: string) => {
      this.processes?.push({name: element})
    });
  }

  
  async addgametoSQL(){
    let entrydata: any = []
    let exe: any = "";
    exe = this.selectedProcess?.name;
    if (exe == "Process")[
      exe = (<HTMLInputElement>document.getElementById("dbexe")).value
    ]
    let gamename = (<HTMLInputElement>document.getElementById("dbname")).value
    let gamecate = (<HTMLInputElement>document.getElementById("dbcategory")).value
    entrydata.push(exe, gamename, gamecate)
    if (entrydata.includes("")){
      console.log("NO Commitet")
    }
    else{
      console.log(gamecate)
      let back = eel.twitchaprove(this.localData.getData('oauthToken'), gamecate)
      if (back != String){
        //eel.addnewentry(exe, gamename, gamecate, " ")
      }
      else{
        console.log("NO Commitet")
      }
    }
  }

  async tryeel(){
    let back = await eel.processlist_Scan()();
    console.log(back)
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
    console.log(btntext)
  }

  async checkbadgesGlobal(){
    let back = await eel.globalbadgesAPI(this.localData.getData('oauthToken'))();
    console.log(back)
    this.badges = back
  }
  async checkbadgesChannel(){
    let back = await eel.channelbadgesAPI(this.localData.getData('oauthToken'),this.localData.getData('channelID'))();
    console.log(back)
    this.badges = back
  }

  async checkglobalemotes(){
    let back = await eel.globalEmoteAPI(this.localData.getData('oauthToken'))();
    console.log(back)
    this.badges = back
  }


  changeTheme(){
    const thema = this.selectedThemes?.themename
    console.log(thema!)
    this.localData.saveData("appstyle", thema!)
    this.themeService.switchTheme(thema!)
  }

  clearLocalStorage(){
    this.localData.clearData()
    this.router.navigate(['']);
}

  async stopthread(){
    let btntext = <HTMLTextAreaElement>document.getElementById("Multithreading")
    let back = await eel.stop_threadtest()();
    this.messageService.add({key: 'tc', severity: 'error', summary: 'Error', detail: 'Thread gestoppt' });
    this.loading = false;
    this.actbtn = true;
    console.log(back)
  }

  async autoBotDb(){
    let apps = await eel.getautodb("")();
    this.header = ["ID", "Executable", "Anwendung", "Kategorie","Window"]
    this.listarray = apps
    this.listarray_leng = apps.length
    console.log(apps)
  }

  async autoBotDb_Specific(){
    this.dbvalue = <HTMLTextAreaElement>document.getElementById("dbinput")
    console.log(this.dbvalue.value)
    let apps = await eel.getautodb(this.dbvalue.value)();
    this.header = ["ID", "Executable", "Anwendung", "Kategorie","Window"]
    this.listarray = apps
    console.log(apps)
  }
  async twitchlogin(){
    let back = await eel.tw_Login()();
    this.oauth_token = back[0]
    this.refresh_token = back[1]
    console.log(back)
  }
}