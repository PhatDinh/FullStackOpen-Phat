const { useState } = require("react")


const Form = (props) =>{

    const [newName, setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')

    const addPerson = (event) =>{
        event.preventDefault();
        if (props.persons.find(person => person.name===newName))
        {
          alert(`${newName} is already added to phonebook`)
        }
        else
        {
          props.setPersons(prev=>{
            return [...prev,{'name' : newName,'number' : newNumber ,'id': prev.length+1  }]
          })
          setNewName('')
          setNewNumber('')
          event.target.reset();
        }
      }



    return (
        <div>
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
        </div>
    )
}

export default Form