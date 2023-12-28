import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/angular/theme.service';
import { LocaldataService } from 'src/app/services/angular/localdata.service';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {
  constructor(public themeService: ThemeService, public localData: LocaldataService){}
  themes: Themes[] | undefined;
  selectedThemes: Themes | undefined;
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
    this.localData.saveData("appstyle",thema!)
    this.themeService.switchTheme(thema!)
  }
}
