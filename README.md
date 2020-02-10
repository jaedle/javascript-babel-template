# JavaScript Babel Template

## Target

Provide a template project using es2015 by transpiling with babel to use a cli/service application through nodejs.

## Tools

- transpiling: [babel](https://babeljs.io/)
- testing: [jest](https://jestjs.io/)
- formatting: [prettier](https://prettier.io/)
- linting: [eslint](https://eslint.org/)

## project layout

```txt
.dependabot/        configuration for dependabot (automatic dependecy updates)
.github/            github workflow configuration
bin/                contains executable
dist/               <temporary> distribution folder
src/                source-code and tests
.eslintrc.json      eslint configuration
.jest.config.json   jest configuration
babel.config.json   babel configuration
```

The `bin/` folder contains the single script `bin/cli.js` to start your application. It executes the method `default` exported by the file `src/main.js`

## Usage

### Install dependencies

- Install dependencies by using `npm ci`

### Testing

- Use `npm run test` to single run your tests
- Use `npm run test:watch` to use jest test watch feature

### Applying format

- Use `npm run format` to check if your source-code is formatted correctly
- Use `npm run test:fix` to format your source-code

### Linting

[eslint](https://eslint.org/) with [eslint-config-airbnb-base](https://github.com/airbnb/javascript) is used to to lint this project.

- Use `npm run lint` to check if your source-code is linted
- Use `npm run lint:fix` to lint your source-code

### Starting the app

- Use `npm run start` to start your application

### Do everything after another

- Use `npm run world` to test, lint, format and start
