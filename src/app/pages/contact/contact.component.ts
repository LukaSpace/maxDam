import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { company } from '../../data/site-data';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="bg-gradient-to-br from-brand-50 to-white py-20"><div class="container-shell"><p class="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Kontakt</p><h1 class="mt-4 text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">Porozmawiajmy o Twojej inwestycji</h1><p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Opowiedz nam, jakiej myjni szukasz. Skontaktujemy się, aby omówić możliwe rozwiązania.</p></div></section>
    <section class="section-space"><div class="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <div class="space-y-5">
        <div class="rounded-3xl bg-ink p-8 text-white"><h2 class="text-2xl font-extrabold">MAX-DAM</h2><p class="mt-3 text-sm leading-7 text-slate-300">Dane kontaktowe poniżej są przykładowe i wymagają uzupełnienia przed publikacją.</p><div class="mt-8 space-y-5 text-sm"><p><span class="block text-xs text-slate-400">Telefon</span><a [href]="'tel:' + company.phone" class="mt-1 inline-block font-bold">{{ company.phone }}</a></p><p><span class="block text-xs text-slate-400">E-mail</span><a [href]="'mailto:' + company.email" class="mt-1 inline-block font-bold">{{ company.email }}</a></p><p><span class="block text-xs text-slate-400">Adres</span><span class="mt-1 inline-block font-bold">{{ company.address }}</span></p><p><span class="block text-xs text-slate-400">Godziny kontaktu</span><span class="mt-1 inline-block font-bold">{{ company.hours }}</span></p></div></div>
      </div>
      <form (ngSubmit)="submit()" #contactForm="ngForm" class="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft sm:p-10">
        <h2 class="text-2xl font-extrabold text-ink">Wyślij zapytanie</h2><p class="mt-2 text-sm text-slate-500">Pola oznaczone * są wymagane.</p>
        <div class="mt-7 grid gap-5 sm:grid-cols-2">
          <label class="text-sm font-semibold text-slate-700">Imię i nazwisko *<input name="name" [(ngModel)]="form.name" required class="form-field mt-2" placeholder="Jan Kowalski" /></label>
          <label class="text-sm font-semibold text-slate-700">Adres e-mail *<input name="email" [(ngModel)]="form.email" required email type="email" class="form-field mt-2" placeholder="jan@firma.pl" /></label>
          <label class="text-sm font-semibold text-slate-700 sm:col-span-2">Temat zapytania<select name="topic" [(ngModel)]="form.topic" class="form-field mt-2"><option>Myjnia samochodów osobowych</option><option>Myjnia pojazdów ciężarowych</option><option>Inne</option></select></label>
          <label class="text-sm font-semibold text-slate-700 sm:col-span-2">Wiadomość *<textarea name="message" [(ngModel)]="form.message" required rows="5" class="form-field mt-2" placeholder="Opisz krótko swoją inwestycję..."></textarea></label>
        </div>
        <label class="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500"><input type="checkbox" required name="consent" [(ngModel)]="form.consent" class="mt-1 accent-brand-600" />Wyrażam zgodę na kontakt w sprawie mojego zapytania. Treść klauzuli informacyjnej należy uzupełnić.</label>
        <button [disabled]="!contactForm.valid" class="mt-7 w-full rounded-full bg-brand-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40">Wyślij wiadomość →</button>
        @if (submitted) {<p role="status" class="mt-4 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">Formularz demonstracyjny został wypełniony. Przed publikacją należy podłączyć wysyłkę wiadomości do API.</p>}
      </form>
    </div></section>
  `,
  styles: [`.form-field{display:block;width:100%;border:1px solid #dbe4ee;border-radius:14px;background:#f8fafc;padding:13px 15px;font:inherit;font-weight:400;outline:none;transition:border-color .2s,box-shadow .2s}.form-field:focus{border-color:#078bd5;box-shadow:0 0 0 3px rgba(7,139,213,.12)}`]
})
export class ContactComponent {
  company = company;
  submitted = false;
  form = { name: '', email: '', topic: 'Myjnia samochodów osobowych', message: '', consent: false };
  submit() { this.submitted = true; }
}
