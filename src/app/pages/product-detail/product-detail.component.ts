import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { products } from '../../data/site-data';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (product; as p) {
      <section class="bg-gradient-to-br from-brand-50 to-white py-12"><div class="container-shell"><a routerLink="/oferta" class="text-sm font-semibold text-brand-700">← Wróć do oferty</a><div class="mt-10 grid items-center gap-12 lg:grid-cols-2"><div><p class="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">{{ p.eyebrow }}</p><h1 class="mt-4 text-[clamp(2.5rem,4.2vw,5.5rem)] font-extrabold tracking-tight text-ink">{{ p.name }}</h1><p class="mt-6 text-lg leading-8 text-slate-600">{{ p.description }}</p><a routerLink="/kontakt" class="mt-8 inline-flex rounded-full bg-brand-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-brand-700">Zapytaj o {{ p.name }} →</a></div><img [src]="p.image" [alt]="p.name + ' — zdjęcie poglądowe'" class="h-[22rem] sm:h-[27rem] 2xl:h-[36rem] w-full rounded-4xl object-cover shadow-soft" /></div></div></section>
      <section class="section-space"><div class="container-shell grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div><h2 class="text-[clamp(1.5rem,2.1vw,2.75rem)] font-extrabold text-ink">Najważniejsze informacje</h2><p class="mt-4 text-sm leading-7 text-slate-500">Poniższe punkty są tymczasowym opisem marketingowym. Specyfikację należy uzupełnić na podstawie aktualnej dokumentacji producenta.</p></div><ul class="space-y-4">@for (feature of p.features; track feature) {<li class="rounded-2xl border border-slate-100 bg-white p-5 font-semibold text-ink shadow-soft"><span class="mr-3 text-brand-600">✓</span>{{ feature }}</li>}</ul></div></section>
    } @else {
      <section class="container-shell py-32 text-center"><h1 class="text-[clamp(1.875rem,2.7vw,3.5rem)] font-extrabold">Nie znaleziono produktu</h1><a routerLink="/oferta" class="mt-6 inline-block text-brand-700">Wróć do oferty</a></section>
    }
  `
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  product = products.find(p => p.slug === this.route.snapshot.paramMap.get('slug'));
}
