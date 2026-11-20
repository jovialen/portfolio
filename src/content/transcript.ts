import type { Localized } from '../i18n/locale';

/** NTNU examination arrangement for a course. */
export type Assessment = 'exam' | 'digital' | 'home' | 'portfolio' | 'team' | 'report' | 'online';

export const assessmentLabels: Record<Assessment, Localized<string>> = {
  exam: { en: 'school exam', no: 'skoleeksamen', nn: 'skoleeksamen' },
  digital: { en: 'digital exam', no: 'digital eksamen', nn: 'digital eksamen' },
  home: { en: 'home exam', no: 'hjemmeeksamen', nn: 'heimeeksamen' },
  portfolio: { en: 'portfolio', no: 'mappevurdering', nn: 'mappevurdering' },
  team: { en: 'team project', no: 'gruppeprosjekt', nn: 'gruppeprosjekt' },
  report: { en: 'group report', no: 'grupperapport', nn: 'grupperapport' },
  online: { en: 'online course', no: 'nettkurs', nn: 'nettkurs' },
};

export type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'pass';

export interface Course {
  code: string;
  name: Localized<string>;
  grade: Grade;
  /** ECTS credits. */
  credits: number;
  assessment: Assessment;
}

export interface Term {
  term: Localized<string>;
  courses: Course[];
}

/** Newest term first. */
export const transcript: Term[] = [
  {
    term: { en: '2026 · Spring', no: '2026 · Vår', nn: '2026 · Vår' },
    courses: [
      {
        code: 'TDT4145',
        name: {
          en: 'Data Modelling and Database Systems',
          no: 'Datamodellering og databasesystemer',
          nn: 'Datamodellering og databasesystem',
        },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TDT4186',
        name: { en: 'Operating Systems', no: 'Operativsystemer', nn: 'Operativsystem' },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TTM4100',
        name: {
          en: 'Communication - Services and Networks',
          no: 'Kommunikasjon - tjenester og nett',
          nn: 'Kommunikasjon - tenester og nett',
        },
        grade: 'B',
        credits: 7.5,
        assessment: 'digital',
      },
      {
        code: 'TDT4140',
        name: {
          en: 'Software Engineering',
          no: 'Programvareutvikling',
          nn: 'Programvareutvikling',
        },
        grade: 'C',
        credits: 7.5,
        assessment: 'portfolio',
      },
    ],
  },
  {
    term: { en: '2025 · Autumn', no: '2025 · Høst', nn: '2025 · Haust' },
    courses: [
      {
        code: 'TDT4120',
        name: {
          en: 'Algorithms and Data Structures',
          no: 'Algoritmer og datastrukturer',
          nn: 'Algoritmar og datastrukturar',
        },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TDT4160',
        name: { en: 'Computer Fundamentals', no: 'Datamaskiner', nn: 'Datamaskinar' },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TMA4240',
        name: { en: 'Statistics', no: 'Statistikk', nn: 'Statistikk' },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'IT1901',
        name: {
          en: 'Informatics Project Work I',
          no: 'Informatikk prosjektarbeid I',
          nn: 'Informatikk prosjektarbeid I',
        },
        grade: 'C',
        credits: 7.5,
        assessment: 'team',
      },
    ],
  },
  {
    term: { en: '2025 · Spring', no: '2025 · Vår', nn: '2025 · Vår' },
    courses: [
      {
        code: 'TDT4100',
        name: {
          en: 'Object-Oriented Programming',
          no: 'Objektorientert programmering',
          nn: 'Objektorientert programmering',
        },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TMA4115',
        name: { en: 'Mathematics 3', no: 'Matematikk 3', nn: 'Matematikk 3' },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TTT4203',
        name: {
          en: 'Introduction to Analog and Digital Electronics',
          no: 'Innføring i analog og digital elektronikk',
          nn: 'Innføring i analog og digital elektronikk',
        },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TDT4180',
        name: {
          en: 'Human-Computer Interaction',
          no: 'Menneske-maskin-interaksjon',
          nn: 'Menneske-maskin-interaksjon',
        },
        grade: 'pass',
        credits: 7.5,
        assessment: 'report',
      },
    ],
  },
  {
    term: { en: '2024 · Autumn', no: '2024 · Høst', nn: '2024 · Haust' },
    courses: [
      {
        code: 'TMA4100',
        name: { en: 'Mathematics 1', no: 'Matematikk 1', nn: 'Matematikk 1' },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TMA4140',
        name: { en: 'Discrete Mathematics', no: 'Diskret matematikk', nn: 'Diskret matematikk' },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'TDT4109',
        name: {
          en: 'Information Technology, Introduction',
          no: 'Informasjonsteknologi, grunnkurs',
          nn: 'Informasjonsteknologi, grunnkurs',
        },
        grade: 'A',
        credits: 7.5,
        assessment: 'exam',
      },
      {
        code: 'EXPH0300',
        name: {
          en: 'Examen Philosophicum',
          no: 'Examen philosophicum',
          nn: 'Examen philosophicum',
        },
        grade: 'A',
        credits: 7.5,
        assessment: 'home',
      },
      {
        code: 'HMS0002',
        name: {
          en: 'HSE Course for First-Year Students',
          no: 'HMS-kurs for 1. årsstudenter',
          nn: 'HMS-kurs for 1. årsstudentar',
        },
        grade: 'pass',
        credits: 0,
        assessment: 'online',
      },
    ],
  },
];
