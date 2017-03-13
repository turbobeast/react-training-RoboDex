require('babel-register')({
  extensions: ['.js'],
  presets: ['es2015', 'react-app'],
})

require('ignore-styles');

const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const { htmlTemplate } = require('./views/index.html');
const manifest = require('./build/asset-manifest.json');

const { StaticRouter, Route } = require('react-router');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { createElement } = require('react');

const store = require('./src/store').default;
const App = require('./src/Components/App/App').default;

app.use('*/static', express.static(path.join(__dirname, 'build', 'static')));
app.use((req, res) => {
  /*
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  */
  const renderedApp = renderToString(
    createElement(Provider, { store },
      createElement(StaticRouter, { location: req.url, context: {} },
        createElement(Route, { component: App })
      )
    )
  )
  const html = htmlTemplate({
    cssPath: manifest['main.css'],
    jsPath: manifest['main.js'],
    appHTML: renderedApp,
  })
  res.send(html);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})