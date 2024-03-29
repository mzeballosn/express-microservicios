const express = require('express')

const app = express();


app.use('/',(req,res)=>{
    res.send('my app express with docker')
})

app.listen(3020,()=>{
    console.log('server listen port 3020')
})