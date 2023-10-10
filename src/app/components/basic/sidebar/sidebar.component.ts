import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eel } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
sidebarVisible: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    var twitch_logo = <HTMLImageElement>document.getElementById("twlogo");
    var twitch_name = <HTMLHeadingElement>document.getElementById("twname");
    var currentUser = localStorage.getItem('name') || '{}';
    var currentpb_tw = localStorage.getItem("profilbild") || '{}';
    twitch_logo.src = currentpb_tw 
    twitch_name.innerHTML = currentUser

    eel.expose(change_acc_info);
    function change_acc_info(logo: string, name:string){
      console.log(name, logo)
      twitch_logo.src = logo
      twitch_name.innerHTML = name
    }

    const sidebar :any = document.querySelector(".sidebar");
    const navItems = document.querySelectorAll("nav .nav-item");
    const toggle :any = document.querySelector(".sidebar .toggle");
    sidebar.classList.add("open")


toggle.addEventListener("click", () => {
  if (sidebar.className === "sidebar") sidebar.classList.add("open");
  else sidebar.classList.remove("open");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });

    navItem.classList.add("active");
  });
});
  }

  btnClick(item: any) {
    this.router.navigate([item.path])
  }
    menueitems = [
      {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'bx bxs-dashboard'
      },
      {
        name: 'Apps',
        path: '',
        icon: 'bx bxs-wallet'
      },
      {
        name: 'Analytics',
        path: '',
        icon: 'bx bxs-bar-chart-alt-2'
      },
      {
        name: 'Benachrichtigungen',
        path: '',
        icon: 'bx bxs-bell'
      },
      {
        name: 'Einstellungen',
        path: '',
        icon: 'bx bxs-cog'
      },
      {
        name: 'Testing',
        path: '/testing',
        icon: 'bx bx-code-alt'
      },
    ];
    
}