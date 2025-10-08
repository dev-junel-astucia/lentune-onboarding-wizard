# LentuneOnboardingWizard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

## Edge Cases

1. Persisting Data. When implementing process-flow-based form such as registration, wizard or request application that consist of multiple sections, rather than using a conventional routing style, it is better to implement a stepper to make the flow of form more guided and user friendly. But even though a stepper has advantage such as easy to use back and forth buttons; it still has its limitaions, one of it is it needed a concise documentation on how it works, and how to use and implement the custom component. Another thing is it needed a persistent data handler that will monitor all the process and where exactly is the current/active form.

### Solution

Which is why, even it's not part of the requirements, I added a state management that will handle the data of the steper. Which can easily access accross the module and component.

The local-storage-sync.ts although i haven't use the rehydration, it is now available incase needed to persist the data.

2. Complex Process Flow. As the application gets bigger, a typical bottle-neck that usually arise is how to make the stepper component handle changes while maintaining its simplicity, concise, and reusability.

### Solution

KISS, by simplifying the process, and not over engineering will makes the component easy to maintain.

3. Resource Handling. As the process becames bigger, resources such as images, icons, etc. can sometimes adds to load time.

### Solution

Invest on using CDN is an excellent soulution for improving load time. Images formats such as WebP for smaller sizes is also good (but I cant find some WebP on the internet while I'm deving this :D). Using responsive images that serves different image size is also great, especially if assets (let say on figma) are available.

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
