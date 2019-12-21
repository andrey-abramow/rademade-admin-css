import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInV1Component } from './sign-in-v1/sign-in-v1.component';
import { SignInV2Component } from './sign-in-v2/sign-in-v2.component';
import { IndexComponent } from './index/index.component';
import { SignInV2Module } from './sign-in-v2/sign-in-v2.module';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'sign-in/v1', component: SignInV1Component },
  { path: 'sign-in/v2', component: SignInV2Component }
];

@NgModule({
  declarations: [
    SignInV1Component,
    SignInV2Component,
    IndexComponent
  ],
  imports: [RouterModule.forRoot(routes), SignInV2Module],
  exports: [RouterModule]
})
export class AppRoutingModule { }
