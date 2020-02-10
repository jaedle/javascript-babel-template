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
bin/        contains executable
dist/       <temporary> build folder
src/        source-code,tests
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

- Use `npm run lint` to check if your source-code is linted
- Use `npm run lint:fix` to lint your source-code

### Starting the app

- Use `npm run start` to start your application
