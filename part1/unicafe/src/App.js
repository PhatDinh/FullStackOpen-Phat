import { useState } from 'react'




const Statistics = (props) => {

  const good = props.good;
  const bad = props.bad;
  const neutral = props.neutral;
  const total = good+bad+neutral
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good-bad)/ total * 100 }</p>
      <p>positive {good/total*100}</p>
    </div>
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
      <button onClick={ () => setGood(prev=>prev+1)}>good</button>
      <button onClick={ () => setNeutral(prev=>prev+1)}>neutral</button>
      <button onClick={() =>setBad(prev=>prev+1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App

