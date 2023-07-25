import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CollectionComponent } from './collection/collection.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { DifferenceComponent } from './difference/difference.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'navbar', component: NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'our-work', component: OurWorkComponent},
  {path: 'difference', component: DifferenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[NavbarComponent, HomeComponent, ProductsComponent, CollectionComponent, OurWorkComponent, DifferenceComponent]
