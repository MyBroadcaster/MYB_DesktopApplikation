import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ThemeService } from 'src/app/services/angular/theme.service';

interface Themes {
  name: string;
  themename: string;
}

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {

  themes: Themes[] | undefined;
  selectedThemes: Themes | undefined;
  constructor(private router: Router, private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themes = [
      { name: 'Default', themename: "default"},
      { name: 'Test',themename: "test_theme"},
      { name: 'Dark Theme', themename: "dark_mode"},
      {name: "RangelRudi", themename: "rangelrudi"},
      {name: "Dreaon", themename: "dreaon_theme"}];
    }
  changeTheme(){
    const thema = this.selectedThemes?.themename
    localStorage.setItem('appstyle', thema!);
    this.themeService.switchTheme(thema!)
  }
}