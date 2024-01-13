import { test, expect } from 'vitest'
import { useCycleList } from './example'

test('useCyclList would cycle correctly', () => {
  const items = ['a', 'b', 'c']
  const { current, next, prev } = useCycleList(items)
  
  expect(current.value).toBe('a')
  
  next()
  expect(current.value).toBe('b')

  next()
  expect(current.value).toBe('c')

  next()
  expect(current.value).toBe('a')

  prev()
  expect(current.value).toBe('c')
})
