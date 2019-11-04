import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../_services/customer/customer.service';
import { Customer } from '../_models/customer'
import { from, Observable , of} from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, mergeAll } from 'rxjs/operators';
import { debug } from 'util';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input('ngModel') ngModel: any;
  @Input() items: Object[];
  @Output() onSelect = new EventEmitter<Customer>();
  @Output() onFound = new EventEmitter<Customer[]>();

  public isOpen = false;
  public searchString: string = '';

  constructor(private customerService: CustomerService) { }

  select(item: Customer) {
    this.onSelect.emit(item);
    this.searchString = item.name;
    this.ngModel = item;
    this.close();
  }

  onClickedOutside(event) {
    this.close()
  }

  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }

  onChange(q: string) {
    this.open();

    const searcher = of(q).pipe(
     debounceTime(100),
     distinctUntilChanged(),
     switchMap((v) => this.customerService.search(v))
    )

    searcher.subscribe((customers: any) => {
      if (customers.length > 0) {
        this.onFound.emit(customers)
        this.items = customers;
      }
     });

  }

  ngOnInit() {

  }

}
