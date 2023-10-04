import { Component } from '@angular/core';
import { eel } from 'src/app/app.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  async tryeel(){
    let back = await eel.processlist_Scan()();
    console.log(back)
  }
  async threading(){
    let back = await eel.threadtest()();
    console.log(back)
  }
  async autoBotDb(){
    let apps = await eel.getautodb()();
    console.log(apps)
  }
  async twitchlogin(){
    let back = await eel.tw_Login()();
    console.log(back)
  }


}
