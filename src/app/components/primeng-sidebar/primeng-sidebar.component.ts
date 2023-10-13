import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeng-sidebar',
  templateUrl: './primeng-sidebar.component.html',
  styleUrls: ['./primeng-sidebar.component.scss']
})
export class PrimengSidebarComponent implements OnInit {
  public displayMaximizedSidebar = true;
  public displayMinimizedSidebar = false;

  public currentUserName: string = "";
  public currentUserPfp: string = "";
  public menuItems: SidebarMenuItem[] | undefined;

  constructor(private _router: Router) {}

  public goToSidebarRoute(menuItem: SidebarMenuItem) {
    this._router.navigate([menuItem.path]);
  }

  ngOnInit(): void {
    this.currentUserName = localStorage.getItem("name") || "{}";
    this.currentUserPfp = localStorage.getItem("profilbild") || "{}";

    this.menuItems = [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "bx bxs-dashboard"
      },
      {
        name: "Apps",
        path: "",
        icon: "bx bxs-wallet"
      },
      {
        name: "Analytics",
        path: "",
        icon: "bx bxs-bar-chart-alt-2"
      },
      {
        name: "Benachrichtigungen",
        path: "",
        icon: "bx bxs-bell"
      },
      {
        name: "Einstellungen",
        path: "",
        icon: "bx bxs-cog"
      },
      {
        name: "Testing",
        path: "/testing",
        icon: "bx bx-code-alt"
      }
    ];
  }
}
