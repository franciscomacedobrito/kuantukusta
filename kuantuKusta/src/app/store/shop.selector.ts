import {AppStore} from '../core/interfaces/app-store.interface';
import {BagItem} from '../core/interfaces/bag-item.interface';
import {Product} from '../core/interfaces/product.interface';
import {ShopStore} from '../core/interfaces/shop-store.interface';

export const SHOP_STORE_KEY = 'shop';

export const getAllProducts = (store: AppStore): Product[] => {
  return store?.shop?.products;
};

export const getAllBagItems = (store: AppStore): BagItem[] => {
  return store?.shop?.cart;
};

export const getBagItemById = (store: ShopStore, productId: string): BagItem =>
  store.cart.find(bagItem => bagItem.product.id === productId);

