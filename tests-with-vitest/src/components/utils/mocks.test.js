import { test, expect, vi } from 'vitest'
import { upperCaseName } from './greeting';

vi.mock('lodash', (importOriginal) => {
  const actual = importOriginal()
  return {
    ...actual,
    upperFirst() {
      return 'Gtoborges'
    }
  }
})

test('upperFirstCaseName', () => {
  const name = upperCaseName()
  expect(name).toEqual('Gtoborges')
})
