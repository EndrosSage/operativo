const express = require('express');
const app = express();
//puerto
const port = 3000;

app.get('/', (req,res)=>{
    res.send('Hola mundo')
});

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
})
