
import express from 'express';

const app = express();

['get', 'put', 'post', 'delete'].forEach(verb => {
  
    app[verb]('/', function (req, res) {
    
    const delayMin = isFinite(parseInt(req.query?.min_delay)) ?
      parseInt(req.query?.min_delay) : 1000;
    const delayRange = isFinite(parseInt(req.query?.delay_range)) ?
      parseInt(req.query?.delay_range) : 0;
    const delay = delayMin + Math.floor(Math.random() * delayRange);
    const canFail = req.query.hasOwnProperty('can_fail');
    const success = canFail ? Math.random() >= 0.5 : true;
    const code = success ? 200 : 404;  

    setTimeout(() => {
      if (!success)
        res.status(code).end();
      else
        res.status(code).json({verb, delay, code});

    }, delay);
      
    console.log(`${verb.toUpperCase()}: delayed by ${delay} ms (returned HTTP ${code})`);
    console.log({delayMin, delayRange, delay, canFail, success, code});
  });
});

app.listen(process.env.PORT || 3000);