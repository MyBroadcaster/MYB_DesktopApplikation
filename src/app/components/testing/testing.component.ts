import { Component } from '@angular/core';
import { eel } from 'src/app/app.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  providers: [MessageService],
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
  constructor(private messageService: MessageService) {}

  listarray : any;
  header : any;
  dbvalue: any = "";
  oauth_token : string = ""
  refresh_token : string = ""
  loading: boolean = false;
  actbtn: boolean = true;

  async tryeel(){
    let back = await eel.processlist_Scan()();
    console.log(back)
    this.header = ["Prozesse"]
    this.listarray = back
  }
  async threading(){
    let btntext = <HTMLTextAreaElement>document.getElementById("Multithreading")
    let back = await eel.threadtest()();
    this.messageService.add({key: 'tc', severity: 'success', summary: 'Erfolgreich', detail: 'Thread gestartet' });
    this.loading = true;
    this.actbtn = false;
    console.log(btntext)
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