import {ActionsUnion, ActionTypes} from './actions';
import {ShopStore} from '../core/interfaces/shop-store.interface';
import {BagItem} from '../core/interfaces/bag-item.interface';
import {getBagItemById} from "./shop.selector";

export const initialState: ShopStore = {
  products: [],
  cart: []
};

function doAddProductToCart(state: ShopStore, bagItem: BagItem) {
  const newState = JSON.parse(JSON.stringify(state));
  const alreadyAddedBagItem = getBagItemById(newState, bagItem.product.id);
  if (alreadyAddedBagItem) {
    alreadyAddedBagItem.quantity++;
    return newState;
  } else {
    return {
      ...state,
      cart: [...state.cart, bagItem]
    };
  }
}

export function ShopReducer(state = initialState, action: ActionsUnion): ShopStore {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        products: [...action.payload]
      };

    case ActionTypes.Add:
      return doAddProductToCart(state, action.payload);

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.product.id !== action.payload.id)]
      };

    default:
      return state;
  }
}
