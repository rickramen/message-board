const express = require("express");
const app = express();
const messagesRouter = require('./routes/messageRouter');

app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 
app.use('/', messagesRouter);
 

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
