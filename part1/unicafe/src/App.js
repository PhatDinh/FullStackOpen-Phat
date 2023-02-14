import { useState } from 'react'



const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
}


const Statistics = (props) => {

  const good = props.good;
  const bad = props.bad;
  const neutral = props.neutral;
  const total = good+bad+neutral
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="total" value ={total} />
          <StatisticLine text="average" value ={(good-bad)/ total * 100} />
          <StatisticLine text="positive" value ={good/total*100} />
      </tbody>
      </table>
    </div>
  )
}


const Button = (props) =>{
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(prev=>prev+1)} text={'good'}/>
      <Button handleClick={() => setNeutral(prev=>prev+1)} text={'neutral'}/>
      <Button handleClick={() => setBad(prev=>prev+1)} text={'bad'}/>
      {
        (good!==0 || neutral!==0 || bad!==0) && <Statistics good={good} bad={bad} neutral={neutral}/>
      }
    </div>
  )
}

export default App

