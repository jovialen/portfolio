import type { Localized } from '../i18n/locale';

export interface ProjectText {
  role: string;
  /** One or two sentences for the card. */
  blurb: string;
  /** One line under the title on the project page. */
  tagline: string;
  overview: string;
  highlights: string[];
}

export interface Project {
  /** URL slug: `/projects/<id>`. */
  id: string;
  name: string;
  tags: string[];
  stack: string;
  repo: string;
  demo?: string;
  /**
   * Screenshot URL. None of the projects have one yet; the project page shows
   * a placeholder until one is added (import the file from `src/assets` and
   * set it here).
   */
  image?: string;
  text: Localized<ProjectText>;
}

export const projects: Project[] = [
  {
    id: 'paaskejakt',
    name: 'påskejakt',
    tags: ['Python', 'LLM', 'Gemini'],
    stack: 'Python, Google Gemini, curses, Pillow',
    repo: 'https://github.com/jovialen/easter-hunt-game-2026',
    text: {
      en: {
        role: 'Solo project',
        blurb:
          'A terminal murder-mystery where you interrogate a household of AI-powered suspects to find who poisoned the Easter Bunny.',
        tagline: 'A murder-mystery in the terminal, with AI-powered suspects.',
        overview:
          'Påskejakt ("The Easter Hunt") is a terminal murder-mystery where you question a household of AI-powered suspects to work out who poisoned the Easter Bunny. Each suspect is a Google Gemini chat session seeded with its own personality, memory of the night and secrets, so every free-typed interrogation plays out differently. A hand-drawn ASCII mansion, live photo-to-ASCII portraits and small puzzles that unlock testimony round it out. A for-fun project hacked together over a few days.',
        highlights: [
          'Each suspect is a Gemini-backed character with its own personality, memories and secrets, answering free-text questions live.',
          'Character behaviour shifts with game state — the lawyer only cooperates once you beat him at trivia.',
          'Real-time photo→ASCII portraits via a Sobel edge-detection pass plus luminance ramps (Pillow).',
        ],
      },
      no: {
        role: 'Soloprosjekt',
        blurb:
          'Et terminalbasert mordmysterium der du avhører en husstand av AI-drevne mistenkte for å finne ut hvem som forgiftet påskeharen.',
        tagline: 'Et mordmysterium i terminalen, med AI-drevne mistenkte.',
        overview:
          'Påskejakt er et terminalbasert mordmysterium der du avhører en husstand av AI-drevne mistenkte for å finne ut hvem som forgiftet påskeharen. Hver mistenkt er en Google Gemini-chatøkt seedet med egen personlighet, minne om kvelden og hemmeligheter, så hvert avhør på fritekst-norsk utspiller seg forskjellig. En håndtegnet ASCII-villa, sanntids bilde-til-ASCII-portretter og små oppgaver som låser opp vitneforklaringer fyller ut resten. Et hobbyprosjekt bygget på noen dager.',
        highlights: [
          'Hver mistenkt er en Gemini-drevet karakter med egen personlighet, minner og hemmeligheter, som svarer på fritekstspørsmål live.',
          'Karakterenes oppførsel endrer seg med spilltilstanden — advokaten samarbeider først når du slår ham i quiz.',
          'Sanntids bilde-til-ASCII-portretter med Sobel-kantdeteksjon og luminansramper (Pillow).',
        ],
      },
      nn: {
        role: 'Soloprosjekt',
        blurb:
          'Eit terminalbasert mordmysterium der du avhøyrer ein husstand av AI-drivne mistenkte for å finne ut kven som forgifta påskeharen.',
        tagline: 'Eit mordmysterium i terminalen, med AI-drivne mistenkte.',
        overview:
          'Påskejakt er eit terminalbasert mordmysterium der du avhøyrer ein husstand av AI-drivne mistenkte for å finne ut kven som forgifta påskeharen. Kvar mistenkt er ei Google Gemini-chatøkt seeda med eigen personlegdom, minne om kvelden og løyndomar, så kvart avhøyr på fritekst-norsk utspelar seg ulikt. Ei handteikna ASCII-villa, sanntids bilde-til-ASCII-portrett og små oppgåver som låser opp vitnemål fyller ut resten. Eit hobbyprosjekt bygd på nokre dagar.',
        highlights: [
          'Kvar mistenkt er ein Gemini-driven karakter med eigen personlegdom, minne og løyndomar, som svarar på fritekstspørsmål live.',
          'Karakterane si åtferd endrar seg med speltilstanden — advokaten samarbeider først når du slår han i quiz.',
          'Sanntids bilde-til-ASCII-portrett med Sobel-kantdeteksjon og luminansramper (Pillow).',
        ],
      },
    },
  },
  {
    id: 'xadrez',
    name: 'xadrez',
    tags: ['Rust', 'chess-engine', 'library'],
    stack: 'Rust, Cargo',
    repo: 'https://github.com/jovialen/xadrez',
    text: {
      en: {
        role: 'Solo project',
        blurb:
          'A chess engine written in Rust with move generation, evaluation and search, published as a Cargo crate.',
        tagline: 'A chess engine written in Rust.',
        overview:
          'Xadrez is a chess engine and library written in Rust. It handles full legal move generation, board evaluation and FEN position parsing, plus a configurable search that returns the best move within a depth or time budget. It ships as a Cargo crate you can drop straight into another Rust project.',
        highlights: [
          'Legal move generation and board state driven entirely by FEN strings.',
          'Position evaluation with a MoveSearcher that takes a configurable max depth and time budget.',
          'Benchmark suite via cargo bench and CI through GitHub Actions; released as v0.1.0.',
        ],
      },
      no: {
        role: 'Soloprosjekt',
        blurb:
          'En sjakkmotor skrevet i Rust med trekkgenerering, evaluering og søk, publisert som en Cargo-crate.',
        tagline: 'En sjakkmotor skrevet i Rust.',
        overview:
          'Xadrez er en sjakkmotor og et bibliotek skrevet i Rust. Den håndterer full lovlig trekkgenerering, evaluering av stillinger og parsing av FEN-stillinger, pluss et konfigurerbart søk som returnerer beste trekk innenfor en dybde- eller tidsbegrensning. Den leveres som en Cargo-crate du kan bruke rett inn i et annet Rust-prosjekt.',
        highlights: [
          'Lovlig trekkgenerering og brettilstand drevet utelukkende av FEN-strenger.',
          'Evaluering av stillinger med en MoveSearcher som tar konfigurerbar maksdybde og tidsbudsjett.',
          'Benchmark-suite via cargo bench og CI gjennom GitHub Actions; utgitt som v0.1.0.',
        ],
      },
      nn: {
        role: 'Soloprosjekt',
        blurb:
          'Ein sjakkmotor skriven i Rust med trekkgenerering, evaluering og søk, publisert som ein Cargo-crate.',
        tagline: 'Ein sjakkmotor skriven i Rust.',
        overview:
          'Xadrez er ein sjakkmotor og eit bibliotek skrive i Rust. Han handterer full lovleg trekkgenerering, evaluering av stillingar og parsing av FEN-stillingar, pluss eit konfigurerbart søk som returnerer beste trekk innanfor ei djupne- eller tidsavgrensing. Han blir levert som ein Cargo-crate du kan bruke rett inn i eit anna Rust-prosjekt.',
        highlights: [
          'Lovleg trekkgenerering og bretttilstand driven utelukkande av FEN-strengar.',
          'Evaluering av stillingar med ein MoveSearcher som tek konfigurerbar maksdjupne og tidsbudsjett.',
          'Benchmark-suite via cargo bench og CI gjennom GitHub Actions; gjeve ut som v0.1.0.',
        ],
      },
    },
  },
  {
    id: 'abakusrevyen',
    name: 'abakusrevyen',
    tags: ['Astro', 'TypeScript', 'Tailwind'],
    stack: 'Astro, TypeScript, Tailwind CSS, pnpm, Nix',
    repo: 'https://github.com/abakus-ntnu/abakusrevyen',
    demo: 'https://abakusrevyen.no/',
    text: {
      en: {
        role: 'With the Abakusrevyen tech team',
        blurb: "The official website for Abakusrevyen, NTNU's student revue, live at abakusrevyen.no.",
        tagline: "The website for Abakusrevyen, NTNU's student revue.",
        overview:
          'abakusrevyen.no is the public site for Abakusrevyen, the student revue of Abakus at NTNU, built with the Teknikk (tech) team. Astro renders static pages, styling is done with Tailwind CSS, and everything is written in TypeScript. Changes ship through pull requests with an automated build and deploy to GitHub Pages.',
        highlights: [
          'Static site built with Astro and styled with Tailwind CSS.',
          'TypeScript throughout, with Prettier + Husky and a Nix dev shell for reproducible setup.',
          'Automated build and deploy to GitHub Pages via GitHub Actions on merge to prod.',
        ],
      },
      no: {
        role: 'Med Teknikk-gruppa i Abakusrevyen',
        blurb:
          'Den offisielle nettsiden til Abakusrevyen, studentrevyen ved NTNU, live på abakusrevyen.no.',
        tagline: 'Nettsiden til Abakusrevyen, studentrevyen ved NTNU.',
        overview:
          'abakusrevyen.no er den offentlige nettsiden til Abakusrevyen, studentrevyen til Abakus ved NTNU, bygget sammen med Teknikk-gruppa. Astro rendrer statiske sider, stylingen er gjort med Tailwind CSS, og alt er skrevet i TypeScript. Endringer leveres via pull requests med automatisk bygg og deploy til GitHub Pages.',
        highlights: [
          'Statisk nettside bygget med Astro og stylet med Tailwind CSS.',
          'TypeScript gjennomgående, med Prettier + Husky og et Nix dev-shell for reproduserbart oppsett.',
          'Automatisk bygg og deploy til GitHub Pages via GitHub Actions ved merge til prod.',
        ],
      },
      nn: {
        role: 'Med Teknikk-gruppa i Abakusrevyen',
        blurb:
          'Den offisielle nettsida til Abakusrevyen, studentrevyen ved NTNU, live på abakusrevyen.no.',
        tagline: 'Nettsida til Abakusrevyen, studentrevyen ved NTNU.',
        overview:
          'abakusrevyen.no er den offentlege nettsida til Abakusrevyen, studentrevyen til Abakus ved NTNU, bygd saman med Teknikk-gruppa. Astro renderar statiske sider, stylinga er gjort med Tailwind CSS, og alt er skrive i TypeScript. Endringar blir levert via pull requests med automatisk bygg og deploy til GitHub Pages.',
        highlights: [
          'Statisk nettside bygd med Astro og styla med Tailwind CSS.',
          'TypeScript gjennomgåande, med Prettier + Husky og eit Nix dev-shell for reproduserbart oppsett.',
          'Automatisk bygg og deploy til GitHub Pages via GitHub Actions ved merge til prod.',
        ],
      },
    },
  },
  {
    id: 'hydraulic-erosion',
    name: 'hydraulic-erosion',
    tags: ['C99', 'OpenGL', 'simulation'],
    stack: 'C99, OpenGL, GLFW',
    repo: 'https://github.com/jovialen/hydraulic_erosion',
    text: {
      en: {
        role: 'Solo project',
        blurb:
          'A terrain-erosion simulation in C99 and OpenGL, implementing a published hydraulic-erosion algorithm.',
        tagline: 'Simulating rain carving terrain, from a research paper, in C.',
        overview:
          'A hydraulic-erosion simulator written in C99 that implements Hans Beyer’s erosion algorithm. Rainfall is dropped across a heightmap and the water picks up, carries and deposits sediment, gradually carving realistic valleys and ridges. Rendering runs through a small custom OpenGL API layered over GLFW, inspired by the sokol headers.',
        highlights: [
          'Implemented a published hydraulic-erosion algorithm straight from the original paper.',
          'Built a small custom rendering API over OpenGL and GLFW, with a debug wireframe mode.',
          'Cross-platform build scripts for Windows and Linux.',
        ],
      },
      no: {
        role: 'Soloprosjekt',
        blurb:
          'En terreng-erosjonssimulering i C99 og OpenGL som implementerer en publisert algoritme for hydraulisk erosjon.',
        tagline: 'Simulerer regn som graver ut terreng, fra en forskningsartikkel, i C.',
        overview:
          'En simulator for hydraulisk erosjon skrevet i C99 som implementerer Hans Beyers erosjonsalgoritme. Regn slippes over et høydekart, og vannet plukker opp, frakter og avsetter sedimenter, og graver gradvis ut realistiske daler og rygger. Grafikken kjører gjennom et lite egetlaget OpenGL-API oppå GLFW, inspirert av sokol-headerne.',
        highlights: [
          'Implementerte en publisert algoritme for hydraulisk erosjon rett fra originalartikkelen.',
          'Bygde et lite egetlaget rendering-API oppå OpenGL og GLFW, med wireframe-modus for debugging.',
          'Byggeskript på tvers av plattformer for Windows og Linux.',
        ],
      },
      nn: {
        role: 'Soloprosjekt',
        blurb:
          'Ei terreng-erosjonssimulering i C99 og OpenGL som implementerer ein publisert algoritme for hydraulisk erosjon.',
        tagline: 'Simulerer regn som grev ut terreng, frå ein forskingsartikkel, i C.',
        overview:
          'Ein simulator for hydraulisk erosjon skriven i C99 som implementerer Hans Beyers erosjonsalgoritme. Regn blir sleppt over eit høgdekart, og vatnet plukkar opp, fraktar og avset sediment, og grev gradvis ut realistiske dalar og ryggar. Grafikken køyrer gjennom eit lite eigenlaga OpenGL-API oppå GLFW, inspirert av sokol-headerane.',
        highlights: [
          'Implementerte ein publisert algoritme for hydraulisk erosjon rett frå originalartikkelen.',
          'Bygde eit lite eigenlaga rendering-API oppå OpenGL og GLFW, med wireframe-modus for debugging.',
          'Byggjeskript på tvers av plattformer for Windows og Linux.',
        ],
      },
    },
  },
  {
    id: 'chip8',
    name: 'chip8',
    tags: ['Rust', 'emulator'],
    stack: 'Rust, winit, pixels, clap',
    repo: 'https://github.com/jovialen/chip8',
    text: {
      en: {
        role: 'Solo project',
        blurb:
          'A CHIP-8 interpreter written in Rust, with a windowed display and configurable behaviour.',
        tagline: 'A CHIP-8 emulator in Rust.',
        overview:
          'An implementation of Joseph Weisbecker’s CHIP-8 virtual machine, written in Rust. It runs classic CHIP-8 ROMs in a real window, mapping the original 16-key keypad onto the keyboard. Rendering uses winit and pixels, and a command-line interface exposes the options.',
        highlights: [
          'Full CHIP-8 instruction set with a windowed display via winit and pixels.',
          'Feature flags for the ambiguous opcodes (bit-shift, jump, load/store) so you can match different CHIP-8 variants.',
          'Configurable clap-based CLI with the original 16-key keypad mapped to the keyboard.',
        ],
      },
      no: {
        role: 'Soloprosjekt',
        blurb: 'En CHIP-8-tolker skrevet i Rust, med vindusbasert skjerm og konfigurerbar oppførsel.',
        tagline: 'En CHIP-8-emulator i Rust.',
        overview:
          'En implementasjon av Joseph Weisbeckers CHIP-8-virtuelle maskin, skrevet i Rust. Den kjører klassiske CHIP-8-ROM-er i et ekte vindu, og mapper det originale 16-tasters tastaturet til tastaturet. Grafikken bruker winit og pixels, og et kommandolinjegrensesnitt eksponerer valgene.',
        highlights: [
          'Komplett CHIP-8-instruksjonssett med vindusbasert skjerm via winit og pixels.',
          'Feature-flagg for de tvetydige opkodene (bit-skift, hopp, load/store) slik at du kan matche ulike CHIP-8-varianter.',
          'Konfigurerbart clap-basert CLI med det originale 16-tasters tastaturet mappet til tastaturet.',
        ],
      },
      nn: {
        role: 'Soloprosjekt',
        blurb: 'Ein CHIP-8-tolk skriven i Rust, med vindaugsbasert skjerm og konfigurerbar åtferd.',
        tagline: 'Ein CHIP-8-emulator i Rust.',
        overview:
          'Ein implementasjon av Joseph Weisbeckers CHIP-8-virtuelle maskin, skriven i Rust. Han køyrer klassiske CHIP-8-ROM-ar i eit ekte vindauge, og mappar det originale 16-tasters tastaturet til tastaturet. Grafikken brukar winit og pixels, og eit kommandolinjegrensesnitt eksponerer vala.',
        highlights: [
          'Komplett CHIP-8-instruksjonssett med vindaugsbasert skjerm via winit og pixels.',
          'Feature-flagg for dei tvitydige opkodane (bit-skift, hopp, load/store) slik at du kan matche ulike CHIP-8-variantar.',
          'Konfigurerbart clap-basert CLI med det originale 16-tasters tastaturet mappa til tastaturet.',
        ],
      },
    },
  },
  {
    id: 'tex',
    name: 'tex',
    tags: ['C++', 'OpenGL', 'engine'],
    stack: 'C++17, OpenGL 4.6, GLFW',
    repo: 'https://github.com/jovialen/tex',
    text: {
      en: {
        role: 'Solo project',
        blurb: 'A small C++ game engine for cellular automata, built as a reusable library.',
        tagline: 'A C++ engine for cellular automata.',
        overview:
          'tex is a small game engine for cellular automata, written in C++ and shipped as a reusable library. It wraps display, input, timing and world/map management behind a clean API, rendered with OpenGL 4.6. You link it into your own project as a static or shared library and drive it from a handful of examples.',
        highlights: [
          'Reusable engine exposed as both static and shared library targets.',
          'Handles display, input, timing and world/map state behind a small API.',
          'OpenGL 4.6 rendering (GLFW + glad + stb), with several runnable examples.',
        ],
      },
      no: {
        role: 'Soloprosjekt',
        blurb: 'En liten C++-spillmotor for cellulære automater, bygget som et gjenbrukbart bibliotek.',
        tagline: 'En C++-motor for cellulære automater.',
        overview:
          'tex er en liten spillmotor for cellulære automater, skrevet i C++ og levert som et gjenbrukbart bibliotek. Den pakker skjerm, input, timing og verden-/kartadministrasjon bak et rent API, tegnet med OpenGL 4.6. Du lenker den inn i ditt eget prosjekt som et statisk eller delt bibliotek og styrer den fra en håndfull eksempler.',
        highlights: [
          'Gjenbrukbar motor eksponert som både statisk og delt biblioteksmål.',
          'Håndterer skjerm, input, timing og verden-/karttilstand bak et lite API.',
          'OpenGL 4.6-grafikk (GLFW + glad + stb), med flere kjørbare eksempler.',
        ],
      },
      nn: {
        role: 'Soloprosjekt',
        blurb: 'Ein liten C++-spelmotor for cellulære automatar, bygd som eit gjenbrukbart bibliotek.',
        tagline: 'Ein C++-motor for cellulære automatar.',
        overview:
          'tex er ein liten spelmotor for cellulære automatar, skriven i C++ og levert som eit gjenbrukbart bibliotek. Han pakkar skjerm, input, timing og verd-/kartadministrasjon bak eit reint API, teikna med OpenGL 4.6. Du lenkjer han inn i ditt eige prosjekt som eit statisk eller delt bibliotek og styrer han frå ein handfull eksempel.',
        highlights: [
          'Gjenbrukbar motor eksponert som både statisk og delt biblioteksmål.',
          'Handterer skjerm, input, timing og verd-/karttilstand bak eit lite API.',
          'OpenGL 4.6-grafikk (GLFW + glad + stb), med fleire køyrbare eksempel.',
        ],
      },
    },
  },
  {
    id: 'bf',
    name: 'brainf***',
    tags: ['Rust', 'interpreter', 'esolang'],
    stack: 'Rust, clap',
    repo: 'https://github.com/jovialen/brainfuck',
    text: {
      en: {
        role: 'Solo project',
        blurb:
          'A fast interpreter for the esoteric language Brainf***, written in Rust with an optimizing lexer.',
        tagline: 'A Brainf*** interpreter in Rust, tuned for speed.',
        overview:
          'An interpreter for Brainf***, the eight-instruction esoteric language, written in Rust. Instead of walking the source naively, it runs the code through a separate lexer crate that collapses repeated operations and pre-compiles common patterns into optimized instructions — which is what lets it run programs at close to native speed. Source can be a file or an inline program string, passed through a small CLI.',
        highlights: [
          'Optimizing lexer, split into its own crate, that pre-compiles common patterns and collapses repeated ops.',
          'Runs Brainf*** programs at close to native speed.',
          'Small clap-based CLI that takes either a source file or an inline program string.',
        ],
      },
      no: {
        role: 'Soloprosjekt',
        blurb:
          'En rask tolker for det esoteriske språket Brainf***, skrevet i Rust med en optimaliserende lexer.',
        tagline: 'En Brainf***-tolker i Rust, tunet for fart.',
        overview:
          'En tolker for Brainf***, det esoteriske språket med åtte instruksjoner, skrevet i Rust. I stedet for å gå gjennom kildekoden naivt, kjører den koden gjennom en egen lexer-crate som slår sammen gjentatte operasjoner og forhåndskompilerer vanlige mønstre til optimaliserte instruksjoner — det er dette som lar den kjøre programmer med tilnærmet native hastighet. Kilden kan være en fil eller en programstreng, gitt gjennom et lite CLI.',
        highlights: [
          'Optimaliserende lexer, skilt ut i sin egen crate, som forhåndskompilerer vanlige mønstre og slår sammen gjentatte operasjoner.',
          'Kjører Brainf***-programmer med tilnærmet native hastighet.',
          'Lite clap-basert CLI som tar enten en kildefil eller en programstreng.',
        ],
      },
      nn: {
        role: 'Soloprosjekt',
        blurb:
          'Ein rask tolk for det esoteriske språket Brainf***, skriven i Rust med ein optimaliserande lexer.',
        tagline: 'Ein Brainf***-tolk i Rust, tuna for fart.',
        overview:
          'Ein tolk for Brainf***, det esoteriske språket med åtte instruksjonar, skriven i Rust. I staden for å gå gjennom kjeldekoden naivt, køyrer han koden gjennom ei eiga lexer-crate som slår saman gjentekne operasjonar og førehandskompilerer vanlege mønster til optimaliserte instruksjonar — det er dette som lèt han køyre program med tilnærma native hastigheit. Kjelda kan vere ei fil eller ein programstreng, gitt gjennom eit lite CLI.',
        highlights: [
          'Optimaliserande lexer, skild ut i si eiga crate, som førehandskompilerer vanlege mønster og slår saman gjentekne operasjonar.',
          'Køyrer Brainf***-program med tilnærma native hastigheit.',
          'Lite clap-basert CLI som tek anten ei kjeldefil eller ein programstreng.',
        ],
      },
    },
  },
];

/** The projects featured on the CV, in display order. The rest appear on /projects. */
export const CV_FEATURED: readonly string[] = ['xadrez', 'abakusrevyen', 'paaskejakt'];

export function findProject(id: string | undefined): Project | undefined {
  return projects.find((p) => p.id === id);
}

export const featuredProjects: Project[] = CV_FEATURED.map((id) => {
  const project = findProject(id);
  if (!project) throw new Error(`CV_FEATURED lists unknown project "${id}"`);
  return project;
});

/** Every project, featured ones first. */
export const allProjects: Project[] = [
  ...featuredProjects,
  ...projects.filter((p) => !CV_FEATURED.includes(p.id)),
];
