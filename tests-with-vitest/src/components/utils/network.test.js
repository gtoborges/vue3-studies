import { test, expect, vi, beforeAll, afterAll } from 'vitest'
import { getPostBody } from './network'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const server = setupServer(
  http.get(
    "https://jsonplaceholder.typicode.com/post/:id",
    ({ params }) => {
      return HttpResponse.json({body: `mocked${params.id}`})
    }
  )
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('should fetch', async () => {
  const result = await getPostBody(123)

  expect(result).toMatchInlineSnapshot(`"mocked123"`)
})

