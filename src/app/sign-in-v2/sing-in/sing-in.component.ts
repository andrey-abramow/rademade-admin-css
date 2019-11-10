import { Component, OnInit } from '@angular/core';
import './expand_more.svg';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInFormComponent implements OnInit {

  public value: string;
  constructor() { }

  ngOnInit() {
    this.value = 'Room1'
  }

}
