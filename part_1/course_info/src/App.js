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
    <>
      <Header   course={course.name} />
      <Content  parts={course.parts} />
      <Total    parts={course.parts} />
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
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </>
)

const Content = (props) => (
  <>
    <Part part={props.parts[0]}/>
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </>
)

const Part = (props) => (
  <>
    <p>{props.part.name} {props.part.exercises}</p>
  </>
)

export default App