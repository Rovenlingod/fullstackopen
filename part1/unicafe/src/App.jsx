import { useState } from 'react'

const Button = (props) => {
  return (
      <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.statistics.good}</p>
      <p>neutral {props.statistics.neutral}</p>
      <p>bad {props.statistics.bad}</p>
      <p>all {props.statistics.all}</p>
      <p>average {props.statistics.avg}</p>
      <p>positive {props.statistics.positive}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const avg = (good - bad) / all
  const positive = good / all * 100
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    avg: avg,
    positive: positive
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <p>good {good}</p>
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App