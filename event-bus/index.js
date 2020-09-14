const express = require('express'),
  bodyParser = require('body-parser'),
  axios = require('axios');

const app = express();
app.use(bodyParser.json());

//when a POST request arrives, broadcast event to all microservices
//by making POST requests with payload = event
app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);
  axios.post('http://localhost:4003/events', event);

  res.send({ status: 'ok' });
});

app.listen(4005, () => {
  console.log('Event-bus: listening on 4005');
});
