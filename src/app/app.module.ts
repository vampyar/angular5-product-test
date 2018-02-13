import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, Injector, NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpHandler} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { ToasterModule, ToasterService} from 'angular2-toaster';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { AppRoutingModule } from './app.routing';
import { Level0Guard } from './guards/level0.guard';
import { UserService } from './providers/user/user.service';
import { AuthGuard } from './guards/auth.guard';
import { environment } from '../environments/environment';
import { HttpClientService } from './providers/http/http-client.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GlobalErrorHandler } from './providers/logging/global-error.service';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductItemComponent } from './products/product-item/product-item.component';

import { ProductsService } from './products/products.service';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './products/cart/cart.component';
import { AddToCartComponent } from './products/cart/add-to-cart/add-to-cart.component';
import {CartService} from './products/cart/cart.service';

const GUARDS = [
    {
        provide: 'Level0Guard',
        useClass: Level0Guard
    },
    {
        provide: 'AuthGuard',
        useClass: AuthGuard,
        deps: [UserService, Router]
    }
];


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    DashboardComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductComponent,
    CartComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule,
    AppRoutingModule
  ],
  providers: [
      {
          provide: 'APIConfig',
          useValue: environment.API
      },
      {
          provide: ErrorHandler,
          useClass: GlobalErrorHandler
      },
      {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
      },
      {
          provide: HttpClientService,
          useFactory: httpFactory,
          deps: [HttpHandler]
      },
      ToasterService,
      UserService,
      ProductsService,
      CartService,
      ...GUARDS
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }

export function httpFactory (httpHandler: HttpHandler, i: Injector) {
    return new HttpClientService(httpHandler, i);
}
