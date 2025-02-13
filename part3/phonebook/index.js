import express from 'express'
import morgan from 'morgan'

const app = express()


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.use(express.json())

let phonenumbers = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

const generateId = () => {
  let randomNum = Math.random() * 1000;
  return String(Math.floor(randomNum))
}

morgan.token('data', function logPost (req) {
  if (req.method === "POST"){
    return  JSON.stringify(req.body)
  }
  return ""
})

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  const d = new Date();
  let time = d.toUTCString();;
  response.send(`<span>Phonebook has info for ${phonenumbers.length} people</span> <br/> ${time}`)
})

app.get('/api/persons', (request, response) => {
  response.json(phonenumbers)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = phonenumbers.find(person => person.id === id)
  response.json(person)
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  
  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }
  if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }  
  
  const existingPerson = phonenumbers.find(person => person.name === body.name)
  if (existingPerson) {
    return response.status(400).json({ 
      error: 'name already exists' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  phonenumbers = phonenumbers.concat(person)

  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  phonenumbers = phonenumbers.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})