/**
 * ADVANCED SEO KEYWORD SYSTEM — Kotsia's Projects
 * Optimized for Limpopo & Gauteng ranking (Carpentry-first business)
 */

// ---------------------------------------------------------------------------
// CITIES
// ---------------------------------------------------------------------------

export const limpopoCities = [
  "Polokwane",
  "Tzaneen",
  "Mokopane",
  "Makhado",
  "Louis Trichardt",
  "Thohoyandou",
  "Bela-Bela",
  "Phalaborwa",
  "Groblersdal",
  "Burgersfort",
  "Marble Hall",
  "Lephalale",
  "Thabazimbi",
  "Seshego",
  "Lebowakgomo",
  "Bochum",
  "Musina",
  "Modimolle",
  "Nylstroom",
  "Hoedspruit",
  "Haenertsburg",
  "Modjadjiskloof",
  "Northam",
  "Giyani",
  "Mankweng",
  "Ga-Kgapane",
  "Jane Furse",
  "Sekhukhune",
  "Alldays",
  "Dendron",
  "Ofcolaco",
  "Waterberg",
];

export const gautengCities = [
  // Greater Johannesburg
  "Johannesburg",
  "Sandton",
  "Randburg",
  "Roodepoort",
  "Soweto",
  "Midrand",
  "Fourways",
  "Bryanston",
  "Rosebank",
  "Woodmead",
  "Kyalami",
  "Bedfordview",
  "Melville",
  "Greenside",
  "Parkhurst",
  "Craighall",
  "Northcliff",
  "Diepsloot",
  "Ivory Park",
  "Alexandra",
  "Lenasia",
  // Pretoria
  "Pretoria",
  "Centurion",
  "Atteridgeville",
  "Mamelodi",
  "Hatfield",
  "Menlyn",
  "Brooklyn",
  "Lynnwood",
  "Sunnyside",
  "Arcadia",
  "Faerie Glen",
  "Garsfontein",
  "Meyerspark",
  // East Rand (Ekurhuleni)
  "Ekurhuleni",
  "Benoni",
  "Boksburg",
  "Brakpan",
  "Germiston",
  "Kempton Park",
  "Alberton",
  "Springs",
  "Edenvale",
  "Katlehong",
  "Daveyton",
  "Nigel",
  "Tembisa",
  // West Rand
  "Krugersdorp",
  "Randfontein",
  "Carletonville",
  "Westonaria",
  // South Gauteng
  "Vereeniging",
  "Vanderbijlpark",
  "Heidelberg",
  "Bronkhorstspruit",
  "Orange Farm",
];

export const allCities = [...limpopoCities, ...gautengCities];

// ---------------------------------------------------------------------------
// SERVICES (PRIMARY + SUPPORT)
// ---------------------------------------------------------------------------

const services = [
  "carpentry",
  "carpenter",
  "joiner",
  "cabinet maker",
  "tiling",
  "painting",
  "plastering",
  "rhinolite plastering",
  "stormwater drainage",
  "welding",
  "kitchen cupboards",
  "built-in wardrobes",
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

// City + service combinations
function cityServiceKeywords(cityList: string[], service: string): string[] {
  return cityList.flatMap((city) => [
    `${service} ${city}`,
    `${service} in ${city}`,
    `${city} ${service}`,
  ]);
}

// Intent keywords (money keywords)
function intentKeywords(service: string): string[] {
  return [
    `hire ${service}`,
    `best ${service}`,
    `affordable ${service}`,
    `cheap ${service}`,
    `professional ${service}`,
    `${service} company`,
  ];
}

// Near-me keywords (HIGH VALUE)
function nearMeKeywords(service: string): string[] {
  return [
    `${service} near me`,
    `${service} services near me`,
    `best ${service} near me`,
    `affordable ${service} near me`,
  ];
}

// Problem-based keywords (EASY TRAFFIC)
function problemKeywords(service: string): string[] {
  return [
    `${service} repair`,
    `${service} installation`,
    `${service} cost South Africa`,
    `${service} price per square meter`,
  ];
}

// ---------------------------------------------------------------------------
// BRAND
// ---------------------------------------------------------------------------

export const brandKeywords = [
  "Kotsia Projects",
  "Kotsia's Projects",
  "Kotsia carpentry",
];

// ---------------------------------------------------------------------------
// CARPENTRY (PRIMARY SERVICE)
// ---------------------------------------------------------------------------

export const carpentryKeywords: string[] = [
  "carpentry services Limpopo",
  "carpentry services Gauteng",
  "carpenter near me",
  "custom woodwork South Africa",
  "kitchen cupboards installation",
  "built-in wardrobes South Africa",
  "custom furniture South Africa",
  // Intent
  ...intentKeywords("carpenter"),
  ...intentKeywords("carpentry"),
  // Near me
  ...nearMeKeywords("carpenter"),
  ...nearMeKeywords("carpentry"),
  // Problems
  "fix wooden door",
  "cupboard installation cost",
  ...problemKeywords("carpentry"),
  // City targeting
  ...cityServiceKeywords(limpopoCities, "carpenter"),
  ...cityServiceKeywords(gautengCities, "carpenter"),
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// TILING
// ---------------------------------------------------------------------------

export const tilingKeywords: string[] = [
  "tiling services Limpopo",
  "tiling services Gauteng",
  "tile installation South Africa",
  ...intentKeywords("tiling"),
  ...nearMeKeywords("tiling"),
  ...problemKeywords("tiling"),
  ...cityServiceKeywords(limpopoCities, "tiling"),
  ...cityServiceKeywords(gautengCities, "tiling"),
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// PLASTERING
// ---------------------------------------------------------------------------

export const plasteringKeywords: string[] = [
  "rhinolite plastering Limpopo",
  "rhinolite plastering Gauteng",
  ...intentKeywords("plastering"),
  ...nearMeKeywords("plastering"),
  ...problemKeywords("plastering"),
  ...cityServiceKeywords(limpopoCities, "plastering"),
  ...cityServiceKeywords(gautengCities, "plastering"),
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// DRAINAGE
// ---------------------------------------------------------------------------

export const drainageKeywords: string[] = [
  "stormwater drainage Limpopo",
  "stormwater drainage Gauteng",
  ...intentKeywords("drainage"),
  ...nearMeKeywords("stormwater drainage"),
  ...problemKeywords("drainage"),
  ...cityServiceKeywords(limpopoCities, "drainage"),
  ...cityServiceKeywords(gautengCities, "drainage"),
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// WELDING
// ---------------------------------------------------------------------------

export const weldingKeywords: string[] = [
  "welding services Limpopo",
  "welding services Gauteng",
  ...intentKeywords("welding"),
  ...nearMeKeywords("welding"),
  ...problemKeywords("welding"),
  ...cityServiceKeywords(limpopoCities, "welding"),
  ...cityServiceKeywords(gautengCities, "welding"),
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// HOMEPAGE (COMBINED)
// ---------------------------------------------------------------------------

export const homePageKeywords: string[] = [
  "carpentry services Limpopo",
  "carpentry services Gauteng",
  "carpenter near me",
  "kitchen cupboards installation",
  "built-in wardrobes",
  "tiling services",
  "plastering services",
  "stormwater drainage",
  "welding services",
  "home renovation South Africa",
  ...nearMeKeywords("carpenter"),
  ...intentKeywords("carpenter"),
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// SERVICES PAGE
// ---------------------------------------------------------------------------

export const servicesPageKeywords: string[] = [
  "building services Limpopo",
  "construction services Gauteng",
  "home improvement South Africa",
  ...nearMeKeywords("construction"),
  ...intentKeywords("construction"),
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// ABOUT PAGE
// ---------------------------------------------------------------------------

export const aboutPageKeywords: string[] = [
  "about Kotsia Projects",
  "carpenter Limpopo",
  "carpenter Gauteng",
  "construction company Limpopo",
  "building services South Africa",
  "custom woodwork specialist",
  "experienced carpenter Polokwane",
  "trusted carpenter Johannesburg",
  "professional carpenter South Africa",
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// CONTACT PAGE
// ---------------------------------------------------------------------------

export const contactPageKeywords: string[] = [
  "carpentry quote Limpopo",
  "carpentry quote Gauteng",
  "hire carpenter near me",
  "get quote carpentry",
  ...brandKeywords,
];

// ---------------------------------------------------------------------------
// ALL KEYWORDS (DEDUPED)
// ---------------------------------------------------------------------------

export const allKeywords: string[] = Array.from(
  new Set([
    ...homePageKeywords,
    ...carpentryKeywords.slice(0, 40),
    ...tilingKeywords.slice(0, 20),
    ...plasteringKeywords.slice(0, 20),
    ...drainageKeywords.slice(0, 20),
    ...weldingKeywords.slice(0, 20),
  ]),
);
