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
  const rows = []
  for (let i = 0; i < props.parts.length; i++) {
    rows.push(<Part part = {props.parts[i]} />)
  }
  return (
    <>
      {rows}
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App