
import express from 'express';

const app = express();

['get', 'put', 'post', 'delete'].forEach(verb => {
  
    app[verb]('/', function (req, res) {
      
    res.send(`I got a ${verb.toUpperCase()} request`);
      
    console.log(verb.toUpperCase());
    console.log(req.query);
  });
});

app.listen(process.env.PORT || 3000);