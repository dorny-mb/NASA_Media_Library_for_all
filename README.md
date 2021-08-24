# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

### Front-End Test (NASA Media Library)

NASA has revealed a public API for the image collection. We would like to explore the content
using the client side application.
API docs: https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
Requirements:

- Create a React single page application (it’s ok to use CRA).
- The application should consist of 2 pages: search and show (requirements below).
- Make sure the application is usable on mobile devices as well.
- Provide basic tests for your code.
- Feel free to style your application as you like.
- You can use any libraries you like.
  Search page requirements:
- The page must allow users to search the NASA Media Library.
- The search process must use the /search endpoint (API docs).
- The page should contain the required query input and 2 optional input filters: year start
  and year end.
- The input data should have basic validations compliant with the API specification.
- There should be a search button that starts the search process.
- The search results should appear below the search section (inputs).
- Each search result item should include a thumbnail, title, location, and photographer's
  name.
- The search result item should link to the show page - the more detailed page of a
  specific search result item.
- Only search image collections (media_type=image).
  Show page requirements:
- The page should contain the details of the collection: title, location, photographer's
  name, description, keywords, date, and images from the collection.
- Choose unique images from the collection, regardless of version. Most collections only
  have one image. Decide which version suits your preferences.
- There should be a back button that takes you back to the search results page.
