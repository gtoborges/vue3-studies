import {upperFirst, camelCase} from 'lodash'

export default {
  install(app) {
    const requiredComponents = import.meta.globEager('./components/*.vue')

    Object.entries(requiredComponents).forEach(([path, m]) => {
      const componentName = upperFirst(
        camelCase(path.split('/').pop().replace(/\.\w+$/, ''))
      );

      app.component(componentName, m.default)
    })

  }
}

