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

const createStore = require('./src/store').default;
const App = require('./src/Components/App/App').default;

function bootstrap (location, store) {
  /*
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  */
  const entryPoint = 
    createElement(Provider, { store },
      createElement(StaticRouter, { location, context: {} },
        createElement(Route, { component: App })
      )
    );

  return renderToString(entryPoint);
}

function handleSSRRequest (req, res) {
  const store = createStore();
  const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    if (!state.robotData.isPending) {
      unsubscribe();
      const appHTML = bootstrap(req.url, store);
      const html = htmlTemplate({
        cssPath: manifest['main.css'],
        jsPath: manifest['main.js'],
        appHTML,
        state,
      });
      res.send(html);
    }
  })

  bootstrap(req.url, store);
  store.dispatch({ type: 'INIT_SSR' });
}

app.use('*/static', express.static(path.join(__dirname, 'build', 'static')));
app.use(handleSSRRequest);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
});