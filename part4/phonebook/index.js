const express = require('express')
const morgan = require('morgan')

const app = express();

app.use(morgan('tiny'))

app.use(express.json())


let phones = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/api/persons',(req,res) => {
    res.json(phones)
})

app.get('/api/persons/:id',(req,res)=>{
  const id = req.params.id
  const phone = phones.find(person => person.id == id)
  if(phone)
  {
    res.json(phone)
  } else
  {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id',(req,res)=>{
  const id = req.params.id
  phones = phones.filter(person => person.id!=id)
  res.status(204).end()
})

app.get('/info',(req,res)=>{
  const requestTime = new Date(Date.now())
  res.send(`<div><p>Phonebook has info for ${phones.length} people</p><p>${requestTime}</p></div>`)
})


const generateId = () => {
  const id = Math.floor(Math.random() * 9999)
  return id
}


app.post('/api/persons',(req,res)=>{
  const body = req.body


//check if missing
  if (!body.name || !body.number)
  {
    let error 
    if (!body.name && !body.number) error ='Name and number are missing'
    else error = !body.name ? 'Name is missing' : 'Number is missing'
    return res.status(400).json({
      "error" : error
    })
  }

  //check if duplicate
  if (phones.find(person => person.name==body.name))
  {
    return res.status(400).json({
      "error" : "name must be unique"
    })
  }
  
  const person = {
    "id" : generateId(),
    "name" : body.name,
    "number" : body.number
  }

  phones = phones.concat(person)

  res.json(body)
})





const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT} `)
})

