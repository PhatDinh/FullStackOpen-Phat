import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')


  const [founds,setFounds] = useState([])



  const addPerson = (event) =>{
    event.preventDefault();
    if (persons.find(person => person.name===newName))
    {
      alert(`${newName} is already added to phonebook`)
    }
    else
    {
      setPersons(prev=>{
        return [...prev,{'name' : newName,'number' : newNumber}]
      })
      setNewName('')
      setNewNumber('')
      event.target.reset();
    }
  }


  const handleFilter = (event) => {
    if (!event.target.value ) setFounds([])
    else setFounds(persons.filter(e => e.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter shown with <input onChange={handleFilter}/></div>
      {founds.map(e => <p key={e.id}>{e.name} {e.number}</p>)}
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input required  onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>number: <input required onChange={(e)=>setNewNumber(e.target.value)} /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(e => <p key={e.id}>{e.name} {e.number}</p>)}
    </div>
  )
}

export default App