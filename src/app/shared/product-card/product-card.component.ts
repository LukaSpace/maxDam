import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../data/site-data';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition duration-500 hover:-translate-y-2 hover:border-brand-100 hover:shadow-2xl">
      <a [routerLink]="['/oferta', product.slug]" class="block">
        <div class="relative h-[clamp(12rem,18vw,20rem)] overflow-hidden bg-slate-100">
          <img [src]="product.image" [alt]="product.name" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          @if (product.badge) {
            <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-brand-700 shadow">{{ product.badge }}</span>
          }
        </div>
        <div class="p-6">
          <p class="mb-2 text-xs font-bold uppercase tracking-[.16em] text-brand-600">{{ product.eyebrow }}</p>
          <h3 class="mb-2 text-2xl font-extrabold tracking-tight text-ink">{{ product.name }}</h3>
          <p class="min-h-14 text-sm leading-6 text-slate-500">{{ product.shortDescription }}</p>
          <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition group-hover:gap-3">
            Poznaj model <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </article>
  `
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
