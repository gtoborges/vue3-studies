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

export {
  server
}
