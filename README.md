# Multiplica angularjs boilerplate

[![Dependency Status](https://david-dm.org/MutliplicaDevLabs/angularjs-boilerplate/status.svg)](https://david-dm.org/MutliplicaDevLabs/angularjs-boilerplate#info=dependencies) [![devDependency Status](https://david-dm.org/MutliplicaDevLabs/angularjs-boilerplate/dev-status.svg)](https://david-dm.org/MutliplicaDevLabs/angularjs-boilerplate#info=devDependencies)

A complete, yet simple, starter for AngularJS using Webpack.

This workflow serves as a starting point for building AngularJS (1.x) applications using Webpack 4.x. 

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just yarn scripts.

>Warning: Make sure you're using the latest version of Node.js and Yarn

### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/preboot/angularjs-webpack.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with yarn
$ yarn

# start the server
$ yarn start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)    
    * [Developing](#developing)
    * [Testing](#testing)
    * [Releasing](#releasing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `yarn` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and Yarn (`1.3.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `yarn` to install all dependencies

## Developing

### Start dev server

* single run: `yarn run build`
* open `http://localhost:8080`

## Testing

#### 1. Unit Tests

* single run: `yarn test`
* live mode (TDD style): `yarn run test-watch`

## Releasing

### Build files
* build files `yarn run build`

# License

[MIT](/LICENSE)
