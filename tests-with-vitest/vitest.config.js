import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: ['src/components/utils/msw.setup.js'],
      environment: 'jsdom',
      environmentMatchGlobs: [
        ['src/components/utils/*.test.js', 'node'],
        ['src/components/example/*.test.js', 'jsdom'],
        ['src/components/__tests__/*.spec.js', 'jsdom']
      ],
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
