const express = require('express'),
  bodyParser = require('body-parser'),
  axios = require('axios');

const app = express();
app.use(bodyParser.json());

//handle incoming events
app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  //parse incoming event
  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved';
    console.log({ status });
    //emit event
    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log('Moderation: listening on 4003');
});
