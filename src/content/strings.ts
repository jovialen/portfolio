import type { Localized } from '../i18n/locale';
import { locale } from '../preferences';

/*
 * UI strings: labels, headings and chrome. CV facts live in cv.ts, projects
 * in projects.ts, and so on.
 *
 * `en` defines the shape; `no` and `nn` must match it key for key.
 */

const en = {
  nav: {
    about: 'about',
    journey: 'history',
    projects: 'projects',
    skills: 'skills',
    languages: 'languages',
    contact: 'contact',
    references: 'references',
    more: 'more',
  },
  navLabel: 'Sections',
  headings: {
    journey: 'History',
    projects: 'Projects',
    skills: 'Technical Skills',
    languages: 'Languages',
    contact: 'Contact',
    references: 'References',
  },
  keyQualsLabel: 'Key qualifications',
  downloadCv: 'download cv (pdf)',
  downloadCvTitle: 'Save the CV as a PDF — opens the print dialog; choose Save as PDF.',
  journey: {
    branches: { edu: 'education', work: 'experience', verv: 'activities' },
    head: 'HEAD → main',
    now: 'now',
    init: 'init',
    origin: 'the beginning',
    showAll: 'show all',
    finishedYear: (n: number) => `Finished ${ordinal(n)} year`,
  },
  projectsIntro: 'a few things I’m proud of — click any project to open its page',
  projectsAll: 'see all projects →',
  allProjectsTitle: 'all projects',
  allProjectsIntro:
    'The full set, including the three featured on the CV. Click any project to open its page.',
  openProject: (name: string) => `Open project: ${name}`,
  skillsFilter: 'Filter skills by field',
  skillsLegend: 'brighter = core, used in projects · dimmer = familiar, not yet used in depth',
  skillsNote:
    'Coding since 7th grade. The list above is what I’d happily be quizzed on — beyond it I’ve also built with Svelte, Vue, NestJS, Django and FastAPI, and pick up unfamiliar stacks fast.',
  skillFamiliar: 'familiar',
  reposUsing: 'repos using this',
  footer: {
    top: 'back to top',
    copy: (year: number) => `© ${year} Nicolai Frigaard · built from source`,
  },
  detail: {
    overview: 'Overview',
    highlights: 'Highlights',
    stack: 'Stack',
    role: 'Role',
    viewSource: 'view source →',
    liveDemo: 'live demo →',
    back: '← back to cv',
    imgPlaceholder: 'screenshot coming soon',
    readMore: 'read more →',
    notFound: 'No project with that name.',
  },
  settings: {
    title: 'settings',
    close: 'Close settings',
    language: 'Language',
    textSize: 'Text size',
    theme: 'Theme',
    small: 'S',
    medium: 'M',
    large: 'L',
  },
  themeGroups: { signature: 'Signature', editor: 'Editor', light: 'Light' },
  transcript: {
    title: 'transcript',
    intro:
      '120 ECTS completed over four semesters; AI specialisation begins in the third year (autumn 2026).',
    passed: 'Passed',
    link: 'see full transcript →',
    creditLabel: 'cr',
  },
  notFound: {
    title: '404',
    body: 'No such file. The page you were looking for doesn’t exist.',
  },
};

export type Strings = typeof en;

const no: Strings = {
  nav: {
    about: 'om meg',
    journey: 'historikk',
    projects: 'prosjekter',
    skills: 'ferdigheter',
    languages: 'språk',
    contact: 'kontakt',
    references: 'referanser',
    more: 'mer',
  },
  navLabel: 'Seksjoner',
  headings: {
    journey: 'Historikk',
    projects: 'Prosjekter',
    skills: 'Tekniske ferdigheter',
    languages: 'Språk',
    contact: 'Kontakt',
    references: 'Referanser',
  },
  keyQualsLabel: 'Nøkkelkvalifikasjoner',
  downloadCv: 'last ned cv (pdf)',
  downloadCvTitle: 'Lagre CV-en som PDF — åpner utskriftsdialogen; velg Lagre som PDF.',
  journey: {
    branches: { edu: 'utdanning', work: 'erfaring', verv: 'verv' },
    head: 'HEAD → main',
    now: 'nå',
    init: 'init',
    origin: 'starten',
    showAll: 'vis alle',
    finishedYear: (n: number) => `Fullførte ${n}. studieår`,
  },
  projectsIntro: 'noen ting jeg er stolt av — klikk på et prosjekt for å åpne siden',
  projectsAll: 'se alle prosjekter →',
  allProjectsTitle: 'alle prosjekter',
  allProjectsIntro:
    'Hele samlingen, inkludert de tre som er fremhevet på CV-en. Klikk på et prosjekt for å åpne siden.',
  openProject: (name: string) => `Åpne prosjekt: ${name}`,
  skillsFilter: 'Filtrer ferdigheter etter felt',
  skillsLegend:
    'lysere = kjerne, brukt i prosjekter · dempet = kjent med, ikke brukt i dybden ennå',
  skillsNote:
    'Har programmert siden 7. klasse. Lista over er det jeg gjerne lar meg spørre ut om — utover den har jeg også bygget med Svelte, Vue, NestJS, Django og FastAPI, og plukker opp ukjente teknologier raskt.',
  skillFamiliar: 'kjent med',
  reposUsing: 'repoer som bruker dette',
  footer: {
    top: 'til toppen',
    copy: (year: number) => `© ${year} Nicolai Frigaard · bygget fra kildekode`,
  },
  detail: {
    overview: 'Oversikt',
    highlights: 'Høydepunkter',
    stack: 'Teknologi',
    role: 'Rolle',
    viewSource: 'se kildekode →',
    liveDemo: 'live demo →',
    back: '← tilbake til cv',
    imgPlaceholder: 'skjermbilde kommer',
    readMore: 'les mer →',
    notFound: 'Fant ikke noe prosjekt med det navnet.',
  },
  settings: {
    title: 'innstillinger',
    close: 'Lukk innstillinger',
    language: 'Språk',
    textSize: 'Tekststørrelse',
    theme: 'Tema',
    small: 'S',
    medium: 'M',
    large: 'L',
  },
  themeGroups: { signature: 'Signatur', editor: 'Editor', light: 'Lys' },
  transcript: {
    title: 'karakterutskrift',
    intro:
      '120 studiepoeng fullført over fire semestre; fordypning i kunstig intelligens starter tredje studieår (høsten 2026).',
    passed: 'Bestått',
    link: 'se hele karakterutskriften →',
    creditLabel: 'stp',
  },
  notFound: {
    title: '404',
    body: 'Fila finnes ikke. Siden du lette etter eksisterer ikke.',
  },
};

const nn: Strings = {
  nav: {
    about: 'om meg',
    journey: 'historikk',
    projects: 'prosjekt',
    skills: 'ferdigheiter',
    languages: 'språk',
    contact: 'kontakt',
    references: 'referansar',
    more: 'meir',
  },
  navLabel: 'Seksjonar',
  headings: {
    journey: 'Historikk',
    projects: 'Prosjekt',
    skills: 'Tekniske ferdigheiter',
    languages: 'Språk',
    contact: 'Kontakt',
    references: 'Referansar',
  },
  keyQualsLabel: 'Nøkkelkvalifikasjonar',
  downloadCv: 'last ned cv (pdf)',
  downloadCvTitle: 'Lagre CV-en som PDF — opnar utskriftsdialogen; vel Lagre som PDF.',
  journey: {
    branches: { edu: 'utdanning', work: 'erfaring', verv: 'verv' },
    head: 'HEAD → main',
    now: 'no',
    init: 'init',
    origin: 'starten',
    showAll: 'vis alle',
    finishedYear: (n: number) => `Fullførte ${n}. studieår`,
  },
  projectsIntro: 'nokre ting eg er stolt av — klikk på eit prosjekt for å opne sida',
  projectsAll: 'sjå alle prosjekt →',
  allProjectsTitle: 'alle prosjekt',
  allProjectsIntro:
    'Heile samlinga, inkludert dei tre som er framheva på CV-en. Klikk på eit prosjekt for å opne sida.',
  openProject: (name: string) => `Opne prosjekt: ${name}`,
  skillsFilter: 'Filtrer ferdigheiter etter felt',
  skillsLegend:
    'lysare = kjerne, brukt i prosjekt · dempa = kjend med, ikkje brukt i djupna enno',
  skillsNote:
    'Har programmert sidan 7. klasse. Lista over er det eg gjerne lèt meg spørje ut om — utover den har eg òg bygd med Svelte, Vue, NestJS, Django og FastAPI, og plukkar opp ukjende teknologiar raskt.',
  skillFamiliar: 'kjend med',
  reposUsing: 'repo som brukar dette',
  footer: {
    top: 'til toppen',
    copy: (year: number) => `© ${year} Nicolai Frigaard · bygd frå kjeldekode`,
  },
  detail: {
    overview: 'Oversikt',
    highlights: 'Høgdepunkt',
    stack: 'Teknologi',
    role: 'Rolle',
    viewSource: 'sjå kjeldekode →',
    liveDemo: 'live demo →',
    back: '← tilbake til cv',
    imgPlaceholder: 'skjermbilete kjem',
    readMore: 'les meir →',
    notFound: 'Fann ikkje noko prosjekt med det namnet.',
  },
  settings: {
    title: 'innstillingar',
    close: 'Lukk innstillingar',
    language: 'Språk',
    textSize: 'Tekststorleik',
    theme: 'Tema',
    small: 'S',
    medium: 'M',
    large: 'L',
  },
  themeGroups: { signature: 'Signatur', editor: 'Editor', light: 'Lys' },
  transcript: {
    title: 'karakterutskrift',
    intro:
      '120 studiepoeng fullført over fire semester; fordjuping i kunstig intelligens startar tredje studieår (hausten 2026).',
    passed: 'Bestått',
    link: 'sjå heile karakterutskrifta →',
    creditLabel: 'stp',
  },
  notFound: {
    title: '404',
    body: 'Fila finst ikkje. Sida du leitte etter eksisterer ikkje.',
  },
};

function ordinal(n: number): string {
  const suffix = n % 100 >= 11 && n % 100 <= 13 ? 'th' : (['th', 'st', 'nd', 'rd'][n % 10] ?? 'th');
  return `${n}${suffix}`;
}

export const strings: Localized<Strings> = { en, no, nn };

/**
 * UI strings for the current locale. Reactive: read it in JSX, a memo or an
 * effect's compute, e.g. `<h2>{t().headings.skills}</h2>`.
 */
export function t(): Strings {
  return strings[locale()];
}
