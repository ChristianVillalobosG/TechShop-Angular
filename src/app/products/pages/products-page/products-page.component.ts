import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from "aos";
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private meta: Meta) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();


      this.meta.updateTag({ name: 'description', content: 'This is the product page of techshop' });
      this.meta.updateTag({ name: 'keywords', content: 'products, shop, Electronics, Jewelery' });
      this.meta.updateTag({ property: 'og:title', content: 'Product catalog' });

    }
  }


}





