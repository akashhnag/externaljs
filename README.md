# TestJs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### including external JS in Angular Project
1) Define the file in src/assets folder
2) Import in angular component as follows:
 e.g. import * as abc from "../../assets/test
3) "abc" is a temporary variable and can be anything. "test" is the name of the external javascript file.
4) Remember to export the fucntion defined in JS file as follows:
  e.g. export var a=function(){
  .
  .
  }

### include external jquery file in an angular project
1) npm install jquery
2) include the jquery globalle in angular.json or angular-cli.json depending on the version
 e.g scripts:["../node_modules/jquery/dist/jquery.min.js"]
3) import jquery library s follows:
 import * as $ from "jquery";
4) now the component is ready to execute jquery code
5) as the JS file declares the jQuery file in the "src/assets" folder
6) export the function by all means
7) import it in the angular project as follows:
 e,g, import * as abc from /../../assets/jquery"
8) call it using the varibale abc like abc.function_name() 
 
