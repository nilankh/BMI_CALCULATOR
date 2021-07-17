const express = require('express')
const app = express()

// when we call express.json() method, this method returns a function, a middleware function, the job of this middleware function is to read the request, and if there is json object in the body of the request, it will parse the body of the request, into json object and then it will set to the req.body property.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// when we call express.urlencoded() method,this method return  a function a middleware function, this middleware function parses incoming request with urlencoded payloads, that is req with body like this key=value&key=value
var ans = []
const data = require('./data/data.json')
console.log('-----data Input----')
console.log(data)


var count = 0
// Traversing over data
for (const i of data) {
  
  var weight = i['WeightKg']
  var height = i['HeightCm'] / 100

 
  var bmi = weight / (height * height)
 
  var temp = []
  temp['bmi'] = bmi
  // calculate BMI category
  //   Calculate Health risk
  var g = ''
  var h = ''
  if (bmi < 18.5) {
    g = 'Underweight'
    h = 'Malnutrition risk'
  } else if (18.5 <= bmi && bmi <= 24.9) {
    g = 'Normal'
    h = 'low risk'
  } else if (25 <= bmi && bmi <= 29.9) {
    g = 'Overweight'
    h = 'Enhanced Risk'
    count += 1
  } else if (30 <= bmi && bmi <= 34.9) {
    g = 'Moderately obese'
    h = 'Medium Risk'
  } else if (35 <= bmi && bmi <= 39.9) {
    g = 'Severely obese'
    h = 'High risk'
  } else {
    g = 'Very severly obese'
    h = 'very high risk'
  }
  temp['Bmi Category'] = g
  temp['Health risk'] = h
  ans.push(temp)

  
}

console.log('Data output------')
console.log('ANS', ans)
console.log(`Count of total number of overweight people: ${count}`)

const port = process.env.PORT || 8000
app.listen(8000, () => {
  console.log(`App listening on port ${port}!`)
})
