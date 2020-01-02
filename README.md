# Angular project from scratch without the CLI

1. Install packages (exact versions): <br/>
   `yarn add @angular/core@~8.2.14 @angular/common@~8.2.14 @angular/compiler@~8.2.14 @angular/compiler-cli@~8.2.14 @angular/forms@~8.2.14 @angular/platform-browser@~8.2.14 @angular/platform-browser-dynamic@~8.2.14 @angular/platform-server@~8.2.14 @angular/router@~8.2.14 @angular/upgrade@~8.2.14 @angular/animations@~8.2.14 rxjs@~6.5.4 core-js@~3.6.1 zone.js@~0.9.1`

   > `zone.js` is the change detection library

2. Install DEV packages (exact version): <br/>
   `yarn add --dev webpack@~4.41.5 webpack-dev-server@~3.10.1 webpack-merge@~4.2.2 html-webpack-plugin@~3.2.0 angular-router-loader@~0.8.5 angular2-template-loader@~0.6.2 awesome-typescript-loader@~5.2.1 html-loader@~0.5.5 raw-loader@~1.0.0 typescript@~3.5.3 del-cli@~3.0.0 webpack-cli@~3.3.10 @ngtools/webpack@~8.3.21 @types/core-js@~2.5.2 @types/node@~13.1.2 lite-server@~2.5.4`

   > `webpack-merge` allows us to merge webpack configurations <br/> 
   > `angular-router-loader` for loading lazily loaded routes <br/> 
   > `html-webpack-plugin` is used to copy the index.html file to the `dist` folder & automatically add the imports for the created bundle files <br/> 
   > `raw-loader` is used to load CSS and it is just loaded as is, because the browser understands CSS <br/>

## PROD Workflow

### tsconfig.aot.json

```
{
  "compilerOptions": {
    // Allow us to use tree shaking, which allows webpack to remove unused code
    "module": "es2015",
    ...
  },
  "angularCompilerOptions": { // Used by the Angular offline compiler
    "skipMetadataEmit": true
  }
}
```

### bs-config.js

Used for lite-server to host the production build
