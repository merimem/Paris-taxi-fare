const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors())

const rides = [
    {
    "id": 1,
    "distance": 2,
    "startTime": "2020-06-19T13:01:17.031Z",
    "duration": 9000
    },
    {
    "id": 2,
    "distance": 1,
    "startTime": "2020-06-19T12:01:17.031Z",
    "duration": 6000
    },
    {
    "id": 3,
    "distance": 5,
    "startTime": "2020-06-19T14:01:17.031Z",
    "duration": 7000
    },
    {
    "id": 4,
    "distance": 5,
    "startTime": "2020-06-19T14:11:17.031Z",
    "duration": 4000
    }
]

app.get('/rides', (req,res) =>{
    res.send(rides) 
});

app.get('/price/:id', (req, res) =>{
    const {id} = req.params;
    const ride = rides.filter(ride => {return ride.id == id})
    if (ride.length !=0){
        let price = 1 + (ride[0].distance/(1/5)) * 0.5        
        let date = new Date(ride[0].startTime)
        let x = ride[0].startTime.split("T")
        let h = x[1].split(":")
        let hour = h[0]
        console.log("hour: ", hour)
        if (hour>=0 && hour <=6 || hour>=20 && hour <=23)
            price+=0.5
        if(hour >=16 && hour<= 19)
            price +=1
        console.log("price: ",price)
        res.status(200).send(price.toString())        
    }
    res.send(0)
});

app.listen(4000, ()=>{
    console.log("listening at port 4000")
})