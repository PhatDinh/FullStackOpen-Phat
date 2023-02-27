const { useState } = require("react")

const Search = (props) => {


    const [founds,setFounds] = useState([])


    const handleFilter = (event) => {
        if (!event.target.value ) setFounds([])
        else setFounds(props.persons.filter(e => e.name.toLowerCase().includes(event.target.value.toLowerCase())))
      }
    return <div>
        <h2>Phonebook</h2>
      <div>Filter shown with <input onChange={handleFilter}/></div>
      {founds.map(e => <p key={e.id}>{e.name} {e.number}</p>)}
    </div>
}


export default Search