## file structure
```
- app
-- client
--- index.js
--- app.jsx
-- public
--- index.html
--- bundle.js
-- server
--- db
---- db.js
---- seed.js
--- server.js
-- package.json
-- README.md

```

## npm
```
# express:
npm install --save express body-parser

# sequelize
npm install --save sequelize mysql2

# webpack
npm install --save-dev webpack webpack-cli

# babel
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

# react
npm install --save react react-dom
```

## express
boilerplate code
```
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/', function (req, res) {
  res.send('hi');
});

```

## react
```
/public/index.html

<!DOCTYPE html>
<html>
  <head>
    <title>Github Repo Fetcher</title>
  </head>
  <body>
    <div id="app">Hello World!</div>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>

/client/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```