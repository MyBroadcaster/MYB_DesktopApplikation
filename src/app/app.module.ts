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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestingComponent } from './components/testing/testing.component';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'primeng/sidebar';
import { PrimengSidebarComponent } from './components/primeng-sidebar/primeng-sidebar.component';
import { DividerModule } from 'primeng/divider';
import { TitlebarComponent } from './components/basic/titlebar/titlebar.component';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    TestingComponent,
    PrimengSidebarComponent,
    TitlebarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ToastModule,
    CommonModule,
    SidebarModule,
    MenuModule,
    DropdownModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    AccordionModule,
    FontAwesomeModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
