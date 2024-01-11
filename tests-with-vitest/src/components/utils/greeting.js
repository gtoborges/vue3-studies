import { upperFirst } from 'lodash'

export function greeting(name) {
  console.log('Hello, ' + name)
}

export function upperCaseName() {
  return upperFirst('augusto')
}
