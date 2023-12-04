# :hospital: Hospital Visits - React Application

This is a React application that allows users to view and manage hospital visits. The application is built with TypeScript and follows strict typing rules. It uses functional components and leverages the power of Redux for state management.

## Demo

You can access the live demo of the application at [this link](https://salmon-hill-01767c303.4.azurestaticapps.net).

## Getting Started

To get started with the application, you need to set up your environment variables. Create a `.env` file in the root directory of the project and add the following:

`REACT_APP_API_BASE_URL=<Your API Base URL>`

Replace `<Your API Base URL>` with the actual base URL of your API.

Once you have set up your environment variables, you can install the dependencies and start the application using either npm or yarn:

`npm install`
`npm start`

or

`yarn install`
`yarn start`

The application will start and you can access it at http://localhost:3000.

## Tests

To run the tests, use the following command:
`npm test`
or
`yarn test`

The project uses Jest and React Testing Library for testing.
In this project, tests have been created only for the `SearchBar`` component. However, it is recommended to create tests for other components and hooks in a similar manner.

## CI/CD Pipelines

The project includes two CI/CD pipelines defined in GitHub Actions:

1. The first pipeline is responsible for building and deploying application to the static web app. It is triggered after every push to main. You can find the pipeline configuration in `.github/workflows/pipeline.yml`.

2. The second pipeline is responsible for deploying the infrastructure required for the application. It is triggered manually. You can find the pipeline configuration in `.github/workflows/pipeline-infrastructure.yml`.

## Project Architecture and Standards

The project follows a modular architecture with a clear separation of concerns. The main parts of the project are:

- `src/pages`: This directory contains the main pages of the application.
- `src/components`: This directory contains reusable components.
- `src/store`: This directory contains the Redux store and reducers.
- `src/api.ts`: This file contains the API calls.

The project uses TypeScript and enforces strict typing. It also follows the rule of having a maximum of 10 imports per file.

The project uses functional components and leverages the power of hooks for managing state and side effects. It also uses Redux for global state management.

The project uses SCSS for styling and follows a modular approach to CSS. Each component or page has its own SCSS file.
