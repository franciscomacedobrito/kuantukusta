import {Product} from '../interfaces/product.interface';
import {BagItem} from '../interfaces/bag-item.interface';

export function BagItemAdapter(product: Product, quantity: number): BagItem {
  return {product, quantity}
}
