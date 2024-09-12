import { NgModule } from '@angular/core';
import { ProductService } from './services/product.service';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroComponent } from './components/homeComponents/hero/hero.component';
import { MainComponent } from './components/homeComponents/main/main.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeroAboutComponent } from './components/aboutComponents/hero-about/hero-about.component';
import { ElectronicsComponent } from './products/components/electronics/electronics.component';
import { HeaderComponent } from './products/components/header/header.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { MensClothingComponent } from './products/components/mens-clothing/mens-clothing.component';
import { JeweleryComponent } from './products/components/jewelery/jewelery.component';
import { WomensClothingComponent } from './products/components/womens-clothing/womens-clothing.component';
import { provideHttpClient } from '@angular/common/http';
import { SpinnerComponent } from './products/components/spinner/spinner.component';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';
import { HeaderContactComponent } from './contact/components/header-contact/header-contact.component';
import { FormComponent } from './contact/components/form/form.component';
import { MapComponent } from './contact/components/map/map.component';











@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HeroComponent,
    MainComponent,
    FooterComponent,
     AboutPageComponent,
    HeroAboutComponent,
    ElectronicsComponent,
    HeaderComponent,
    ProductsPageComponent,
     MensClothingComponent,
    JeweleryComponent,
    WomensClothingComponent,
    SpinnerComponent,
    ContactPageComponent,
    HeaderContactComponent,
    FormComponent,
    MapComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,







  ],
  providers: [
    provideHttpClient(),
     provideClientHydration(),
     ProductService


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(private productService: ProductService) {}
}
