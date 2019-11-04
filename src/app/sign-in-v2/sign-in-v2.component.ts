import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-v2',
  templateUrl: './sign-in-v2.component.html',
  styleUrls: ['./sign-in-v2.component.scss']
})
export class SignInV2Component implements OnInit {

  public bgImage: string;

  constructor() { }

  ngOnInit() {
    this.bgImage = 'assets/sign-in-bg.jpg'
  }

}
