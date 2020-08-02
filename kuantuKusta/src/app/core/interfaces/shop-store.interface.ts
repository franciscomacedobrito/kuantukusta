import {Product} from './product.interface';
import {BagItem} from './bag-item.interface';

export interface ShopStore {
  products: Product[];
  cart: BagItem[];
}
