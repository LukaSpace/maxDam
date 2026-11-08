import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../data/site-data';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  template: `
    <section class="bg-gradient-to-br from-brand-50 to-white py-20">
      <div class="container-shell">
        <p class="mb-4 text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Oferta MAX-DAM</p>
        <h1 class="max-w-3xl text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">Rozwiązania myjące dopasowane do pojazdów</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Poznaj ofertę automatycznych systemów myjących dla samochodów osobowych i pojazdów ciężarowych.</p>
      </div>
    </section>
    <section class="section-space">
      <div class="container-shell">
        <h2 class="mb-8 text-3xl font-extrabold text-ink">Myjnie samochodów osobowych</h2>
        <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          @for (p of passenger; track p.slug) {
            <app-product-card [product]="p" />
          }
        </div>
        <div class="mt-16">
          <h2 class="mb-8 text-3xl font-extrabold text-ink">Myjnie samochodów ciężarowych</h2>
          <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            @for (p of truck; track p.slug) {
              <app-product-card [product]="p" />
            }
          </div>
        </div>
      </div>
    </section>
`
})
export class OfferComponent {
  passenger = products.filter(p => p.category === 'passenger');
  truck = products.filter(p => p.category === 'truck');
}
