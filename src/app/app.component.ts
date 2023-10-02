import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}

export const eel = (window as any).eel;
eel.set_host("ws://localhost:4200");
console.log(eel);
