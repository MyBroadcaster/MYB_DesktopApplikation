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
  public displayMaximizedSidebar = true;
  public currentUserName: string = "";
  public currentUserPfp: string = "";
  public menuItems: SidebarMenuItem[] | undefined;
  public goToSidebarRoute(menuItem: SidebarMenuItem) {
    this.router.navigate([menuItem.path]);
  }
  ngOnInit(): void {
    
    this.currentUserName = localStorage.getItem("name") || "{}";
    this.currentUserPfp = localStorage.getItem("profilbild") || "{}";

    eel.expose(change_acc_info);
    function change_acc_info(logo: string, name:string){
      var twitch_logo = <HTMLImageElement>document.getElementById("twlogo");
      var twitch_name = <HTMLHeadingElement>document.getElementById("twname");
      console.log(name, logo)
      twitch_logo.src = logo
      twitch_name.innerHTML = name
    }

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
