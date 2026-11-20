import type { Localized } from '../i18n/locale';

export type Lens = 'web' | 'systems' | 'ai';
export type LensFilter = 'all' | Lens;

/** `core`: used in real projects. `familiar`: known, not yet used in depth. */
export type SkillLevel = 'core' | 'familiar';

export interface Skill {
  name: string;
  level: SkillLevel;
  /**
   * Number of real, defensible repos using this skill. The badge only shows
   * at 2 or more. Git and Linux stay at 0: they touch nearly every repo, so a
   * count there is noise.
   */
  repos: number;
  lenses: Lens[];
}

export interface SkillGroup {
  category: Localized<string>;
  skills: Skill[];
}

/** Repo count at which the badge appears. */
export const REPO_BADGE_MIN = 2;

export const lensFilters: { id: LensFilter; label: Localized<string> }[] = [
  { id: 'all', label: { en: 'All', no: 'Alle', nn: 'Alle' } },
  { id: 'web', label: { en: 'Web', no: 'Web', nn: 'Web' } },
  { id: 'systems', label: { en: 'Systems', no: 'Systemer', nn: 'System' } },
  { id: 'ai', label: { en: 'AI', no: 'KI', nn: 'KI' } },
];

export const skillGroups: SkillGroup[] = [
  {
    category: { en: 'languages', no: 'språk', nn: 'språk' },
    skills: [
      { name: 'Rust', level: 'core', repos: 4, lenses: ['systems'] },
      { name: 'C / C++', level: 'core', repos: 2, lenses: ['systems'] },
      { name: 'Java', level: 'core', repos: 1, lenses: ['web'] },
      { name: 'TypeScript', level: 'core', repos: 5, lenses: ['web'] },
      { name: 'JavaScript', level: 'core', repos: 6, lenses: ['web'] },
      { name: 'Python', level: 'core', repos: 4, lenses: ['ai', 'web'] },
      { name: 'SQL', level: 'core', repos: 2, lenses: ['web', 'ai'] },
      { name: 'Ruby', level: 'familiar', repos: 1, lenses: ['web'] },
    ],
  },
  {
    category: { en: 'frontend', no: 'frontend', nn: 'frontend' },
    skills: [
      { name: 'React', level: 'core', repos: 3, lenses: ['web'] },
      { name: 'Astro', level: 'core', repos: 2, lenses: ['web'] },
      { name: 'Tailwind CSS', level: 'core', repos: 3, lenses: ['web'] },
      { name: 'HTML / CSS', level: 'core', repos: 6, lenses: ['web'] },
      { name: 'Next.js', level: 'familiar', repos: 1, lenses: ['web'] },
    ],
  },
  {
    category: { en: 'backend', no: 'backend', nn: 'backend' },
    skills: [
      { name: 'Node', level: 'core', repos: 3, lenses: ['web'] },
      { name: 'Spring Boot', level: 'core', repos: 1, lenses: ['web'] },
      { name: 'PostgreSQL', level: 'core', repos: 2, lenses: ['web', 'ai'] },
      { name: 'REST APIs', level: 'core', repos: 0, lenses: ['web'] },
      { name: 'Ruby on Rails', level: 'familiar', repos: 1, lenses: ['web'] },
    ],
  },
  {
    category: { en: 'cloud & devops', no: 'sky og devops', nn: 'sky og devops' },
    skills: [
      { name: 'Docker', level: 'core', repos: 3, lenses: ['web', 'systems', 'ai'] },
      { name: 'Git', level: 'core', repos: 0, lenses: ['web', 'systems', 'ai'] },
      { name: 'GitHub Actions', level: 'core', repos: 3, lenses: ['web', 'systems'] },
      { name: 'Linux', level: 'core', repos: 0, lenses: ['systems', 'ai'] },
      { name: 'CMake', level: 'core', repos: 0, lenses: ['systems'] },
      { name: 'Azure', level: 'familiar', repos: 1, lenses: ['web', 'systems', 'ai'] },
    ],
  },
  {
    category: { en: 'AI / ML', no: 'KI / ML', nn: 'KI / ML' },
    skills: [{ name: 'LLM APIs (Gemini)', level: 'core', repos: 1, lenses: ['ai'] }],
  },
  {
    category: { en: 'graphics', no: 'grafikk', nn: 'grafikk' },
    skills: [{ name: 'OpenGL', level: 'core', repos: 2, lenses: ['systems'] }],
  },
];

/** Groups with only the skills matching `filter`; groups left empty are dropped. */
export function filterSkills(filter: LensFilter): SkillGroup[] {
  return skillGroups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((s) => filter === 'all' || s.lenses.includes(filter)),
    }))
    .filter((group) => group.skills.length > 0);
}
