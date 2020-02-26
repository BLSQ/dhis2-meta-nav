
## Wut?

This is an attempt to use [Tailwind UI](http://tailwindui.com), a set of UI components by the authors of [Tailwind CSS](http://tailwindcss.com) people.

The library is free but the components are not, I've a licence so you can browse them [here](https://bluesquare.1password.com/vaults/dnrtxul33sdl2cybttuxvv3g7a/allitems/ahag75vzk4a5kuslhv2gikl2r4/) - this comes with a licence so don't put that in a public repo!

I've played a bit with the config so that we can use the tailwind components here in React (using PostCSS and some other stuff).

Main experience is to see how easy/complex it is to use them inside react (Tailwind UI components are "just HTML with classes") - mostly, copy/paste, replace ´class´ with ´className´ and remove AlpineJS tags (anything inside an element that starts with @) -> done.

I've made some test at extracting components, and getting props instead of fixed value, and this seems to work well - have a look at Layout for this.

### Why?

I like component library as they are a good way to 

* Win time on development
* Have a default (good) level for everything

The polish seems to be good here and while this is not material UI (ie: look is a bit different) it's not widely different either. With the team being skewed toward backend, this could be a good way to help deploy good quality front ends.

### What now?

I'd like to test this on a single project, unrelated to our current products. Good thing is I've one nearyby (small DHIS2 app for Morocco) that could fit the bill. If the experience is positive, we can see for others.

## CRA stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
