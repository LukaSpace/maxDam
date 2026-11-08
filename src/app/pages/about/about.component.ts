import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { company, imagePlaceholders } from '../../data/site-data';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-gradient-to-br from-brand-50 to-white py-4">
      <div class="container-shell grid items-center gap-12 lg:grid-cols-2">
        <div><p class="mb-4 text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">O firmie</p><h1 class="text-[clamp(2.25rem,3.5vw,4.75rem)] font-extrabold tracking-tight text-ink sm:text-[clamp(2.5rem,4.2vw,5.5rem)]">Poznaj <span class="text-brand-600">MAX-DAM</span></h1><p class="mt-7 text-lg leading-8 text-slate-600">{{ company.description }}</p><a routerLink="/kontakt" class="mt-8 inline-flex rounded-full bg-brand-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-brand-700">Porozmawiajmy →</a></div>
        <img src="assets/images/macan.jpg" alt="Branża myjni samochodowych — zdjęcie poglądowe" class="h-[20rem] sm:h-[26rem] 2xl:h-[34rem] w-full rounded-4xl object-cover shadow-soft" />
      </div>
    </section>
    <section class="section-space"><div class="container-shell"><h2 class="text-[clamp(1.5rem,2.1vw,2.75rem)] font-extrabold text-ink">Technologia, doradztwo i podejście do potrzeb inwestora</h2><div class="mt-8 grid gap-5 md:grid-cols-3">@for (item of values; track item.title) {<article class="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft"><span class="text-[clamp(1.5rem,2.1vw,2.75rem)] text-brand-600">{{ item.icon }}</span><h3 class="mt-4 text-xl font-bold">{{ item.title }}</h3><p class="mt-3 text-sm leading-7 text-slate-500">{{ item.text }}</p></article>}</div></div></section>
  `
})
export class AboutComponent {
  company = company;
  images = imagePlaceholders;
  values = [
    { icon: '🎯', title: 'Dobór rozwiązania', text: 'Pomagamy określić, jaki typ urządzenia będzie odpowiedni dla planowanej inwestycji.' },
    { icon: '⚙️', title: 'Technologia Ceccato', text: 'Prezentujemy rozwiązania producenta i pomagamy porównać dostępne możliwości.' },
    { icon: '🤝', title: 'Kontakt i wsparcie', text: 'Stawiamy na jasną komunikację i indywidualne podejście do każdego zapytania.' }
  ];
}
