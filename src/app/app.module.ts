import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TableModule } from 'primeng/table';
import { SidebarComponent } from './components/basic/sidebar/sidebar.component';
import { DashboardComponent } from './components/menu/dashboard/dashboard.component';
import { TestingComponent } from './components/menu/testing/testing.component';
import { AccordionModule } from 'primeng/accordion';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'primeng/sidebar';
import { BlockUIModule } from 'primeng/blockui';
import { DividerModule } from 'primeng/divider';
import { TitlebarComponent } from './components/basic/titlebar/titlebar.component';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './components/settings/account-settings/account-settings.component';
import { AppSettingsComponent } from './components/settings/app-settings/app-settings.component';
import { AppsComponent } from './components/menu/apps/apps.component';
import { AnalyticsComponent } from './components/menu/analytics/analytics.component';
import { CardModule } from 'primeng/card';
import { AutobotComponent } from './components/functions/twitch/autobot/autobot.component';
import { SplitterModule } from 'primeng/splitter';
import { ScrollerModule } from 'primeng/scroller';
import { ImageModule } from 'primeng/image';
import { AdminsiteComponent } from './components/adminsite/adminsite.component';
import { GameDatabaseComponent } from './components/admin/gamedatabase/game-database.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TwitchChatComponent } from './components/functions/twitch/twitchchat/twitch-chat.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    TestingComponent,
    TitlebarComponent,
    AccountSettingsComponent,
    AppSettingsComponent,
    TwitchChatComponent,
    AppsComponent,
    AnalyticsComponent,
    AutobotComponent,
    AdminsiteComponent,
    GameDatabaseComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    SplitterModule,
    ToastModule,
    ScrollerModule,
    CardModule,
    ImageModule,
    CommonModule,
    SidebarModule,
    MenuModule,
    MessagesModule,
    DropdownModule,
    CheckboxModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MessagesModule,
    ButtonModule,
    TableModule,
    BlockUIModule,
    InputTextModule,
    AccordionModule,
    FontAwesomeModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
