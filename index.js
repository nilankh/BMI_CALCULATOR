const express = require('express');
const app = express()

app.get('/', (req, res) => {
  return res.json({ hello: 'world!!' })
})

const port = process.env.PORT || 8000
app.listen(8000, () => {
    console.log(`App listening on port ${port}!`);
});