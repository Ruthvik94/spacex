This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A working demo of this app can be found at [Heroku Spacex](https://spacex94.herokuapp.com/).

## modules used

Redux for state management
React-router-dom for url parameters

express for server side rendering

## css

css grid to position the items.
media query to adapt to different screen sizes.
react-bootstrap for card.
bootstrap to style.

## Approch used

1.  Functional components with component composition.
2.  useEffect hook to control rendering of children.
3.  Redux for state management, i.e @redux/toolkit, using reduxAsyncThunk for asynchronous calls.
4.  react-router-dom i.e browserRouter to handle different url params based on year, launch and landing filter selection.
5.  node express server, serving static build files and hosted by default on port 5500.
6.  css grid to align items based on fr.
7.  media queries to restrict the number of items in the grid column.
8.  Created Heroku pipeline and hosted the app on heroku.
9.  Achieved a high lighthouse score for both desktop and mobile.
10. Fully responsible on device platforms i.e tablet, mobile and desktop.

[Light House Score for desktop](/public/Lighthouse_desktop.PNG?raw=true "Light House Desktop").
[Light House Score for mobile](/public/Lighthouse_mobile.PNG?raw=true "Light House Mobile").

## Available Scripts

In the project directory, you can run:

### 'npm run start'

serves the project hosted on a node server

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
