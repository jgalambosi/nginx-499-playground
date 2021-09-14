const express = require('express');

const app = express();
app.get('/', (req, res) => {
  const timeout = Math.random() * 2000
  setTimeout(()=>{
	res.send({ok: true})
	}, timeout)
})

app.listen(5001, () => console.log('Server is up and running'));

