![ESLint](https://github.com/NearByrds/NearBirds/actions/workflows/lint.yaml/badge.svg) ![Release](https://github.com/NearByrds/NearBirds/actions/workflows/release.yaml/badge.svg) ![Uptime Robot ratio (7 days)](https://img.shields.io/uptimerobot/ratio/7/m794023093-51785fc60023721fd4c2f7d3)

# NearBirds

Discover birds in your region and listen to their chirping. You can check our website [here](http://64.226.66.76).

## Features

- 🐥 Birds list
- 🏳️ List of countries
- ⏳ Page loader
- 🔀 Website navigation bar
- 🎧 Birds song
- 📱 Mobile version of website
- 🔎 Birds list page search

 More details about website features [here](https://docs.google.com/document/d/1Z5fMy3GKXVEUm8NAlcUJOqv7prlsKXJHYE4XdYm2gzk/edit?usp=sharing)

## Quality Assurance

These tools were used to ensure software quality and reliability of the web application

- [ESLint](https://eslint.org/) enforces code style and helps catching bugs early in development
- [Husky](https://typicode.github.io/husky/#/) installs Git hooks to run static checkers before each commit
- [Jest](https://jestjs.io/) to run unit tests
- [GitHub Actions](https://github.com/features/actions) to run CI pipelines on source code updates
- [UptimeRobot](https://uptimerobot.com/) to monitor application availability
- [Watchtower](https://containrrr.dev/watchtower/) for auto-deployment of the latest docker contaienr image
- [DigitalOcean Metrics Agent](https://docs.digitalocean.com/products/monitoring/quickstart/) to monitor resource usage and network load for the application.
- [Sentry](https://sentry.io/welcome/)

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

## Sentry Results

You can check the results of Sentry [here](./images/)

## License

The source code of this project is distributed under the terms of the MIT license.
