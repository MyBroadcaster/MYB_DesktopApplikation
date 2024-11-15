import { Component, OnInit,Input} from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { eel } from 'src/app/app.component';
import { SharedatabetweencomponentsService } from 'src/app/services/angular/sharedatabetweencomponents.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
items = [{}];
displayMaximizedSidebar = true;
currentRoute: string;

constructor(private router: Router, private sharedService: SharedatabetweencomponentsService) {
  this.currentRoute = this.router.url;
}
  public currentUserName: any;
  public test: boolean = true;
  public currentUserPfp: any;
  public menuItems: SidebarMenuItem[] | undefined;
  public goToSidebarRoute(menuItem: SidebarMenuItem) {
    this.router.navigate([menuItem.path]);
  }
  ngOnInit(): void {
    this.sharedService.currentPBImage.subscribe((img) => {
      this.currentUserPfp = img;
    });
    this.sharedService.currentPBUsername.subscribe((username) => {
      this.currentUserName = username;
    });
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
      },
      {
       name: "Admin",
       path: "/administration",
       icon: "bx bxs-bell",
       public: false
      },
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
