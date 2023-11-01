import { Component, OnInit,Input} from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { eel } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
items = [{}];
displayMaximizedSidebar = true;
currentRoute: string;
constructor(private router: Router) {
  this.currentRoute = this.router.url;
}
  public currentUserName: string = "";
  public test: boolean = true;
  public currentUserPfp: string = "";
  public menuItems: SidebarMenuItem[] | undefined;
  public goToSidebarRoute(menuItem: SidebarMenuItem) {
    this.router.navigate([menuItem.path]);
  }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Options',
          items: [
              {
                  label: 'Update',
                  icon: 'pi pi-refresh',
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-times',
              }
          ]
      }
    ]
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(this.currentRoute)
        if (this.currentRoute == "/" && this.displayMaximizedSidebar == true){
          this.displayMaximizedSidebar = false;
        }
        if (this.currentRoute != "/" && this.displayMaximizedSidebar == false)
        {
          this.displayMaximizedSidebar = true;
        }
        
      }
    });
    this.currentUserName = localStorage.getItem("name") || "{}";
    this.currentUserPfp = localStorage.getItem("profilbild") || "{}"; 
    eel.expose(change_acc_info);
    function change_acc_info(logo: string, name:string){
      var twitch_logo = <HTMLImageElement>document.querySelector(".twitch-pfp")
      var twitch_name = <HTMLHeadingElement>document.querySelector(".twitch-name")
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
      //{
      //  name: "Einstellungen",
      //  path: "",
      //  icon: "bx bxs-cog"
      //},
      {
        name: "Testing",
        path: "/testing",
        icon: "bx bx-code-alt"
      }
    ];
  }
}
