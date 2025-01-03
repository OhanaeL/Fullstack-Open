const Main = (props) => {
  
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Total = (props) => {
  var total = 0;
  props.course.parts.forEach(element => {
    total += element.exercises
  });
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const Course = (props) => {
  return (
    <>
      {props.course.parts.map((element, index) => (
        <p key={index}>
          {element.name} {element.exercises}
        </p>
      ))}
    </>
  );
};


const App = () => {
  
  /*
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
  */

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
      <Main course={course}/>
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

export default App