# Angular Webpack to Rspack Migration Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0.

The project contains 30,020 components. 
These components are split into 20 groups of 1501 components each.
Component 1501 for each group imports and renders the other components in the group.

**RESULTS**

| Webpack | Rspack |
|---------|-------|
| ~3mins  | ~1min |


## Development server

Run `nx serve myapp` for a dev server.


## Run Webpack Build

```bash
npx nx build myapp
```

Note: You may need to set higher memory limits for the build process.

```bash
NODE_OPTIONS="--max-old-space-size=8192" node --stack-size=4096 ./node_modules/.bin/nx build myapp
```

## Run Rspack Build
Note: The rspack build target is inferred by Nx from the rspack.config.js file.

```bash
npx nx rspack:build myapp
```
