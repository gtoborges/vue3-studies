import { test, expect } from 'vitest'
import { deepMerge } from './merge'

test('shallow merge', () => {
  const merged = deepMerge(
    {
      name: 'Augusto'
    },
    {
      github: 'gtoborges'
    }
  )

  expect(merged).toEqual({
    name: 'Augusto',
    github: 'gtoborges'
  })
})

test('shallow merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Augusto',
      github:'uknown'
    },
    {
      github: 'gtoborges',
      twitter: 'gtoborges_'
    }
  )

  expect(merged).toMatchInlineSnapshot(`
    {
      "github": "gtoborges",
      "name": "Augusto",
      "twitter": "gtoborges_",
    }
  `)
})

test('shallow merge with arrays', () => {
  const merged = deepMerge(
    ['vue', 'react'],
    ['svelte', 'solid']
  )

  expect(merged).toEqual(['vue', 'react', 'svelte', 'solid'])
})

// test.skip
// test.fails
test('deep merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Augusto',
      accounts: {
        github:'unkown'
      },
      languages: ['js']
    },
    {
      accounts: {
        twitter: 'gtoborges_'
      },
      languages: ['ts', 'vue']
    }
  )

  expect(merged).toMatchSnapshot()
})

test('throws errors on merging two different types', () => {
  expect(() => deepMerge(
    ['foo', 'bar'],
    { foo: 'bar' }
  )).toThrowError('Can not merge two different types')
})

test('make sure DOM is not available', () => {
  expect(typeof document).toBe('undefined')
})
