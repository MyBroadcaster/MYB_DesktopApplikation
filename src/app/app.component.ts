// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gamemeta } from './enviroments/autobot';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/angular/theme.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  static instance: AppComponent; // Statische Instanz

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private messageService: MessageService
  ) {
    AppComponent.instance = this; // Instanz in der statischen Variable speichern
  }

  currentroute: any = this.router.url;

  ngOnInit() {
    if (localStorage.getItem("oauthToken") || "{}" != "{}") {
      this.refresh();
      this.router.navigate(["/dashboard"]);
    }
    try {
      this.themeService.switchTheme(localStorage.getItem("appstyle") || "default");
    } catch {
      this.themeService.switchTheme("default");
    }
  }

  async refresh() {
    const retoken = localStorage.getItem("refreshToken");
    const newTokens: any = await eel.refreshchannel(retoken)();
    localStorage.setItem('oauthToken', newTokens[0]);
    localStorage.setItem('refreshToken', newTokens[1]);
  }

  // Neue Methode, um den MessageService zu nutzen
  showMessage(title: string) {
    this.messageService.add({ severity: 'info', summary: 'Kategorie geändert!', detail: `Geändert auf ${title}` });
  }

  faCoffee = faCoffee;
}

export const eel = (window as any).eel;
eel.set_host('ws://localhost:8000');
console.log(eel);

// Globale Funktion zum Aufruf der Methode aus der AppComponent
eel.expose(setautobotinfos);
function setautobotinfos(image: string, title: string) {
  gamemeta.image = image;
  gamemeta.title = title;
  console.log(title);
  AppComponent.instance.showMessage(title);
}
