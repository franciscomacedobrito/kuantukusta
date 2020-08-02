import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppStore} from "../../interfaces/app-store.interface";
import {getAllBagItems} from "../../../store/shop.selector";
import {Subscription} from "rxjs";
import {BagItem} from "../../interfaces/bag-item.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  bagItems: BagItem[] = [];
  private subscription: Subscription;

  constructor(private store: Store<AppStore>) {
    this.subscription = store.pipe(select(getAllBagItems)).subscribe((bagItems) => this.bagItems = bagItems);
  }

  ngOnInit(): void {
  }

}
