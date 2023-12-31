const App = () => {

  const course = 'Half Stack application development'
  const parts = [ 
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

  return (
    <>
      <Header   course={course} />
      <Content  part1={parts[0].name} exercises1={parts[0].exercises}
                part2={parts[1].name} exercises2={parts[1].exercises}
                part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total    exercises1={parts[0].exercises}
                exercises2={parts[1].exercises}
                exercises3={parts[2].exercises} />
    </>
  )
  
}

const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

const Total = (props) => (
  <>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </>
)

const Content = (props) => (
  <>
    <Part part={props.part1} exercise={props.exercises1} />
    <Part part={props.part2} exercise={props.exercises2} />
    <Part part={props.part3} exercise={props.exercises3} />
  </>
)

const Part = (props) => (
  <>
    <p>{props.part} {props.exercise}</p>
  </>
)

export default App
