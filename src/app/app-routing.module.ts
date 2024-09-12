import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';

import { ElectronicsComponent } from './products/components/electronics/electronics.component';
import { MensClothingComponent } from './products/components/mens-clothing/mens-clothing.component';
import { JeweleryComponent } from './products/components/jewelery/jewelery.component';
import { WomensClothingComponent } from './products/components/womens-clothing/womens-clothing.component';



const routes: Routes = [

{
    path: '',
    component: HomePageComponent
},

{

  path: 'about',
  component: AboutPageComponent

},

  {
    path: 'products',
    component: ProductsPageComponent,
    children: [
      { path: '', redirectTo: 'electronics', pathMatch: 'full' },
      { path: 'electronics', component: ElectronicsComponent },
      { path: 'mens-clothing', component: MensClothingComponent },
      { path: 'jewelery', component: JeweleryComponent },
      { path: 'womens-clothing', component: WomensClothingComponent }

    ]
  },

  {

    path: 'contact',
    component: ContactPageComponent

  },


{
  path: '**',
  redirectTo: '',
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
