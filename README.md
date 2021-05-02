# Application Web

This project is to help doing basic setup of Angular Applications.

## Functionality of the Application

 This application loads a basic page with Header, Footer and left pane. 
 Below are the common components avaiable as part of this application

1. ErrorHandlerInterceptor - To handle all the error in http response 
2. ApiPrefixInterceptor - To handle the api call for the application using the designated server url 
3. HttpRequestService - To handle all the http request using a common service (helps us decoupling business logic from Data access)
4. logger service - To handle logging using common logic for the whole code.
5. until-destroyed - RxJS operator that unsubscribe from observables on destory
6. RouteReusableStrategy - A route strategy allowing for explicit route reuse.
7. loader - A common loader for whole application

## Development and Building at local

This is an Angular application, and built using Angular CLI. Below are the required dependencies for development

1. Node JS version > 12
2. Angular CLI , you can install it by running npm install -g @angular/cli
3. Stryker for Mutation Testing, you can install it by running npm install -g stryker-cli
4. JSCPD for duplicate block check, you can install it by running npm install -g jscpd
6. Documentation for the application, you can install it by running npm install -g @compodoc/compodoc

Post installing all the required dependencies listed above. You need to install node module dependencies by running the command npm install from root folder.
Once done to run the application you have to run ng serve for a dev server and watch for your changes in your favorite IDE. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

To Run unit tests use ng test command it automatically watches changes for source code
To Run unit tests with coverage ng test --code-coverage command it automatically watches changes for source code
To Run unit tests with out watch and progression ng test --watch false
To Run unit tests with coverage with out watch and progression ng test --code-coverage --watch false

## Running Static Analysis

To run all lint use ng lint command
To run duplicate check use  jscpd src --min-tokens=45 command

## Running Mutation Testing

To perform mutation analysis using Stryker
Use stryker run command from the root of the project

## Documentation

Compodoc is used for detail documentation for the application.
To generate documentation npm run documentation 
To generate minimal documetation npm run documentationminimal

## Running end-to-end tests

Due to time constraints E2E tests are not yet complete but it is configured. So please feel free to contribute to it.
To Run ng e2e to execute the end-to-end tests via Protractor.
