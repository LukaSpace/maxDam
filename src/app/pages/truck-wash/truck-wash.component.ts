import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../data/site-data';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  template: `
    <section class="bg-gradient-to-br from-brand-50 to-white py-20"><div class="container-shell"><p class="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Oferta / Pojazdy ciężarowe</p><h1 class="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">Myjnie pojazdów ciężarowych i flotowych</h1><p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Systemy myjące dla firm transportowych, operatorów flot, autobusów i pojazdów użytkowych.</p></div></section>
    <section class="section-space"><div class="container-shell grid gap-10 lg:grid-cols-[1fr_.9fr]"><div><p class="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Ceccato Baltic</p><h2 class="mt-3 text-4xl font-extrabold text-ink">Baltic — rozwiązanie dla dużych pojazdów</h2><p class="mt-5 leading-8 text-slate-600">{{ product.description }}</p><ul class="mt-7 space-y-3">@for (feature of product.features; track feature) {<li class="flex gap-3 text-slate-600"><span class="font-bold text-brand-600">✓</span>{{ feature }}</li>}</ul><a routerLink="/oferta/baltic" class="mt-8 inline-flex rounded-full bg-brand-600 px-7 py-4 font-bold text-white hover:bg-brand-700">Poznaj Baltic →</a></div><img [src]="product.image" alt="Myjnia ciężarowa — zdjęcie poglądowe" class="h-[390px] w-full rounded-4xl object-cover shadow-soft" /></div></section>
  `
})
export class TruckWashComponent {
  product = products.find(p => p.slug === 'baltic')!;
}
