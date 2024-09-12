import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit{
  constructor(private meta: Meta) {}
  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'contact page' });
    this.meta.updateTag({ name: 'keywords', content: 'Contact Us, Contact Information, contacto@techshop.cr, +506 8765 4321'});
  }
}
