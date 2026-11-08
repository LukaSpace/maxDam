export interface Product {
  slug: string;
  name: string;
  category: 'passenger' | 'truck';
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  badge?: string;
}

export const company = {
  name: 'MAX-DAM Damian Czmok',
  tagline: 'Autoryzowany Sprzedawca i Serwis Ceccato',
  description: 'Jesteśmy autoryzowanym partnerem włoskiej firmy Ceccato. Od 2005 roku nasza firma zajmuje się sprzedażą, montażem oraz serwisem myjni automatycznych oraz urządzeń wysokociśnieniowych. Wspieramy inwestorów i przedsiębiorców w wyborze nowoczesnych systemów myjących. Pomagamy dobrać rozwiązanie do potrzeb obiektu, rodzaju pojazdów i planowanej skali działalności. Następnie oferujemy wsparcie w montażu, uruchomieniu i serwisowaniu urządzeń. Zakres naszej działalności obejmuje teren całego kraju.',
  phone: '+48 668 401 280',
  email: 'damczm@wp.pl',
  address: 'ul. Tokarska 12, 44-151 Gliwice',
};

export const products: Product[] = [
  {
    slug: 'cl-200',
    name: 'CL 200',
    category: 'passenger',
    eyebrow: 'Kompaktowe rozwiązanie',
    shortDescription: 'Automatyczna myjnia portalowa do codziennej, sprawnej obsługi samochodów osobowych.',
    description: 'CL 200 to propozycja dla inwestorów poszukujących funkcjonalnego i elastycznego rozwiązania do mycia samochodów osobowych. Szczegółową konfigurację należy dobrać do warunków obiektu.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    features: ['Konfiguracja dopasowana do obiektu', 'Programy mycia do różnych potrzeb', 'Możliwość rozbudowy wyposażenia'],
    badge: 'Myjnie osobowe'
  },
  {
    slug: 'hydrus',
    name: 'Hydrus',
    category: 'passenger',
    eyebrow: 'Technologia i wydajność',
    shortDescription: 'System myjący zaprojektowany z myślą o wysokiej jakości i powtarzalnym efekcie.',
    description: 'Hydrus reprezentuje nowoczesne podejście do automatycznego mycia samochodów. Dobór opcji i parametrów powinien być potwierdzony w aktualnej dokumentacji producenta.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    features: ['Warianty wyposażenia', 'Rozwiązania wspierające jakość mycia', 'Opcje dopasowania do przepustowości'],
    badge: 'Popularny wybór'
  },
  {
    slug: 'pegasus',
    name: 'Pegasus',
    category: 'passenger',
    eyebrow: 'Elastyczność konfiguracji',
    shortDescription: 'Rozwiązanie dla obiektów, które potrzebują dopasować funkcje do profilu klientów.',
    description: 'Pegasus może stanowić podstawę indywidualnie skonfigurowanej myjni. Dokładny zakres funkcji, wyposażenia i wymiarów wymaga potwierdzenia z kartą katalogową.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    features: ['Dobór opcji do inwestycji', 'Możliwość personalizacji konfiguracji', 'Wsparcie przy wyborze urządzenia']
  },
  {
    slug: 'hyperion',
    name: 'Hyperion',
    category: 'passenger',
    eyebrow: 'Zaawansowane mycie',
    shortDescription: 'Zaawansowana propozycja dla profesjonalnych punktów mycia pojazdów.',
    description: 'Hyperion to model do rozważenia przy projektowaniu nowoczesnej myjni samochodowej. Ostateczne parametry i wyposażenie należy ustalić na podstawie oferty producenta.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    features: ['Rozwiązania dla profesjonalnych obiektów', 'Różne warianty wyposażenia', 'Dobór do założeń inwestycji']
  },
  {
    slug: 'polar',
    name: 'Polar',
    category: 'truck',
    eyebrow: 'Pojazdy ciężarowe i użytkowe',
    shortDescription: 'System mycia zaprojektowany z myślą o pojazdach ciężarowych, autobusach i flotach.',
    description: 'Polar to rozwiązanie dla operatorów flot, firm transportowych i inwestorów planujących myjnię pojazdów wielkogabarytowych. Szczegóły konfiguracji wymagają potwierdzenia z producentem.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c',
    features: ['Obsługa pojazdów ciężarowych i użytkowych', 'Konfiguracja do profilu floty', 'Możliwość doboru systemów myjących'],
    badge: 'Myjnie ciężarowe'
  }
];

export const imagePlaceholders = {
  passenger: 'https://images.unsplash.com/photo-1605164598708-25701594473e',
  truck: 'https://images.unsplash.com/photo-1703130931625-832a67f5ed99',
  facility: 'https://scontent.fktw4-1.fna.fbcdn.net/v/t39.30808-6/509355527_30009053738743431_5480860429020763634_n.jpg'
};
