const express = require('express')
const app = express()
const port = 3000


const arr = [
    {
        "id":1,
        "name":"sumit",
        "college":"Bennett University"
    },
    {
        "id":1,
        "name":"Siddharth",
        "college":"xyz University"
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data' , (req,res) =>{
    res.send(arr)
})

app.post('/data' , (req,res)=>{
    const data = req.body;
    arr.push(data);
    res.status(200).send("successful")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})