import type { Localized } from '../i18n/locale';

/* Identity and summary ---------------------------------------------------- */

export const NAME = 'Nicolai Frigaard';

export const identity: Localized<string> = {
  en: '21 years old  ·  Trondheim, Norway',
  no: '21 år  ·  Trondheim, Norge',
  nn: '21 år  ·  Trondheim, Noreg',
};

export const summary: Localized<string> = {
  en: 'Computer science student (sivilingeniør) at NTNU, with an AI specialisation from autumn 2026. I work across the stack, from systems programming in Rust and C to full-stack web. Recent work includes a chess engine released as a Cargo crate, a website in production, and two products built end to end during an 8-week summer contract. I like taking on unfamiliar problems and picking up new tools as the work calls for them.',
  no: 'Sivilingeniørstudent i datateknologi ved NTNU, med fordypning i kunstig intelligens fra høsten 2026. Jeg jobber på tvers av stacken, fra systemprogrammering i Rust og C til fullstack web. Nyere arbeid omfatter en sjakkmotor utgitt som Cargo-crate, en nettside i produksjon, og to produkter bygget ende-til-ende gjennom et 8-ukers sommeroppdrag. Jeg liker å ta fatt på ukjente problemer og sette meg inn i nye verktøy etter hvert som oppgaven krever det.',
  nn: 'Sivilingeniørstudent i datateknologi ved NTNU, med fordjuping i kunstig intelligens frå hausten 2026. Eg jobbar på tvers av stacken, frå systemprogrammering i Rust og C til fullstack web. Nyare arbeid omfattar ein sjakkmotor gjeven ut som Cargo-crate, ei nettside i produksjon, og to produkt bygde ende-til-ende gjennom eit 8-vekers sommaroppdrag. Eg liker å ta fatt på ukjende problem og setje meg inn i nye verktøy etter kvart som oppgåva krev det.',
};

export const keyQualifications: Localized<string[]> = {
  en: [
    'Grade A in 12 of 15 graded courses so far.',
    'Builds software end to end: a Rust chess engine released as a crate, a website in production, and two products from an 8-week paid contract.',
    'Rebuilt and now run AbaTek, and led the revue tech team, both within Abakus (~1,000 members).',
  ],
  no: [
    'Karakteren A i 12 av 15 karaktergitte emner så langt.',
    'Bygger programvare ende-til-ende: en sjakkmotor i Rust utgitt som crate, en nettside i produksjon, og to produkter fra et betalt 8-ukers oppdrag.',
    'Bygde opp og driver AbaTek, og ledet Teknikk-gruppa i revyen, begge deler i Abakus (~1 000 medlemmer).',
  ],
  nn: [
    'Karakteren A i 12 av 15 karaktergjevne emne så langt.',
    'Byggjer programvare ende-til-ende: ein sjakkmotor i Rust gjeven ut som crate, ei nettside i produksjon, og to produkt frå eit betalt 8-vekers oppdrag.',
    'Bygde opp og driv AbaTek, og leidde Teknikk-gruppa i revyen, begge delar i Abakus (~1 000 medlemmer).',
  ],
};

/* Contact ----------------------------------------------------------------- */

export interface ContactLink {
  id: 'email' | 'github' | 'linkedin' | 'website';
  label: Localized<string>;
  /** Short text shown in the hero row. */
  short: string;
  /** Text shown in the contact section. */
  text: string;
  href: string;
}

export const contact: ContactLink[] = [
  {
    id: 'email',
    label: { en: 'Email', no: 'E-post', nn: 'E-post' },
    short: 'nicofri@pm.me',
    text: 'nicofri@pm.me',
    href: 'mailto:nicofri@pm.me',
  },
  {
    id: 'github',
    label: { en: 'GitHub', no: 'GitHub', nn: 'GitHub' },
    short: 'github.com/jovialen',
    text: 'github.com/jovialen',
    href: 'https://github.com/jovialen',
  },
  {
    id: 'linkedin',
    label: { en: 'LinkedIn', no: 'LinkedIn', nn: 'LinkedIn' },
    short: 'linkedin.com/in/nicolai-frigaard',
    text: 'in/nicolai-frigaard',
    href: 'https://www.linkedin.com/in/nicolai-frigaard-a3bb60322/',
  },
  {
    id: 'website',
    label: { en: 'Website', no: 'Nettside', nn: 'Nettside' },
    short: 'nicolai.frigaard.no',
    text: 'nicolai.frigaard.no',
    href: 'https://nicolai.frigaard.no',
  },
];

/** Links shown in the hero row (the website is the site itself, so it's left out). */
export const HERO_CONTACT_IDS: ContactLink['id'][] = ['email', 'github', 'linkedin'];

export const references: Localized<string> = {
  en: 'Available on request.',
  no: 'Oppgis på forespørsel.',
  nn: 'Blir oppgjeve på førespurnad.',
};

/* History (the git graph, #7) -------------------------------------------- */

export type Branch = 'edu' | 'work' | 'verv';

/** A month as `YYYY-MM`. */
export type YearMonth = `${number}-${number}`;

export interface JourneyEntry {
  /** Fake short commit hash shown on the row. */
  hash: string;
  branch: Branch;
  start: YearMonth;
  /** Omitted for ongoing entries. */
  end?: YearMonth;
  /** Date range as displayed. */
  dates: Localized<string>;
  title: Localized<string>;
  org: Localized<string>;
  points: Localized<string[]>;
}

/** A labelled point in time on one branch, drawn as a small tick (e.g. a promotion). */
export interface JourneyMilestone {
  branch: Branch;
  date: YearMonth;
  label: Localized<string>;
  /** Date as displayed next to the label. */
  dateLabel: string;
}

/**
 * Entries in the order the graph draws them: newest branch tip first. Within
 * a branch, newer entries come first. The graph layout (#7) works out lanes,
 * tips and connectors from this order.
 */
export const journey: JourneyEntry[] = [
  {
    hash: 'b42f7d9',
    branch: 'edu',
    start: '2024-08',
    end: '2029-06',
    dates: {
      en: '2024–2029 (expected)',
      no: '2024–2029 (forventet)',
      nn: '2024–2029 (forventa)',
    },
    title: {
      en: 'MSc in Computer Science (sivilingeniør), 5-year integrated',
      no: 'Master i datateknologi (5-årig, sivilingeniør)',
      nn: 'Master i datateknologi (5-årig, sivilingeniør)',
    },
    org: {
      en: 'NTNU · Norwegian University of Science and Technology · Trondheim',
      no: 'NTNU · Norges teknisk-naturvitenskapelige universitet · Trondheim',
      nn: 'NTNU · Noregs teknisk-naturvitskaplege universitet · Trondheim',
    },
    points: {
      en: [
        'Specialising in Artificial Intelligence from autumn 2026 (third year).',
        'Top grade (A) in 12 of 15 graded courses so far.',
        '360-ECTS integrated master over 5 years (10 semesters).',
      ],
      no: [
        'Fordypning i kunstig intelligens fra høsten 2026 (tredje studieår).',
        'Beste karakter (A) i 12 av 15 karaktergitte emner så langt.',
        '360 studiepoeng integrert master over 5 år (10 semestre).',
      ],
      nn: [
        'Fordjuping i kunstig intelligens frå hausten 2026 (tredje studieår).',
        'Beste karakter (A) i 12 av 15 karaktergjevne emne så langt.',
        '360 studiepoeng integrert master over 5 år (10 semester).',
      ],
    },
  },
  {
    hash: 'c4d8f60',
    branch: 'work',
    start: '2026-08',
    dates: { en: 'Autumn 2026', no: 'Høsten 2026', nn: 'Hausten 2026' },
    title: {
      en: 'Full-Stack Developer (part-time)',
      no: 'Fullstack-utvikler (deltid)',
      nn: 'Fullstack-utviklar (deltid)',
    },
    org: {
      en: 'Oslo Elektriske AS · Oslo',
      no: 'Oslo Elektriske AS · Oslo',
      nn: 'Oslo Elektriske AS · Oslo',
    },
    points: {
      en: [
        'Continued part-time in the same full-stack role alongside my studies.',
        'Kept maintaining and extending the website and internal dashboard built over the summer.',
      ],
      no: [
        'Fortsatte deltid i samme fullstack-rolle ved siden av studiene.',
        'Vedlikeholdt og videreutviklet nettsiden og det interne dashbordet fra sommeren.',
      ],
      nn: [
        'Heldt fram deltid i same fullstack-rolla ved sida av studia.',
        'Vedlikeheldt og vidareutvikla nettsida og det interne dashbordet frå sommaren.',
      ],
    },
  },
  {
    hash: 'a7f3e21',
    branch: 'work',
    start: '2026-06',
    end: '2026-08',
    dates: { en: 'Summer 2026', no: 'Sommeren 2026', nn: 'Sommaren 2026' },
    title: {
      en: 'Full-Stack Developer, Summer Project',
      no: 'Fullstack-utvikler, sommerprosjekt',
      nn: 'Fullstack-utviklar, sommarprosjekt',
    },
    org: {
      en: 'Oslo Elektriske AS · Oslo · two-person team, 8 weeks',
      no: 'Oslo Elektriske AS · Oslo · team på to, 8 uker',
      nn: 'Oslo Elektriske AS · Oslo · team på to, 8 veker',
    },
    points: {
      en: [
        'Planned, designed and built two products end to end as a two-person team over 8 weeks.',
        'Rebuilt the company website from scratch with a focus on SEO and search visibility.',
        'Built an internal dashboard and the backend behind it, routing incoming work requests straight into the team workflow.',
        'Reduced reliance on external vendors and streamlined the company’s most common workflow.',
      ],
      no: [
        'Planla, designet og bygde to produkter ende-til-ende i et team på to over 8 uker.',
        'Bygde bedriftens nettside på nytt fra bunnen av med fokus på SEO og synlighet i søk.',
        'Bygde et internt dashbord og backend-en bak det, som sender innkommende arbeidsforespørsler rett inn i arbeidsflyten.',
        'Reduserte avhengigheten av eksterne leverandører og effektiviserte bedriftens vanligste arbeidsflyt.',
      ],
      nn: [
        'Planla, designa og bygde to produkt ende-til-ende i eit team på to over 8 veker.',
        'Bygde nettsida til bedrifta på nytt frå botnen av med fokus på SEO og synlegheit i søk.',
        'Bygde eit internt dashbord og backend-en bak det, som sender innkomande arbeidsførespurnader rett inn i arbeidsflyten.',
        'Reduserte avhengigheita av eksterne leverandørar og effektiviserte den vanlegaste arbeidsflyten i bedrifta.',
      ],
    },
  },
  {
    hash: '3c9b0d4',
    branch: 'verv',
    start: '2025-01',
    dates: { en: '2025–present', no: '2025–nå', nn: '2025–no' },
    title: { en: 'Leader, AbaTek', no: 'Leder, AbaTek', nn: 'Leiar, AbaTek' },
    org: {
      en: 'Abakus (line association, ~1,000 members) · interest group',
      no: 'Abakus (linjeforening, ~1 000 medlemmer) · interessegruppe',
      nn: 'Abakus (linjeforeining, ~1 000 medlemmer) · interessegruppe',
    },
    points: {
      en: [
        'Lead AbaTek, the interest group that delivers sound, lighting and video tech for events across the whole society, year-round.',
        'Rebuilt the group from near-zero after most members aged out — ran it solo for a while, then recruited the current members.',
        'Delivered the tech for several gallas, and handle the group’s external contact and organising.',
      ],
      no: [
        'Leder AbaTek, interessegruppa som leverer lyd, lys og video til arrangementer for hele Abakus gjennom hele året.',
        'Bygde opp gruppa nesten fra bunnen etter at de fleste hadde gått ut – drev den alene en periode og rekrutterte deretter de nåværende medlemmene.',
        'Sto for teknikken på flere gallaer med gruppa, og har ansvar for ekstern kontakt og organisering av arbeidet.',
      ],
      nn: [
        'Leiar AbaTek, interessegruppa som leverer lyd, lys og video til arrangement for heile Abakus gjennom heile året.',
        'Bygde opp gruppa nesten frå botnen etter at dei fleste hadde gått ut – dreiv ho åleine ein periode og rekrutterte deretter dei noverande medlemmene.',
        'Stod for teknikken på fleire gallaar med gruppa, og har ansvar for ekstern kontakt og organisering av arbeidet.',
      ],
    },
  },
  {
    hash: 'e18a6c2',
    branch: 'verv',
    start: '2025-01',
    dates: { en: '2025–present', no: '2025–nå', nn: '2025–no' },
    title: {
      en: 'Deputy Leader & Social Lead, XCOM Data',
      no: 'Nestleder og sosialansvarlig, XCOM Data',
      nn: 'Nestleiar og sosialansvarleg, XCOM Data',
    },
    org: {
      en: 'XCOM Data · the third year’s annual week-long study trip abroad (~100 students)',
      no: 'XCOM Data · tredjeklasses årlige ukelange studietur til utlandet (~100 studenter)',
      nn: 'XCOM Data · tredjeklasses årlege vekelange studietur til utlandet (~100 studentar)',
    },
    points: {
      en: [
        'Handle communication with the ~100-student cohort and organise the leadership group’s meetings.',
        'Co-plan the halvingfest, a party celebrating the cohort’s halfway point in the degree.',
        'Plan social events for the ~20-person leadership group with one other organiser.',
      ],
      no: [
        'Har ansvar for kommunikasjonen med kullet på ~100 studenter og organiserer møtene i ledergruppa.',
        'Er med på å planlegge halvingfesten, en fest som feirer at kullet er halvveis i studiet.',
        'Planlegger sosiale arrangementer for den ~20 personer store ledergruppa, sammen med én annen.',
      ],
      nn: [
        'Har ansvar for kommunikasjonen med kullet på ~100 studentar og organiserer møta i leiargruppa.',
        'Er med på å planleggje halvingfesten, ein fest som feirar at kullet er halvvegs i studiet.',
        'Planlegg sosiale arrangement for den ~20 personar store leiargruppa, saman med éin annan.',
      ],
    },
  },
  {
    hash: '5d0c1af',
    branch: 'verv',
    start: '2024-09',
    dates: { en: '2024–present', no: '2024–nå', nn: '2024–no' },
    title: {
      en: 'Tech Team Member & Developer, Abakusrevyen',
      no: 'Medlem av Teknikk-gruppa og utvikler, Abakusrevyen',
      nn: 'Medlem av Teknikk-gruppa og utviklar, Abakusrevyen',
    },
    org: {
      en: 'Abakus (line association, ~1,000 members) · Teknikk (tech) team',
      no: 'Abakus (linjeforening, ~1 000 medlemmer) · Teknikk-gruppa',
      nn: 'Abakus (linjeforeining, ~1 000 medlemmer) · Teknikk-gruppa',
    },
    points: {
      en: [
        'Member of the tech team since 2024, running sound, lighting and video for the student revue’s live productions.',
        'Built custom LED matrices and hands-on stage tech for the shows.',
        'As team lead in 2025/2026, coordinated with the other groups to bring the whole production together and ran the team.',
        'Build and maintain abakusrevyen.no with the team in Astro, TypeScript and Tailwind CSS, deploying via pull requests to GitHub Pages.',
      ],
      no: [
        'Medlem av Teknikk-gruppa siden 2024, med ansvar for lyd, lys og video under studentrevyens forestillinger.',
        'Bygde egne LED-matriser og annen sceneteknikk til forestillingene.',
        'Som gruppeleder i 2025/2026 koordinerte jeg med de andre gruppene for å sette opp hele forestillingen, og ledet gruppa.',
        'Bygger og vedlikeholder abakusrevyen.no med gruppa i Astro, TypeScript og Tailwind CSS, og deployer via pull requests til GitHub Pages.',
      ],
      nn: [
        'Medlem av Teknikk-gruppa sidan 2024, med ansvar for lyd, lys og video under studentrevyens forestillingar.',
        'Bygde eigne LED-matriser og anna sceneteknikk til forestillingane.',
        'Som gruppeleiar i 2025/2026 koordinerte eg med dei andre gruppene for å setje opp heile forestillinga, og leidde gruppa.',
        'Byggjer og vedlikeheld abakusrevyen.no med gruppa i Astro, TypeScript og Tailwind CSS, og deployar via pull requests til GitHub Pages.',
      ],
    },
  },
  {
    hash: '9a2e4b8',
    branch: 'edu',
    start: '2021-08',
    end: '2024-06',
    dates: { en: '2021–2024', no: '2021–2024', nn: '2021–2024' },
    title: {
      en: 'Specialisation in General Studies (studiespesialisering)',
      no: 'Studiespesialisering',
      nn: 'Studiespesialisering',
    },
    org: {
      en: 'Nadderud High School · Bærum',
      no: 'Nadderud Videregående Skole · Bærum',
      nn: 'Nadderud Vidaregåande Skule · Bærum',
    },
    points: {
      en: [
        'Programme subjects in Mathematics R1 and R2, and Information Technology (IT).',
        'Continued straight to university after finishing.',
      ],
      no: [
        'Programfag i matematikk R1 og R2, og informasjonsteknologi (IT).',
        'Gikk rett videre til universitetet etter fullført videregående.',
      ],
      nn: [
        'Programfag i matematikk R1 og R2, og informasjonsteknologi (IT).',
        'Gjekk rett vidare til universitetet etter fullført vidaregåande.',
      ],
    },
  },
];

/**
 * Labelled ticks on a branch. "Finished Nth year" dividers are not listed:
 * the graph derives them from the degree's start date and today's date.
 */
export const journeyMilestones: JourneyMilestone[] = [
  {
    branch: 'verv',
    date: '2025-08',
    dateLabel: '2025/2026',
    label: {
      en: 'Became tech lead',
      no: 'Ble teknikkansvarlig',
      nn: 'Vart teknikkansvarleg',
    },
  },
];

/** The entry whose academic years produce the "Finished Nth year" dividers. */
export const DEGREE_HASH = 'b42f7d9';
