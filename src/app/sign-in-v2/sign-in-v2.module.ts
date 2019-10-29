import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SingInFormComponent } from './sing-in-form/sing-in-form.component';

@NgModule({
  declarations: [HeaderMenuComponent, FooterComponent, SingInFormComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderMenuComponent, FooterComponent, SingInFormComponent]
})
export class SignInV2Module { }
