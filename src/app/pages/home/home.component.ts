import { Component } from '@angular/core';
import { HomeHeroComponent } from './home-hero.component';
import { RouterLink } from '@angular/router';
import { products, imagePlaceholders, company } from '../../data/site-data';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [RouterLink, ProductCardComponent, HomeHeroComponent],
  template: `
    <app-home-hero />

    <section class="section-space">
      <div class="container-shell">
        <div class="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p class="mb-3 text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Nasza oferta</p><h2 class="text-[clamp(1.875rem,2.7vw,3.5rem)] font-extrabold tracking-tight text-ink">Dobierz myjnię do rodzaju pojazdów</h2></div>
          <a routerLink="/oferta" class="font-bold text-brand-700 hover:text-brand-500">Cała oferta →</a>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <a routerLink="/oferta/myjnie-osobowe" class="group relative min-h-[20rem] 2xl:min-h-[25rem] overflow-hidden rounded-4xl bg-ink">
            <img [src]="images.passenger" alt="Myjnia samochodów osobowych — zdjęcie poglądowe" class="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent"></div>
            <div class="absolute bottom-0 p-8 text-white sm:p-10"><span class="text-xs font-bold uppercase tracking-[.18em] text-brand-200">01 / Osobowe</span><h3 class="mt-3 text-[clamp(1.5rem,2.1vw,2.75rem)] font-extrabold">Myjnie samochodów osobowych</h3><p class="mt-3 max-w-md text-sm leading-6 text-white/80">Rozwiązania tunelowe i portalowe.</p><span class="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition group-hover:bg-brand-500 group-hover:text-white">Poznaj ofertę →</span></div>
          </a>
          <a routerLink="/oferta/myjnie-ciezarowe" class="group relative min-h-[20rem] 2xl:min-h-[25rem] overflow-hidden rounded-4xl bg-ink">
            <img [src]="images.truck" alt="Myjnia pojazdów ciężarowych — zdjęcie poglądowe" class="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent"></div>
            <div class="absolute bottom-0 p-8 text-white sm:p-10"><span class="text-xs font-bold uppercase tracking-[.18em] text-brand-200">02 / Ciężarowe</span><h3 class="mt-3 text-[clamp(1.5rem,2.1vw,2.75rem)] font-extrabold">Myjnie pojazdów ciężarowych</h3><p class="mt-3 max-w-md text-sm leading-6 text-white/80">Systemy do obsługi flot, autobusów i transportu.</p><span class="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition group-hover:bg-brand-500 group-hover:text-white">Poznaj ofertę →</span></div>
          </a>
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="container-shell grid items-center gap-12 lg:grid-cols-2">
        <div class="overflow-hidden rounded-4xl"><img src="assets/images/macan.jpg" alt="Zaplecze techniczne — zdjęcie poglądowe" class="h-[20rem] sm:h-[26rem] 2xl:h-[34rem] w-full object-cover" loading="lazy" /></div>
        <div><p class="mb-3 text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Dlaczego MAX-DAM?</p><h2 class="text-[clamp(1.875rem,2.7vw,3.5rem)] font-extrabold tracking-tight text-ink">Partner w wyborze rozwiązania, nie tylko dostawca urządzenia.</h2><p class="mt-5 leading-8 text-slate-600">Pomagamy przejść od pomysłu do wyboru technologii. Poznajemy potrzeby inwestycji, omawiamy dostępne możliwości i pomagamy znaleźć rozwiązanie dopasowane do planowanego obiektu.</p>
          <div class="mt-8 mb-4 grid gap-5 sm:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-2xl text-brand-600">✦</span><h3 class="mt-3 font-bold">Dobór technologii</h3><p class="mt-2 text-sm leading-6 text-slate-500">Rozwiązanie dopasowane do potrzeb obiektu.</p></div>
            <div class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-2xl text-brand-600">◎</span><h3 class="mt-3 font-bold">Wsparcie inwestora</h3><p class="mt-2 text-sm leading-6 text-slate-500">Kontakt i pomoc na etapie planowania.</p></div>
          </div>
          <a routerLink="/o-firmie"
              class="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white/90 px-7 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:text-brand-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
              Więcej o MAX-DAM
            </a>
          <!-- <a routerLink="/o-firmie" class="mt-8 inline-flex font-bold text-xl text-brand-700 hover:text-brand-500">Więcej o MAX-DAM →</a> -->
        </div>
      </div>
    </section>

    <section class="bg-brand-700 py-16 text-white">
      <div class="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div><p class="text-xs font-bold uppercase tracking-[.18em] text-brand-200">Porozmawiajmy o Twojej inwestycji</p><h2 class="mt-3 max-w-[70ch] text-[clamp(1.5rem,2.1vw,2.75rem)] font-extrabold sm:text-[clamp(1.875rem,2.7vw,3.5rem)]">Szukasz odpowiedniej myjni? Pomożemy Ci zacząć.</h2></div>
        <a routerLink="/kontakt" class="shrink-0 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-brand-800 transition hover:-translate-y-1 hover:bg-brand-50">Skontaktuj się z nami</a>
      </div>
    </section>
    
  `
})
export class HomeComponent {
  products = products;
  featuredProducts = products.filter(p => p.category === 'passenger');
  images = imagePlaceholders;
}
