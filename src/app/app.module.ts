import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './sidebar/nav-menu/nav-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { HeaderNotificationsComponent } from './header-notifications/header-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SidebarComponent,
    AutocompleteComponent,
    BreadcrumbsComponent,
    HeaderProfileComponent,
    HeaderNotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
