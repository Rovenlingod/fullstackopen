const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  // const rows = []
  // for (let i = 0; i < props.parts.length; i++) {
  //   rows.push(<p>{props.parts[i]} {props.exercises[i]}</p>)
  // }
  return (
    <>
      <Part part = {props.parts[0]} exercise = {props.exercises[0]}/>
      <Part part = {props.parts[1]} exercise = {props.exercises[1]}/>
      <Part part = {props.parts[2]} exercise = {props.exercises[2]}/>
    </>
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