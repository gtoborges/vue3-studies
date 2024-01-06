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

  expect(merged).toEqual({
    name: 'Augusto',
    github: 'gtoborges',
    twitter: 'gtoborges_'
  })
})

test('shallow merge with arrays', () => {
  const merged = deepMerge(
    ['vue', 'react'],
    ['svelte', 'solid']
  )

  expect(merged).toEqual(['vue', 'react', 'svelte', 'solid'])
})

test('deep merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Augusto',
      accounts: {
        github:'unkown'
      }
    },
    {
      accounts: {
        twitter: 'gtoborges_'
      }
    }
  )

  expect(merged).toEqual({
    name: 'Augusto',
    accounts: {
      github: 'unkown',
      twitter: 'gtoborges_'
    }
  })
})