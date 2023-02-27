import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addPerson = (event) =>{
    event.preventDefault();
    setPersons(prev=>{
      return [...prev,{'name' : newName}]
    })
    setNewName('')
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(e => <p key={e.name}>{e.name}</p>)}
    </div>
  )
}

export default App