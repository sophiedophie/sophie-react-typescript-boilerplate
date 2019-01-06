# React-Typescript boilerplate
[create-react-app](https://github.com/facebook/create-react-app) is perfect start point to build react app, but we don't know what's going on behind the neat technology. So this boilerplate is aiming to use minimal dependencies and packages installed, that even beginner can understand how it works.

## Features
- Support Typescript, SCSS, and Test using Jest & Enzyme

## How to start
```
npm i
npm run build
npm run start

// for development
npm run dev
```

## Structure
```
.
|+-- __mocks__
|+-- config
|+-- src
|    +-- client
|    +-- server
|+-- ...and other setting files
```

## Test Environment
- Jest and Enzyme is installed for this boilerplate.
- There are sample test codes in ```./src/client``` or ```./src/server```

## TODO
- When you want to grow your app then you might need...
  - [redux](https://redux.js.org/) and relative modules,
  - [react-router](https://github.com/ReactTraining/react-router) and other stuffs. Feel free to add when you need them.

## Credits
- [How to build your own React boilerplate](https://github.com/facebook/create-react-app): Started from this article for the base settings