import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'o-firmie',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'oferta',
    loadComponent: () => import('./pages/offer/offer.component').then(m => m.OfferComponent)
  },
  {
    path: 'oferta/myjnie-osobowe',
    loadComponent: () => import('./pages/passenger-wash/passenger-wash.component').then(m => m.PassengerWashComponent)
  },
  {
    path: 'oferta/myjnie-ciezarowe',
    loadComponent: () => import('./pages/truck-wash/truck-wash.component').then(m => m.TruckWashComponent)
  },
  {
    path: 'oferta/:slug',
    loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];
