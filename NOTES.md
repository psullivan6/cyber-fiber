# Errors

- **`react-three-fiber` imports**
  - was getting [this](https://github.com/react-spring/react-three-fiber/issues/22#issuecomment-566323581) `ResizeObserverController` import error, so sought out solutions, so followed the link from [this comment](https://github.com/react-spring/react-three-fiber/issues/22#issuecomment-566476898) and used the `react-three-fiber@beta` version, which supports SSR
- **`GLTFLoader` import**
  - added `next-transpile-modules` package and custom `next.config.js` to support transpiling `three` ... will get `BABEL] Note: The code generator has deoptimised the styling` "error" in the build console
- 



# Packages

## Styled-components
- add custom `_document.js` page
- add styled-components SSR config to new `.babelrc` file
- 