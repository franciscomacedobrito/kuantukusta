import {Component, OnDestroy} from '@angular/core';
import {Product} from '../../interfaces/product.interface';
import {select, Store} from '@ngrx/store';
import {AppStore} from '../../interfaces/app-store.interface';
import {getAllProducts} from '../../../store/shop.selector';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy{

  products: Product[] = [];
  private subscription: Subscription;

  constructor(private store: Store<AppStore>) {
    this.subscription = store.pipe(select(getAllProducts)).subscribe((products) => this.products = products);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  trackByFn(index, item) {
    return item.id;
  }

}
