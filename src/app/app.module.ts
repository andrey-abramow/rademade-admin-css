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
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FormsModule } from '@angular/forms'
import { ClickOutsideModule } from 'ng-click-outside';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SidebarComponent,
    AutocompleteComponent,
    BreadcrumbsComponent,
    HeaderProfileComponent,
    HeaderNotificationsComponent,
    CustomerInfoComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,

    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
