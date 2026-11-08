import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="relative isolate flex min-h-[calc(100svh-9rem)] w-full items-center overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100 px-[clamp(1rem,3vw,5rem)] py-[clamp(3rem,7vw,7rem)]">
      <div aria-hidden="true" class="pointer-events-none absolute -left-[10rem] top-1/4 h-[min(40vw,35rem)] w-[min(40vw,35rem)] rounded-full bg-sky-300/25 blur-[5rem]"></div>
      <div aria-hidden="true" class="pointer-events-none absolute -right-[7rem] bottom-0 h-[min(45vw,40rem)] w-[min(45vw,40rem)] rounded-full bg-blue-400/20 blur-[6rem]"></div>

      <div class="relative mx-auto grid w-full items-center gap-[clamp(2.5rem,5vw,6rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <section class="relative z-10 max-w-[55rem]">
          <div class="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
            <span class="relative flex h-2.5 w-2.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-50 motion-reduce:animate-none"></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500"></span>
            </span>
            MAX-DAM · Pracujemy nad stroną
          </div>

          <h1 class="text-[clamp(2.5rem,5vw,6.75rem)] font-extrabold leading-[1.06] tracking-[-0.055em] text-slate-900">
            Coś nowego <span class="block bg-gradient-to-r from-brand-700 via-brand-500 to-sky-400 bg-clip-text text-transparent">jest w budowie.</span>
          </h1>
          <p class="mt-6 max-w-[45rem] text-[clamp(1rem,1.25vw,1.4rem)] leading-relaxed text-slate-600">
            Przygotowujemy tę część serwisu, aby jeszcze lepiej prezentować rozwiązania dla profesjonalnych myjni samochodowych. Zapraszamy ponownie wkrótce.
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <a routerLink="/" class="hero-primary group inline-flex items-center justify-center gap-3 rounded-full bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-brand-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
              <span aria-hidden="true">←</span> Wróć na stronę główną
            </a>
            <a routerLink="/kontakt" class="inline-flex min-h-12 items-center justify-center rounded-full border border-blue-200 bg-white px-7 py-3.5 text-[clamp(.9rem,1vw,1.1rem)] font-bold text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 motion-reduce:transform-none">
              Skontaktuj się z nami ↗
            </a>
          </div>
        </section>

        <div aria-hidden="true" class="relative mx-auto flex w-full max-w-[42rem] items-center justify-center py-4">
          <div class="absolute inset-[10%] rounded-full bg-gradient-to-tr from-blue-200/70 to-sky-100/70 blur-3xl"></div>
          <div class="construction-float relative flex aspect-square w-[min(75vw,32rem)] items-center justify-center rounded-[clamp(2rem,5vw,5rem)] border border-white/90 bg-white/65 shadow-[0_2rem_5rem_rgba(14,79,135,0.13)] backdrop-blur-xl">
            <div class="absolute inset-[8%] rounded-[clamp(1.5rem,4vw,4rem)] border border-dashed border-blue-300/80"></div>
            <svg class="relative h-[60%] w-[60%] text-blue-700" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="42" y="70" width="236" height="178" rx="18" fill="#EFF8FF" stroke="#1D4ED8" stroke-width="8"/>
              <path d="M42 108H278" stroke="#1D4ED8" stroke-width="8"/>
              <circle cx="70" cy="89" r="6" fill="#38BDF8"/>
              <circle cx="91" cy="89" r="6" fill="#60A5FA"/>
              <circle cx="112" cy="89" r="6" fill="#93C5FD"/>
              <path d="M100 177L141 218L225 134" stroke="#0284C7" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M80 265H240" stroke="#93C5FD" stroke-width="7" stroke-linecap="round"/>
              <circle cx="251" cy="55" r="27" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="6"/>
              <path d="M251 41V56L262 64" stroke="#1D4ED8" stroke-width="6" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .construction-float { animation: construction-float 6s ease-in-out infinite; }
    @keyframes construction-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1rem); } }
    @media (prefers-reduced-motion: reduce) { .construction-float { animation: none; } }
  `]
})
export class UnderConstructionComponent {}
