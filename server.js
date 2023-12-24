const express = require('express');
const app = express();



app.get('/', (req, res) => {
  return res.send({
    "downloadLink":"https://www.google.com/",
    "version":2,
});
});

app.listen(3000, () =>
  console.log(`Server listening on port 3000!`),
);