import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/menu/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TestingComponent } from './components/menu/testing/testing.component';
import { AccountSettingsComponent } from './components/settings/account-settings/account-settings.component';
import { AppSettingsComponent } from './components/settings/app-settings/app-settings.component';
import { AppsComponent } from './components/menu/apps/apps.component';
import { AnalyticsComponent } from './components/menu/analytics/analytics.component';
import { AutobotComponent } from './components/functions/twitch/autobot/autobot.component';
import { TwitchChatComponent } from './components/functions/twitch/twitch-chat/twitch-chat.component';

const routes: Routes = [
  {path: "testing" ,component: TestingComponent},
  {path: "dashboard" ,component: DashboardComponent},
  {path: "myAccount" ,component: AccountSettingsComponent},
  {path: "appSettings" ,component: AppSettingsComponent},
  {path: "apps" ,component: AppsComponent},
  {path: "analytics" ,component: AnalyticsComponent},
  {path: "autobot", component:AutobotComponent, data: { state: 'Zustand der Komponente 1' }},
  {path: "twitchchat", component:TwitchChatComponent},
  {path: "" ,component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
