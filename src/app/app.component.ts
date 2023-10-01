import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    eel.get_data()().then((res: any) => console.log(res));
  }
}

export const eel = (window as any).eel;
eel.set_host("ws://localhost:4200");

console.log(eel);
