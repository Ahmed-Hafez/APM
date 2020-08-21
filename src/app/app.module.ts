import { ProductDetailsGuard } from './product/product-details.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from "@angular/router";

import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product/product-list.component';
import { StarComponent } from './shared/star.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id',
        canActivate: [ProductDetailsGuard],
        component:ProductListComponent
       },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // Here we should redirect to page not found but I make this as demo version 
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
