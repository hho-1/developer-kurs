const express = require('express');
const app = express();


app.use((req, res, next) => {
  console.log('This is first middleware.');
  next(); // Call the next middleware function in the chain
});

app.get('/', (req, res) => {
  res.send('Hello Backend');
});


const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});