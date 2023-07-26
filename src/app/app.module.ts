import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CollectionComponent } from './collection/collection.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { DifferenceComponent } from './difference/difference.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CollectionComponent,
    OurWorkComponent,
    DifferenceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
