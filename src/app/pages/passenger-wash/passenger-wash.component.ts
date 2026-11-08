import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../data/site-data';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  template: `
    <section class="bg-gradient-to-br from-brand-50 to-white py-4"><div class="container-shell"><p class="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Oferta / Samochody osobowe</p><h1 class="mt-4 max-w-[68ch] text-[clamp(2.25rem,3.5vw,4.75rem)] font-extrabold tracking-tight text-ink sm:text-[clamp(2.5rem,4.2vw,5.5rem)]">Automatyczne myjnie samochodów osobowych</h1><p class="mt-6 max-w-[70ch] text-lg leading-8 text-slate-600">Rozwiązania do nowoczesnych myjni, stacji paliw i obiektów usługowych. Wybierz model i zapytaj o konfigurację.</p></div></section>
    <section class="section-space"><div class="container-shell grid gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">@for (p of products; track p.slug) {<app-product-card [product]="p" />}</div></section>
    <section class="bg-brand-700 py-14 text-white"><div class="container-shell flex flex-col justify-between gap-6 md:flex-row md:items-center"><h2 class="text-[clamp(1.5rem,2.1vw,2.75rem)] font-extrabold">Nie wiesz, który model wybrać?</h2><a routerLink="/kontakt" class="rounded-full bg-white px-7 py-4 font-bold text-brand-800">Zapytaj o dobór urządzenia →</a></div></section>
  `
})
export class PassengerWashComponent {
  products = products.filter(p => p.category === 'passenger');
}
