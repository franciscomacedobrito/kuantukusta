import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from './core/interfaces/app-store.interface';
import {GetItems} from './store/actions';
import {Product} from './core/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product[] = [];

  constructor(private store: Store<AppStore>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }
}
