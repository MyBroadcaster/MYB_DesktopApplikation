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
                  label: 'Mein Account',
                  icon: 'fa-solid fa-user',
                  command: () => {
                    this.router.navigate(["/myAccount"])
                }
              },
              {
                  label: 'Einstellungen',
                  icon: 'fa-solid fa-wrench',
                  command: () => {
                    this.router.navigate(["/appSettings"])
                }
              },
              {
                label: 'LogOut',
                icon: 'fa-solid fa-right-from-bracket',
                command: () => {
                  localStorage.clear();
                  this.router.navigate(["/"])
              }
            }
          ]
      }
    ]
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute == "/" && this.displayMaximizedSidebar == true){
          this.displayMaximizedSidebar = false;
        }
        if (this.currentRoute != "/" && this.displayMaximizedSidebar == false)
        {
          this.displayMaximizedSidebar = true;
        }
        
      }
    });
    this.currentUserName = localStorage.getItem('displayName') || "{}";
    this.currentUserPfp = localStorage.getItem('channelImage') || "{}"; 

    this.menuItems = [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "bx bxs-dashboard",
        public: false
      },
      {
        name: "Apps",
        path: "/apps",
        icon: "bx bxs-wallet",
        public: true
      },
      {
        name: "Analytics",
        path: "/analytics",
        icon: "bx bxs-bar-chart-alt-2",
        public: false
      },
      {
        name: "Testing",
        path: "/testing",
        icon: "bx bx-code-alt",
        public: false
      }
      //{
      //  name: "Benachrichtigungen",
      //  path: "",
      //  icon: "bx bxs-bell"
      //},
      //{
      //  name: "Einstellungen",
      //  path: "",
      //  icon: "bx bxs-cog"
      //},
    ];
  }
  devids = ["147456736"]
  twitchid = localStorage.getItem("channelID") || "{}";
}

eel.expose(change_acc_info);
function change_acc_info(logo: string, name:string){
  var twitch_logo = <HTMLImageElement>document.getElementById("twitch-pfp")
  var twitch_name = <HTMLHeadingElement>document.querySelector(".twitch-name")
  console.log(name, logo)
  twitch_logo.src = logo
  twitch_name.innerHTML = name
}