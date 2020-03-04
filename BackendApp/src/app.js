const express = require('express');
const app = express();
const IssuesRouter = require('../routes/IssuesRouter');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Issue Routes
app.use('/issues',IssuesRouter);

app.use('/test', (req, res) => {
    res.send("Test route");
  });
  

app.use('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});


app.listen(app.get('port'),()=>{
  console.log(`Start server on port: ${app.get('port')}`)
})