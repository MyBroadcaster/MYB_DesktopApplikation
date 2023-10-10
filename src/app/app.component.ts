import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  faCoffee = faCoffee;
}

export const eel = (window as any).eel
eel.set_host( 'ws://localhost:8000' )
console.log(eel);