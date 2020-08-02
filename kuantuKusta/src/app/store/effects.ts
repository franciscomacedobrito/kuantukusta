import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ActionTypes} from './actions';
import {ProductsService} from '../core/services/products.service';
import {Store} from "@ngrx/store";
import {AppStore} from "../core/interfaces/app-store.interface";

@Injectable()
export class ShopEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store$: Store<AppStore>
  ) {
  }

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.productsService.getAll().pipe(
        map(products => {
          return {type: ActionTypes.LoadSuccess, payload: products};
        }),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  addedProduct$ = this.actions$.pipe(
    ofType(ActionTypes.Add),
    mergeMap(() => {
        return of({type: ActionTypes.AddedSuccess, payload: {}})
      }
    )
  );

}
