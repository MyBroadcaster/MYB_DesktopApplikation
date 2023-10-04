import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

    const sidebar :any = document.querySelector(".sidebar");
    const navItems = document.querySelectorAll("nav .nav-item");
    const toggle :any = document.querySelector(".sidebar .toggle");


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
    ];
}