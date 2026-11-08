import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../data/site-data';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  template: `
    <section class="bg-gradient-to-br from-brand-50 to-white py-4"><div class="container-shell"><p class="mb-4 text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Oferta MAX-DAM</p><h1 class="max-w-[68ch] text-[clamp(2.25rem,3.5vw,4.75rem)] font-extrabold tracking-tight text-ink sm:text-[clamp(2.5rem,4.2vw,5.5rem)]">Rozwiązania myjące dopasowane do pojazdów</h1><p class="mt-6 max-w-[70ch] text-lg leading-8 text-slate-600">Poznaj ofertę automatycznych systemów myjących dla samochodów osobowych i pojazdów ciężarowych.</p></div></section>
    <section class="section-space">
      <div class="container-shell">
        <h2 class="mb-8 text-[clamp(1.5rem,2.1vw,2.75rem)] font-extrabold text-ink">Myjnie samochodów osobowych</h2>
        <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
          @for (p of passenger; track p.slug)
            {
              <app-product-card [product]="p" />
            }
        </div>
        <h2 class="my-8 text-[clamp(1.5rem,2.1vw,2.75rem)] font-extrabold text-ink">Myjnie samochodów cieżarowych</h2>
        <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
          @for (p of truck; track p.slug)
            {
              <app-product-card [product]="p" />
            }
        </div>
      </div>
    </section>
  `
})
export class OfferComponent {
  passenger = products.filter(p => p.category === 'passenger');
  truck = products.filter(p => p.category === 'truck');
}
