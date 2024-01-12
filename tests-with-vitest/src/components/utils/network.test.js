import { test, expect, vi, beforeAll, afterAll } from 'vitest'
import { getPostBody } from './network'

beforeAll(() => server.listen())
afterAll(() => server.close())

test('should fetch', async () => {
  const result = await getPostBody(123)

  expect(result).toMatchInlineSnapshot(`"mocked123"`)
})

