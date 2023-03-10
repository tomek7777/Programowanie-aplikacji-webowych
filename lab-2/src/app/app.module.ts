import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RevenueComponentComponent } from './revenue-component/revenue-component.component';
import { EarningsProductComponent } from './earnings-product/earnings-product.component';

@NgModule({
  declarations: [
    AppComponent,
    RevenueComponentComponent,
    EarningsProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
