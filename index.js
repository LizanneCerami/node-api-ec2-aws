import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const dogs = [
  {
  name: 'Paco',
  breed: 'Chihuahua',
  age: 6,
},
  {
  name: 'Bubba',
  breed: 'Labrador',
  age: 10,
},
  {
  name: 'Lucia',
  breed: 'Yorkie',
  age: 3,
},
  {
  name: 'Bob',
  breed: 'Pitbull',
  age: 11,
},
]

app.get('/',(req, res) => res.send(dogs))

app.listen(4000, () => console.log('API running 😎 on port 4000'))
