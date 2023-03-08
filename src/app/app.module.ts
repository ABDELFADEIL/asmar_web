import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from "./home/home.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {MainItemCardComponent} from './shared/main-item-card/main-item-card.component';
import {ShoppingCartModule} from "./modules/shopping-cart/shopping-cart.module";
import {UserAccountModule} from "./modules/user-account/user-account.module";
import {AuthModule} from "./auth/auth.module";
import {ProductDetailsModule} from "./modules/product-details/product-details.module";
import {AlimentaryModule} from "./modules/alimentary/alimentary.module";
import {BeautyCosmeticsModule} from "./modules/beauty-cosmetics/beauty-cosmetics.module";
import {ElectronicsModule} from "./modules/electronics/electronics.module";
import {FashionModule} from "./modules/fashion/fashion.module";
import {PerfumeModule} from "./modules/perfume/perfume.module";
import {SearchModule} from "./modules/search/search.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    MainItemCardComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    UserAccountModule,
    ShoppingCartModule,
    AlimentaryModule,
    BeautyCosmeticsModule,
    ElectronicsModule,
    FashionModule,
    PerfumeModule,
    SearchModule,
    ProductDetailsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
