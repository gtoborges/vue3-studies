import { expect, test } from "vitest";
import { useTitle } from "./useTitle";

test('useTitle should work with jsdom', () => {
  document.title = 'Foo'

  const title = useTitle()
  
  expect(title.value).toBe('Foo')

  title.value = 'Bar'
  expect(document.title).toBe('Bar')
})
