const express = require('express');
const app = express();



app.get('/', (req, res) => {
  return res.send({
    "downloadLink":"https://www.dropbox.com/scl/fo/ufgiajxp1a591rkmieqij/h?rlkey=2zxj70opyjk7w4m53mi281voj&dl=0",
    "version":2,
});
});

app.listen(3000, () =>
  console.log(`Server listening on port 3000!`),
);
