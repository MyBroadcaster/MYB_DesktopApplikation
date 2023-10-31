import { Component, OnInit } from '@angular/core';
import { eel } from 'src/app/app.component';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {
  ngOnInit(): void {
  }

  async closewindow(){
    window.close()
    await eel.closeapp();
  }  
}
