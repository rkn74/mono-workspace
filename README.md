# MonoWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


If you plan to have multiple applications in the workspace, you can create an empty workspace by using the --no-create-application option:
ng new mono-workspace --no-create-application
inside mono-workspace:
ng g application host-app --routing
ng g application mfe-app --routing

installing webpack:
npm i webpack webpack-cli --save-dev

install module fedaration:
we need to define which project we need to add this module fedaration.
installing the module federation on host app with port 4200:-
ng add @angular-architects/module-federation -project host-app --port 4200
installing the module federation on mfe app with port 4300:-
ng add @angular-architects/module-federation --project mfe-app --port 4300

running app after adding module federation:
ng s host-app -o
ng s mfe-app -o

adding component:
ng g c home --project=host-app

Consumed MFE at HOST with Module Federation and Angular in Mono Workspace:



Module fedaration:

Module Fedaration is a new feature introduced in Web pack 5. It is used to create Micro front end(MFE) application.

1. Mono Repo:
Multiple projects or applications in a single repo.

Here we are sharing front end code to one server to other server this is called Micro front end. but we have both the application in same repo called Mono repo.
Ex:
one application will contain heder information(shell application) and run the port some 4300
the other application will host the header from MFE on 4200

2. Multi repo:
we have 2 repos or more than 2 repos. dependes on the strcture the no of shell applications and host applications
ex:
Repo 1 - shell application header code as MFE hosted at 4300. This header code will expose from this shell application.
Repo 2 - Host application hosted at 4200 port and i will consume this shell application(Header code)

The number of projects you will create inside the mono application it will use the same node modules. that is inside the project.
