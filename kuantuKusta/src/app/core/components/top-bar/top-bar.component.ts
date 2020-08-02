import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppStore} from "../../interfaces/app-store.interface";
import {getAllBagItems} from "../../../store/shop.selector";
import {sumBy} from 'lodash';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  totalProducts: number = 0;

  constructor(private store: Store<AppStore>) {
    store.pipe(select(getAllBagItems)).subscribe((allBagItems => {
      this.totalProducts = sumBy(allBagItems, 'quantity');
    }))
  }

}
