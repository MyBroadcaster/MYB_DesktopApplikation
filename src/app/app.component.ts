import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router ) {}
  currentroute: any = this.router.url;
  ngOnInit(): void {}
  faCoffee = faCoffee;
}

export const eel = (window as any).eel
eel.set_host( 'ws://localhost:8000' )
console.log(eel);