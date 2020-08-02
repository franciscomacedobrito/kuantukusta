import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './core/components/top-bar/top-bar.component';
import {ProductsComponent} from './core/pages/products/products.component';
import {ProductCardComponent} from './core/components/product-card/product-card.component';
import {StoreModule} from "@ngrx/store";
import {ShopReducer} from "./store/reducer";
import {EffectsModule} from "@ngrx/effects";
import {ShopEffects} from "./store/effects";
import {HttpClientModule} from "@angular/common/http";
import {SHOP_STORE_KEY} from "./store/shop.selector";
import {ModalComponent} from './core/components/modal/modal.component';
import {CartComponent} from './core/pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsComponent,
    ProductCardComponent,
    ModalComponent,
    CartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({[SHOP_STORE_KEY]: ShopReducer}),
    EffectsModule.forRoot([ShopEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
