const app = require('./app.js');
const port = 3005

app.listen(3005, () => {
  console.log(`proxy server listening at http://localhost:${port}`);
});
