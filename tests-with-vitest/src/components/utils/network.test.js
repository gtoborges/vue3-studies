import { test, expect, vi, beforeAll, afterAll } from 'vitest'
import { getPostBody } from './network'
import { server } from './msw.setup'

beforeAll(() => server.listen())
afterAll(() => server.close())

test('should fetch', async () => {
  const result = await getPostBody(123)

  expect(result).toMatchInlineSnapshot(`"mocked123"`)
})

