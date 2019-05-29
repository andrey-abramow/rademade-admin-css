import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Customer } from '../../_models/customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  search(q): Observable<Customer[]> {
    return of([
      { id: 1, name: 'Jonh' },
      { id: 2, name: 'Robert' }
    ])
  }

}
