import { test, expect, vi } from 'vitest'
import { greeting } from './greeting.js'

test('greeting', () => {
  const spy = vi.spyOn(console, 'log')

  greeting('World')
  greeting('Augusto')

  expect(spy).toBeCalledTimes(2)
  expect(spy).toBeCalledWith('Hello, Augusto')
  expect(spy).toBeCalledWith('Hello, World')
})

test('greeting specific order', () => {
  const spy = vi.spyOn(console, 'log')

  greeting('World')
  greeting('Augusto')

  expect(spy).toBeCalledTimes(2)
  expect(spy.mock.calls[0][0]).toBe('Hello, World')
  expect(spy.mock.calls[1][0]).toBe('Hello, Augusto')
})

test('greeting separately', () => {
  const spy = vi.spyOn(console, 'log')

  greeting('World')
  expect(spy).toBeCalledTimes(1)
  expect(spy.mock.calls[0][0]).toBe('Hello, World')

  spy.mockReset()
  greeting('Augusto')
  expect(spy).toBeCalledTimes(1)
  expect(spy.mock.calls[0][0]).toMatchInlineSnapshot(`"Hello, Augusto"`)
})
