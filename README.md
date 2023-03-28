![CI](https://github.com/NearByrds/NearBirds/actions/workflows/ci.yaml/badge.svg)

# NearBirds

Discover birds in your region and listen to their chirping.

## Quality Assurance

These tools were used to ensure software quality and reliability of the web application

- [ESLint](https://eslint.org/) enforces code style and helps catching bugs early in development
- [Husky](https://typicode.github.io/husky/#/) installs Git hooks to run static checkers before each commit
- [Jest](https://jestjs.io/) to run unit tests
- [GitHub Actions](https://github.com/features/actions) to run CI pipelines on source code updates.

## Local development

```bash
npm install
npm run start
```

## Run in Docker

```bash
docker build -t nearbirds .
docker run -p3000:3000 nearbirds
```

## License

The source code of this project is distributed under the terms of the MIT license.
