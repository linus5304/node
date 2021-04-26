const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send("My first app on aws")
})

app.listen(port, ()=>{
    console.log("connected")
});

