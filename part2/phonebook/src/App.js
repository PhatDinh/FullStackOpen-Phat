import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')


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



  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(e => <p key={e.name}>{e.name} {e.number}</p>)}
    </div>
  )
}

export default App