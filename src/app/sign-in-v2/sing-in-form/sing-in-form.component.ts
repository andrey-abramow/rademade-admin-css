import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sing-in-form',
  templateUrl: './sing-in-form.component.html',
  styleUrls: ['./sing-in-form.component.scss']
})
export class SingInFormComponent implements OnInit {

  public value: string;
  constructor() { }

  ngOnInit() {
    this.value = 'Room1'
  }

}