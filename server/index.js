const app = require('./config.js');

const port = (process.env.PORT || 3001);

app.listen(port, function ()  {
  console.log(`Listening on Port ${port}`);
});
