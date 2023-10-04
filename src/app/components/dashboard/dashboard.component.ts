import { Component } from '@angular/core';
import { eel } from 'src/app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  async tryeel(){
    let back = await eel.processlist()();
    console.log(back)
    
  }


}
