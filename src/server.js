const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Listening on port ${port}`)); 
app.get('/http://localhost:8080/form', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 

