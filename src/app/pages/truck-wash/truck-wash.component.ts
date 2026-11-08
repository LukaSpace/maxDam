import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../data/site-data';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  template: `
    <section class="bg-gradient-to-br from-brand-50 to-white py-4"><div class="container-shell"><p class="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Oferta / Pojazdy ciężarowe</p><h1 class="mt-4 max-w-[68ch] text-[clamp(2.25rem,3.5vw,4.75rem)] font-extrabold tracking-tight text-ink sm:text-[clamp(2.5rem,4.2vw,5.5rem)]">Myjnie pojazdów ciężarowych i flotowych</h1><p class="mt-6 max-w-[70ch] text-lg leading-8 text-slate-600">Systemy myjące dla firm transportowych, operatorów flot, autobusów i pojazdów użytkowych.</p></div></section>
    <section class="section-space"><div class="container-shell grid gap-10 lg:grid-cols-[1fr_.9fr]"><div><p class="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Ceccato Polar</p><h2 class="mt-3 text-[clamp(1.875rem,2.7vw,3.5rem)] font-extrabold text-ink">Polar — rozwiązanie dla dużych pojazdów</h2><p class="mt-5 leading-8 text-slate-600">{{ product.description }}</p><ul class="mt-7 space-y-3">@for (feature of product.features; track feature) {<li class="flex gap-3 text-slate-600"><span class="font-bold text-brand-600">✓</span>{{ feature }}</li>}</ul><a routerLink="/oferta/polar" class="mt-8 inline-flex rounded-full bg-brand-600 px-7 py-4 font-bold text-white hover:bg-brand-700">Poznaj Polar →</a></div><img [src]="product.image" alt="Myjnia ciężarowa — zdjęcie poglądowe" class="h-[21rem] 2xl:h-[32rem] w-full rounded-4xl object-cover shadow-soft" /></div></section>
  `
})
export class TruckWashComponent {
  product = products.find(p => p.slug === 'polar')!;
}
