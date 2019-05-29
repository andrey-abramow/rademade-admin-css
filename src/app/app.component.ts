import { Component } from '@angular/core';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'css-test-task';

  searchItems = [];
  item: any;

  onUpdate(item) {

  }
  ngOnInit() {
    this.item = { name: 'Item 1' }
    this.searchItems = [
      { name: 'Item 1'},
      { name: 'Item 2'}
    ]
  }
}
