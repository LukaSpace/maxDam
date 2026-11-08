import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { company } from '../../data/site-data';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="bg-gradient-to-br from-brand-50 to-white py-4"><div class="container-shell"><p class="text-xs font-extrabold uppercase tracking-[.18em] text-brand-600">Kontakt</p><h1 class="mt-4 text-[clamp(2.25rem,3.5vw,4.75rem)] font-extrabold tracking-tight text-ink sm:text-[clamp(2.5rem,4.2vw,5.5rem)]">Porozmawiajmy o Twojej inwestycji</h1><p class="mt-6 max-w-[70ch] text-lg leading-8 text-slate-600">Opowiedz nam, jakiej myjni szukasz. Skontaktujemy się, aby omówić możliwe rozwiązania.</p></div></section>
    <section class="section-space"><div class="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <div class="space-y-5">
        <div class="rounded-3xl bg-ink p-8 text-white">
          <h2 class="text-2xl font-extrabold">{{company.name}}</h2>
          <p class="mt-4 max-w-sm text-sm leading-7 text-slate-300">{{company.tagline}}</p>
          <div class="mt-8 space-y-5 text-sm">
            <p>
              <span class="block text-xs text-slate-400">Telefon</span>
              <a [href]="'tel:' + company.phone" class="mt-1 inline-block font-bold">{{ company.phone }}</a>
            </p>
            <p>
              <span class="block text-xs text-slate-400">E-mail</span>
              <a [href]="'mailto:' + company.email" class="mt-1 inline-block font-bold">{{ company.email }}</a>
            </p>
            <p>
              <span class="block text-xs text-slate-400">Adres</span>
              <a class="mt-1 inline-block font-bold" href="https://maps.google.com/?q=ul.+Tokarska+12,+44-151+Gliwice" target="_blank">{{ company.address }}</a>
            </p>
            <iframe
              class="h-56 w-full rounded-2xl border-0"
              src="https://maps.google.com/maps?q=Tokarska%2012%2C%2044-151%20Gliwice&output=embed"
              title="Mapa dojazdu: Tokarska 12, 44-151 Gliwice"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
      <form (ngSubmit)="submit(contactForm)" #contactForm="ngForm" class="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft sm:p-10">
        <h2 class="text-2xl font-extrabold text-ink">Wyślij zapytanie</h2><p class="mt-2 text-sm text-slate-500">Pola oznaczone * są wymagane.</p>
        <div class="mt-7 grid gap-5 sm:grid-cols-2">
          <label class="text-sm font-semibold text-slate-700">Imię i nazwisko *<input #name="ngModel" name="name" [(ngModel)]="form.name" required pattern=".*\\S.*" class="form-field mt-2" placeholder="Jan Kowalski" />
            @if (name.invalid && (name.dirty || name.touched)) {<span class="mt-1 block text-xs font-normal text-red-600">Podaj imię i nazwisko.</span>}
          </label>
          <label class="text-sm font-semibold text-slate-700">Adres e-mail *<input #email="ngModel" name="email" [(ngModel)]="form.email" required email type="email" autocomplete="email" class="form-field mt-2" placeholder="jan@firma.pl" />
            @if (email.invalid && (email.dirty || email.touched)) {<span class="mt-1 block text-xs font-normal text-red-600">Wprowadź poprawny adres e-mail.</span>}
          </label>
          <label class="text-sm font-semibold text-slate-700 sm:col-span-2">Temat zapytania<select name="topic" [(ngModel)]="form.topic" class="form-field mt-2"><option>Myjnia samochodów osobowych</option><option>Myjnia pojazdów ciężarowych</option><option>Serwis</option><option>Inne</option></select></label>
          <label class="text-sm font-semibold text-slate-700 sm:col-span-2">Wiadomość *<textarea #message="ngModel" name="message" [(ngModel)]="form.message" required pattern=".*\\S.*" rows="5" class="form-field mt-2" placeholder="Opisz krótko swoją inwestycję..."></textarea>
            @if (message.invalid && (message.dirty || message.touched)) {<span class="mt-1 block text-xs font-normal text-red-600">Wpisz treść wiadomości.</span>}
          </label>
        </div>
        <button [disabled]="!contactForm.valid" class="mt-7 w-full rounded-full bg-brand-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40">Wyślij wiadomość →</button>
        @if (submitted) {<p role="status" class="mt-4 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">Powinna otworzyć się aplikacja pocztowa z przygotowaną wiadomością. Wyślij ją, aby przekazać zapytanie.</p>}
      </form>
    </div></section>
  `,
  styles: [`.form-field{display:block;width:100%;border:1px solid #dbe4ee;border-radius:14px;background:#f8fafc;padding:13px 15px;font:inherit;font-weight:400;outline:none;transition:border-color .2s,box-shadow .2s}.form-field:focus{border-color:#078bd5;box-shadow:0 0 0 3px rgba(7,139,213,.12)}`]
})
export class ContactComponent {
  company = company;
  submitted = false;
  form = { name: '', email: '', topic: 'Myjnia samochodów osobowych', message: '', consent: false };
  submit(contactForm: NgForm) {
    if (contactForm.invalid || !this.form.name.trim() || !this.form.message.trim()) {
      contactForm.form.markAllAsTouched();
      return;
    }

    const subject = `Zapytanie - ${this.form.topic}`;
    const body = [
      `Imię i nazwisko: ${this.form.name.trim()}`,
      `Adres e-mail: ${this.form.email}`,
      `Temat: ${this.form.topic}`,
      '',
      'Wiadomość:',
      this.form.message.trim(),
    ].join('\n');
    const mailto = `mailto:${this.company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    this.submitted = true;
    window.location.href = mailto;
  }
}
