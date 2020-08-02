import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../interfaces/product.interface';
import {Store} from '@ngrx/store';
import {AddToCart} from '../../../store/actions';
import {BagItemAdapter} from '../../adapters/bag-item.adapter';
import {CommonsService} from '../../services/commons.service';
import {ModalComponent} from '../modal/modal.component';
import {getBagItemById, SHOP_STORE_KEY} from "../../../store/shop.selector";
import {Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {AppStore} from "../../interfaces/app-store.interface";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnDestroy, OnInit{

  @Input() product: Product;
  public isInCart = false;
  private subscription: Subscription;

  constructor(private store: Store<AppStore>,
              private commonsService: CommonsService) {
  }

  ngOnInit(): void {
    this.subscription = this.store.pipe(map(state => getBagItemById(state[SHOP_STORE_KEY], this.product.id))).subscribe((bagItem => {
      this.isInCart = !!bagItem?.quantity;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  addToCart() {
    const bagItem = BagItemAdapter(this.product, 1);
    this.store.dispatch(new AddToCart(bagItem));
    const ref = this.commonsService.appendComponentToBody(ModalComponent);
    ref.instance.bagItem = bagItem;
    ref.instance.confirmButtonClicked.subscribe(() => {
      this.commonsService.destroyAttachedRef(ref);
    });
  }

}
