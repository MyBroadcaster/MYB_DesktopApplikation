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
  minimize() {
    window.innerWidth = 100;
    window.innerHeight = 100;
    window.screenX = screen.width;
    window.screenY = screen.height;

}
  maximze(){
    window.resizeTo(screen.width, screen.height);
}
}
