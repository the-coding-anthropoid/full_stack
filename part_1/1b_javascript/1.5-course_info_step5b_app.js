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
      <Header   data={course} />
      <Content  data={course} />
      <Total    data={course} />
    </>
  )
  
}

const Header = (props) => (
  <>
    <h1>{props.data.name}</h1>
  </>
)

const Total = (props) => (
  <>
    <p>Number of exercises {props.data.parts[0].exercises + props.data.parts[1].exercises + props.data.parts[2].exercises}</p>
  </>
)

const Content = (props) => (
  <>
    <Part part={props.data.parts[0]}/>
    <Part part={props.data.parts[1]} />
    <Part part={props.data.parts[2]} />
  </>
)

const Part = (props) => (
  <>
    <p>{props.part.name} {props.part.exercises}</p>
  </>
)

export default App
