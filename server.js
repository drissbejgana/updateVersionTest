const express = require('express');
const app = express();



app.get('/', (req, res) => {
  return res.send({
    "downloadLink":"https://drive.google.com/file/d/1-C8_uP2OsplP3IvMcSIUFsML0T33ni7Z/view?usp=drive_link",
    "version":2,
});
});

app.listen(3000, () =>
  console.log(`Server listening on port 3000!`),
);
