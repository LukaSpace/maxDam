import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { company } from '../../data/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-ink text-white">
      <div class="container-shell grid gap-10 py-8 md:grid-cols-[1.3fr_1fr_1fr] 2xl:gap-16">
        <div>
          <div class="flex items-end gap-3">
            <img src="assets/logo.png" alt="Logo Max-Dam" class="h-12 w-auto brightness-0 invert">
            <span class="font-bold text-lg">{{company.name}}</span>
          </div>
          <p class="mt-4 max-w-sm text-sm leading-7 text-slate-300">{{company.tagline}}</p>
        </div>  

        <div>
          
        </div>

        <div>
          <h3 class="mb-4 font-bold">Kontakt</h3>
          <p class="mb-2 text-sm text-slate-300">Telefon: <a href="tel:+48668401280" class="text-white inline-block font-bold">{{ company.phone }}</a></p>
          <p class="mb-2 text-sm text-slate-300">E-mail: <a href="mailto:damczm@wp.pl" class="text-white inline-block font-bold">{{ company.email }}</a></p>
          <p class="text-sm text-slate-300">Adres: <a class="text-white inline-block font-bold" href="https://maps.google.com/?q=ul.+Tokarska+12,+44-151+Gliwice" target="_blank">{{ company.address }}</a></p>
          
        </div>
      </div>

      <div class="text-center text-xs text-slate-400">
        Created by 
        <a href="https://lukaspace.github.io/main/#/" target="_blank" class="hover:underline">LukaSpace</a>.
        All rights reserved {{ year }} ©
      </div>
    </footer>
  `
})
export class FooterComponent {
  company = company;
  year = new Date().getFullYear();
}
