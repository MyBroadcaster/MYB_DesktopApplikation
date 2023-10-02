import { Component, OnInit } from '@angular/core';
declare var myExtObject: any;
declare var webGlObject: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  ngOnInit(): void {}
  

  callFunction1() {
    myExtObject.func2();
}
}