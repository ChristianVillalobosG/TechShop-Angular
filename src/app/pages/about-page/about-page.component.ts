import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit{
  constructor(private meta: Meta) {}
  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'about page' });
    this.meta.updateTag({ name: 'keywords', content: 'About Us, Our Mission, Our fundamental principles are, techshop, Our Story, Our Store'});
  }
}
