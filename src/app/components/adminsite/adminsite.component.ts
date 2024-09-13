import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-adminsite',
  templateUrl: './adminsite.component.html',
  styleUrls: ['./adminsite.component.scss']
})
export class AdminsiteComponent {
  constructor(private router: Router) {}



  navigate(){
    this.router.navigate(["/gamedatabase"])
  }
}
