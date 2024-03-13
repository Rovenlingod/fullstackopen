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
      <p>{props.part.name} {props.part.exercises}</p>
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
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]} />
      <Part part = {props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  var sum = 0;
  for (let i = 0; i < props.parts.length; i++) {
    sum += props.parts[i].exercises
  }
  return (
    <p>Number of exercises {sum}</p>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts = {[part1, part2, part3]}/>
      <Total parts = {[part1, part2, part3]}/>
    </div>
  )
}

export default App