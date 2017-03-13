const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const { htmlTemplate } = require('./views/index.html');
const manifest = require('./build/asset-manifest.json');

app.use('*/static', express.static(path.join(__dirname, 'build', 'static')));
app.use((req, res) => {
  const html = htmlTemplate({
    cssPath: manifest['main.css'],
    jsPath: manifest['main.js']
  })
  res.send(html);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})