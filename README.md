# ![RealWorld Example App](logo.png)

> ### React + MST + Next.js codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.


### [Demo](https://github.com/gothinkster/realworld)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)


This codebase was created to demonstrate a fully fledged fullstack application built with **React + MST + Next.js** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **React** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.


# How it works
This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

All source files were moved to the src folder.

Routing in Next.js is based on the file system, so ./src/pages/index.js maps to the / route and ./src/pages/about.js would map to /about.

Mobx state tree implementation based on [MobX State Tree example](https://github.com/zeit/next.js/tree/master/examples/with-mobx-state-tree).

### Making requests to the backend API

For convenience, we have a live API server running at https://conduit.productionready.io/api for the application to make requests against. You can view [the API spec here](https://github.com/GoThinkster/productionready/blob/master/api) which contains all routes & responses for the server.

The source code for the backend server (available for Node, Rails and Django) can be found in the [main RealWorld repo](https://github.com/gothinkster/realworld).

If you want to change the API URL to a local server, simply edit `src/api/index.js` and change `axios.defaults.baseURL` to the local server's URL (i.e. `http://localhost:3000/api`)

# Getting started

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.
