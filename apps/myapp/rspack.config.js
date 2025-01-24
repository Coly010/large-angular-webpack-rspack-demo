const {createConfig} = require("@ng-rspack/build");

module.exports = createConfig({
    root: __dirname,
    main: './src/main.ts',
  tsconfigPath: './tsconfig.wp.app.json'
})
