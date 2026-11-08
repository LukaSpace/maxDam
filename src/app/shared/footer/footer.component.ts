import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { company } from '../../data/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-ink text-white">
      <div class="container-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src="assets/logo.png" alt="MAX-DAM" class="mb-5 h-12 w-auto brightness-0 invert" />
          <p class="max-w-sm text-sm leading-7 text-slate-300">{{ company.description }}</p>
        </div>
        <div>
          <h3 class="mb-4 font-bold">Nawigacja</h3>
          <div class="flex flex-col gap-3 text-sm text-slate-300">
            <a routerLink="/o-firmie" class="hover:text-white">O firmie</a>
            <a routerLink="/oferta" class="hover:text-white">Oferta</a>
            <a routerLink="/kontakt" class="hover:text-white">Kontakt</a>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-bold">Kontakt</h3>
          <p class="mb-2 text-sm text-slate-300">{{ company.phone }}</p>
          <p class="mb-2 text-sm text-slate-300">{{ company.email }}</p>
          <p class="text-sm text-slate-300">{{ company.address }}</p>
        </div>
      </div>
      <div class="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {{ year }} MAX-DAM. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  `
})
export class FooterComponent {
  company = company;
  year = new Date().getFullYear();
}
