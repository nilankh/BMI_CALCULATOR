const express = require('express')
const app = express()

// when we call express.json() method, this method returns a function, a middleware function, the job of this middleware function is to read the request, and if there is json object in the body of the request, it will parse the body of the request, into json object and then it will set to the req.body property.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// when we call express.urlencoded() method,this method return  a function a middleware function, this middleware function parses incoming request with urlencoded payloads, that is req with body like this key=value&key=value
var ans = []
const data = require('./data/data.json')
console.log("-----data Input----")
console.log(data)

for (const i of data) {
    var weight = i["WeightKg"]
    var height = i["HeightCm"]/100
    
    // console.log(typeof(weight))
    // console.log(typeof(height))
    var bmi = weight / (height * height)
    var temp = {}
    temp["bmi"]= bmi
    // calculate health risk

    // temp["Health"]    
    ans.push(temp)  
    // console.log(i["HeightCm"])
}
console.log("Data output------")
console.log(ans)

app.get('/bmicalculator', (req, res) => {
  return res.sendFile(__dirname + '/bmi.html')
})
app.post('/bmicalculator', (req, res) =>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height)
    res.send("BMI IS :" +bmi);
})
const port = process.env.PORT || 8000
app.listen(8000, () => {
  console.log(`App listening on port ${port}!`)
})
