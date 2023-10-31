import { Component, OnInit } from '@angular/core';
import { eel } from 'src/app/app.component';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  providers: [MessageService],
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  constructor(private messageService: MessageService, private router: Router) {}

  listarray : any;
  listarray_leng : any  = 0
  header : any;
  dbvalue: any = "";
  oauth_token : any = localStorage.getItem("oauth_token")
  refresh_token : any = localStorage.getItem("refresh_token")
  loading: boolean = false;
  actbtn: boolean = true;
  login: boolean = false;

  ngOnInit(): void {
    console.log(!this.oauth_token)
    if (this.oauth_token){
      this.login = true
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