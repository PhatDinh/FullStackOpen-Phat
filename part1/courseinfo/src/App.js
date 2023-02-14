import logo from './logo.svg';
import './App.css';


const Header =(props) =>{
  return (
    <div>
    </div>
  )
}



const Content =() =>{
  return (
    <div>
    </div>
  )
}

const Total =() =>{
  return (
    <div>
    </div>
  )
}





const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <div>
      <Header course={course} />
      <Content  />
      <Total/>
    </div>
    </div>
  )
}

export default App;
