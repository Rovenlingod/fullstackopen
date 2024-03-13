const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  const rows = []
  for (let i = 0; i < props.parts.length; i++) {
    rows.push(<p>{props.parts[i]} {props.exercises[i]}</p>)
  }
  return (
    <>{rows}</>
  )
}

const Total = (props) => {
  var sum = 0;
  for (let i = 0; i < props.exercises.length; i++) {
    sum += props.exercises[i]
  }
  return (
    <p>Number of exercises {sum}</p>
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
      <Header course={course}/>
      <Content parts = {[part1, part2, part3]} exercises = {[exercises1, exercises2, exercises3]}/>
      <Total exercises = {[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App