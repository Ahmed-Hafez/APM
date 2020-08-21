import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product/product-list.component';
import { StarComponent } from './shared/star.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
