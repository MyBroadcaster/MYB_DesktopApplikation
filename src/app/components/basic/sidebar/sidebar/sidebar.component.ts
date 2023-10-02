import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
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
}
