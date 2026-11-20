import { defineConfig } from 'vitest/config';

// Separate from vite.config.ts so unit tests of pure modules don't spin up
// the Solid app plugin. Add the plugin here once component tests need JSX.
export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
  },
});
