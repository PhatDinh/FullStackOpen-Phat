





const Number =(props) => {
    return (
        <div>
            <h2>Numbers</h2>
            {props.persons.map(e => <p key={e.id}>{e.name} {e.number}</p>)}
        </div>
    )
}

export default Number