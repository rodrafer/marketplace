# Marketplace

A public basic marketplace application meant to work as a test for Mercadolibre.

## Installation

First, clone or download this repository on your local machine.

Then, use the node package manager [npm](https://www.npmjs.com/) to install the neccesary packages for the application. 
To do so, execute the following command on both marketplace/marketplace-backend and marketplace/marketplace-frontend directories:

```bash
npm install
```

Afterwards, to start the app's server, go to the marketplace/marketplace-backend directory and execute the following command:

```bash
npm run serve
```

Then, to build the app in development mode, go to the marketplace/marketplace-frontend directory and execute the following command:

```bash
npm run start
```

Once the app has finished building, navigate to http://localhost:3000 to access the app.

## Usage

This app allows you to perform a basic search of items published for trading in Mercadolibre. Just type anything in the search bar and hit *Enter* or click the little lens icon to perform a search.

You will see 4 results for your search, which you can click to see further details about that item.

You can perform as many search as you want, and if you want to return to the Home page (the one that shows only the search bar) you can click on the Mercadolibre icon in the search bar.

## Built With

The following are the main technologies used to build this application:
### Backend
* [Node.js](https://nodejs.org/en/) - The JavaScript runtime on which the server is built 
* [Express.js](http://expressjs.com/) - Used to create a server for Node.js
### Frontend
* [React.js](https://reactjs.org/) - The web framework used to build the app's user interface
* [Webpack.js](https://webpack.js.org/) - Used to build the app
### Transpilation
* [Babeljs](https://babeljs.io/) - To transpile JavaScript ES6 syntax into browser syntax
### Linting
* [Eslint](https://eslint.org/) - To format the code

## Author

**Rodrigo Fernández**

## License
This project is licensed under the [ISC](https://opensource.org/licenses/ISC) License.
