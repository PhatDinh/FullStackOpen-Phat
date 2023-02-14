


const Header =(props) =>{
  return (
    <div>
      {props.course}
    </div>
  )
}

const Part = (props) => {

  const name = props.part.name
  const exercises = props.part.exercises

  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}


const Content =(props) =>{
  return (
    <div>
      <Part part={props.course[0]} />
      <Part part={props.course[1]}/>
      <Part part={props.course[2]}/>
    </div>
  )
}



const Total =(props) =>{
  const total=props.course[0].exercises + props.course[1].exercises + props.course[2].exercises
  return (
    <div>
      {`Number of exercises ${total}`}
    </div>
  )
}





const App = () => {


  const course = {
    'name' : 'Half Stack application development',
    'parts' : [
      {
        'name' : 'Fundamentals of React',
        'exercises' : 10
      },
      {
        'name' : 'Using props to pass data',
        'exercises' : 7
      },
      {
        'name' : 'State of a component',
        'exercises' : 14
      },
    ],
  }
  
  return (
    <div>
      <div>
      <Header course={course.name} />
      <Content course={course.parts} />
      <Total course={course.parts} />
    </div>
    </div>
  )
}

export default App;
