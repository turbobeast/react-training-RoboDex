module.exports.htmlTemplate = ({ cssPath, jsPath, appHTML }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="shortcut icon" href="/react-training-RoboDex/favicon.ico">
    <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
    <title>React App</title>
    <link href="${cssPath}" rel="stylesheet">
  </head>
  <body>
    <div id="root">
    ${appHTML}
    </div>
    <script type="text/javascript" src="${jsPath}"></script>
  </body>
</html>`