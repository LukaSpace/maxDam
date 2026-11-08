import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 border-b border-slate-100/80 bg-white/80 backdrop-blur-xl">
      <div class="container-shell flex h-[76px] items-center justify-between gap-6">
        <a routerLink="/" aria-label="MAX-DAM — strona główna" class="shrink-0">
          <img src="assets/logo.png" alt="MAX-DAM" class="h-12 w-auto object-contain" />
        </a>

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Główna nawigacja">
          <a routerLink="/o-firmie" routerLinkActive="text-brand-600" class="nav-link">O firmie</a>
          <a routerLink="/oferta" routerLinkActive="text-brand-600" class="nav-link">Oferta</a>
          <a routerLink="/kontakt" routerLinkActive="text-brand-600" class="nav-link">Kontakt</a>
        </nav>

        <a routerLink="/kontakt" class="hidden rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl sm:inline-flex">
          Zapytaj o ofertę <span class="ml-2">↗</span>
        </a>

        <details class="relative lg:hidden">
          <summary class="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 text-xl text-ink">☰</summary>
          <div class="absolute right-0 top-14 flex min-w-52 flex-col gap-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-soft">
            <a routerLink="/o-firmie" class="rounded-xl px-4 py-3 hover:bg-brand-50">O firmie</a>
            <a routerLink="/oferta" class="rounded-xl px-4 py-3 hover:bg-brand-50">Oferta</a>
            <a routerLink="/kontakt" class="rounded-xl px-4 py-3 hover:bg-brand-50">Kontakt</a>
          </div>
        </details>
      </div>
    </header>
  `,
  styles: [`.nav-link{font-size:.9rem;font-weight:600;color:#475569;transition:color .2s}.nav-link:hover{color:#078bd5}`]
})
export class HeaderComponent {}
