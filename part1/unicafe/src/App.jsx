import { useState } from 'react'

const Button = (props) => {
  return (
      <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {
  const good = props.statistics.good
  const neutral = props.statistics.neutral
  const bad = props.statistics.bad
  const all = good + neutral + bad

  if (all == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    const avg = (good - bad) / all
    const positive = good / all * 100

    return (
      <table>
        <StatisticLine text = "good" value = {good}/>
        <StatisticLine text = "neutral" value = {neutral}/>
        <StatisticLine text = "bad" value = {bad}/>
        <StatisticLine text = "all" value = {all}/>
        <StatisticLine text = "average" value = {avg}/>
        <StatisticLine text = "positive" value = {positive + '%'}/>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App