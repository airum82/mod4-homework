const express = require('express');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('DateTime:', new Date(Date.now()).toString());
  next();
};

app.get('/json', (request, response) => {
  response.status(200).json({ "name": "Robbie" });
});

app.get('/sunsets', (request, response) => {
  response.status(200).send('<img src="sundown.jpg">')
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.use((request, response, next) =>
  response.status(404).send("Sorry can't find that!")
)

