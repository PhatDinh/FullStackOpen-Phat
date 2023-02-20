


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
  //const total=props.course[0].exercises + props.course[1].exercises + props.course[2].exercises
  const total=props.total
  return (
    <p>
      {`total of exercises ${total}`}
    </p>
  )
}


const Course =(props) =>{

  const course=props.course;

  const total= course.parts.reduce((s,p) => {
    return s+p.exercises
  },0)

  return <div>
    <Header course={course.name} />
    <Content course={course.parts} />
    <Total total={total}/>
  </div>
}




const App = () => {


  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  return (
    <Course course={course} />
  )
}

export default App;
