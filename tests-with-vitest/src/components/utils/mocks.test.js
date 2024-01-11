import { test, expect, vi } from 'vitest'
import { upperCaseName } from './greeting';

function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5);
}

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

test('time', () => {
  vi.setSystemTime(new Date('2000-1-1 22:34'))
  expect(getCurrentTime()).toBe('22:34')

  vi.useRealTimers()
})
