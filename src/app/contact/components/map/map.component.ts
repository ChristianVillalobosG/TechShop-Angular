import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements OnInit {
  map!: mapboxgl.Map;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      mapboxgl.accessToken = 'pk.eyJ1IjoiY3ZpbGxhbG9ib3NnIiwiYSI6ImNtMHNqZGRzdjAyMm8yeHBxb25vYWozeWYifQ.izuEKc7iSzIyVUWA0AAang';
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-84.0757106, 9.9335866,],
        zoom: 18
      });
    }
    new mapboxgl.Marker()
         .setLngLat([-84.0757106, 9.9335866,])
          .addTo(this.map);
      }
  }

