import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section #heroSection class="hero-root relative isolate overflow-hidden bg-[#f3f9ff]">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,#c5e7ff_0%,transparent_55%)]"></div>
      <div class="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"></div>

      <div class="container-shell relative z-10 grid min-h-[37rem] 2xl:min-h-[43rem] 3xl:min-h-[48rem] items-center gap-10 py-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-6">
        <div class="hero-enter relative z-20 max-w-[64ch]">
          <span class="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-brand-700 shadow-sm">
            <span class="h-2 w-2 animate-pulse rounded-full bg-brand-500"></span>
            Automatyczne systemy myjące Ceccato
          </span>

          <h1 class="text-[clamp(2.25rem,3.4vw,6rem)] font-extrabold leading-[1.08] tracking-[-.05em] text-ink">
            Czysty biznes zaczyna się
            <span class="block bg-gradient-to-r from-brand-700 via-brand-500 to-sky-400 bg-clip-text text-transparent">
            od dobrego rozwiązania
            </span>
          </h1>
          <p class="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Poznaj myjnie automatyczne Ceccato dla samochodów osobowych i ciężarowych.
            MAX-DAM pomoże Ci wybrać i zamontować rozwiązanie dopasowane do Twojej inwestycji.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a routerLink="/oferta"
              class="hero-primary group inline-flex items-center justify-center gap-3 rounded-full bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-brand-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
              Poznaj ofertę
              <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a routerLink="/kontakt"
              class="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white/90 px-7 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:text-brand-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
              Zapytaj o wycenę
            </a>
          </div>

          <div class="mt-10 grid max-w-xl grid-cols-1 gap-3 border-t border-brand-200/80 pt-7 sm:grid-cols-3">
            @for (benefit of benefits; track benefit.title) {
              <div class="group flex items-center gap-3 rounded-2xl p-2 transition-colors duration-300 hover:bg-white/75">
                <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-brand-600 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">{{ benefit.icon }}</span>
                <div>
                  <p class="text-sm font-bold leading-5 text-ink">{{ benefit.title }}</p>
                  <p class="text-xs leading-5 text-slate-500">{{ benefit.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-none lg:max-w-none">
          <div class="pointer-events-none absolute -inset-5 rounded-[3rem] bg-gradient-to-tr from-brand-300/40 via-sky-200/20 to-white blur-2xl"></div>

          <div class="hero-image-frame relative w-full" style="perspective: 87.5rem">
            <div class="hero-tilt relative transition-transform duration-200 ease-out"
                 [style.transform]="tiltTransform()"
                 (pointermove)="onPointerMove($event)"
                 (pointerleave)="resetTilt()">
              <button type="button" (click)="toggleFlip()"
                      [attr.aria-pressed]="flipped()"
                      [attr.aria-label]="flipped() ? 'Pokaż zdjęcie myjni Ceccato CL 200' : 'Obróć kartę i poznaj Ceccato CL 200'"
                      class="group block w-full cursor-pointer rounded-[2rem] text-left focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-600 sm:rounded-[2.6rem]">
                <div class="hero-flip relative w-full h-[23rem] sm:h-[31rem] lg:h-[27rem] xl:h-[30rem] 2xl:h-[40rem] 3xl:h-[46rem] rounded-[2rem] sm:rounded-[2.6rem]"
                     [class.is-flipped]="flipped()">
                  <!-- Front -->
                  <div class="hero-face absolute inset-0 overflow-hidden rounded-[2rem] border-[0.4375rem] border-white bg-brand-100 shadow-[0_30px_85px_rgba(7,88,143,.22)] sm:rounded-[2.6rem]">
                    <div class="hero-parallax-media absolute inset-0">
                      <picture class="block h-full w-full">
                        <source type="image/avif" srcset="assets/images/ceccato-cl200-480.avif 480w, assets/images/ceccato-cl200-720.avif 720w, assets/images/ceccato-cl200-964.avif 964w" sizes="(max-width: 64rem) 100vw, 55vw" />
                        <source type="image/webp" srcset="assets/images/ceccato-cl200-480.webp 480w, assets/images/ceccato-cl200-720.webp 720w, assets/images/ceccato-cl200-964.webp 964w" sizes="(max-width: 64rem) 100vw, 55vw" />
                        <img src="assets/images/ceccato-cl200-hero.jpg"
                             alt="Automatyczna myjnia Ceccato CL 203 z samochodem Porsche"
                             width="964" height="1024" fetchpriority="high" decoding="async"
                             class="h-full w-full object-cover object-center" />
                      </picture>
                    </div>
                    <div class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071e38]/95 via-[#071e38]/45 to-transparent px-6 pb-8 pt-28 text-white sm:px-9">
                      <p class="text-[11px] font-bold uppercase tracking-[.2em] text-sky-200">CECCATO / CL 203</p>
                      <p class="mt-2 max-w-sm text-2xl font-extrabold leading-tight sm:text-3xl">Technologia, która robi wrażenie.</p>
                      <p class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-100">Kliknij i poznaj urządzenie <span class="inline-block transition-transform duration-300 group-hover:rotate-45">↗</span></p>
                    </div>
                  </div>
                  <!-- Back -->
                  <div class="hero-face hero-back absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] border-[0.3rem] border-white bg-gradient-to-br from-[#0a3d65] via-[#07588f] to-[#061e37] p-7 text-white shadow-[0_30px_85px_rgba(7,88,143,.22)] sm:rounded-[2.6rem] sm:p-10">
                    <div>
                      <p class="text-xs font-bold uppercase tracking-[.2em] text-sky-200">Myjnia pojazdów osobowych</p>
                      <h3 class="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">CL 203</h3>
                    </div>
                    <div class="space-y-4 border-t border-white/20 pt-6 text-xs sm:text-sm">
                      <p class="flex gap-3"><span class="text-sky-300">✓</span> Automatyczne mycie wysokociśnieniowe</p>
                      <p class="flex gap-3"><span class="text-sky-300">✓</span> Suszenie poziome i boczne</p>
                      <p class="flex gap-3"><span class="text-sky-300">✓</span> System Wheelmaster</p>
                      <p class="flex gap-3"><span class="text-sky-300">✓</span> Przystosowanie do obsługi 5 środków chemicznych</p>
                      <p class="pt-4 text-xs font-bold uppercase tracking-widest text-sky-200">Kliknij, aby wrócić do zdjęcia ↶</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/50 to-transparent"></div>
    </section>
  `,
  styles: [`
    .hero-enter { animation: hero-enter .9s cubic-bezier(.2,.75,.2,1) both; }
    .hero-image-frame { animation: hero-image-enter 1.1s cubic-bezier(.2,.75,.2,1) both; }
    .hero-parallax-media { will-change: transform; transition: transform .12s linear; }
    .hero-float { animation: hero-float 5s ease-in-out infinite; }
    .hero-flip { transform-style: preserve-3d; transition: transform .8s cubic-bezier(.2,.75,.2,1); }
    .hero-flip.is-flipped { transform: rotateY(180deg); }
    .hero-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
    .hero-back { transform: rotateY(180deg); }
    .hero-primary { position: relative; overflow: hidden; }
    .hero-primary::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(110deg, transparent 20%, rgba(255,255,255,.22) 50%, transparent 80%);
      transform: translateX(-140%); transition: transform .65s ease;
    }
    .hero-primary:hover::before { transform: translateX(140%); }
    @keyframes hero-enter {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes hero-image-enter {
      from { opacity: 0; transform: translate(25px, 20px) scale(.97); }
      to { opacity: 1; transform: translate(0, 0) scale(1); }
    }
    @keyframes hero-float {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-9px); }
    }
    @media (prefers-reduced-motion: reduce) {
      .hero-enter,.hero-image-frame,.hero-float { animation: none !important; }
      .hero-parallax-media { transform: none !important; transition: none !important; }
      .hero-flip, .hero-tilt { transition: none !important; }
    }
  `]
})
export class HomeHeroComponent implements AfterViewInit {
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly section = viewChild<ElementRef<HTMLElement>>('heroSection');
  readonly parallaxY = signal(0);
  readonly flipped = signal(false);
  readonly tiltX = signal(0);
  readonly tiltY = signal(0);

  toggleFlip(): void {
    this.flipped.update(value => !value);
    this.resetTilt();
  }

  tiltTransform(): string {
    return `rotateX(${this.tiltX()}deg) rotateY(${this.tiltY()}deg)`;
  }

  onPointerMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse' || this.flipped() || !isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget instanceof HTMLElement ? event.currentTarget.getBoundingClientRect() : null;
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    this.tiltX.set(Math.round(-y * 10 * 10) / 10);
    this.tiltY.set(Math.round(x * 10 * 10) / 10);
  }

  resetTilt(): void {
    this.tiltX.set(0);
    this.tiltY.set(0);
  }

  readonly benefits = [
    { icon: '🛒', title: 'Sprzedaż', description: 'Kompletne systemy myjni i podzespoły' },
    { icon: '🔧', title: 'Serwis', description: 'Diagnostyka, naprawy i przeglądy na miejscu i zdalnie' },
    { icon: '🛠️', title: 'Montaż', description: 'Profesjonalny montaż dopasowany do Twoich potrzeb' }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const rect = this.section()?.nativeElement.getBoundingClientRect();
      if (!rect) return;
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const displacement = Math.max(-55, Math.min(55, -rect.top * 0.13));
      this.parallaxY.set(Math.round(displacement));
    };
    const schedule = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };

    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule, { passive: true });
    });
    schedule();
    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafId) window.cancelAnimationFrame(rafId);
    });
  }
}
