const Course = ({ courses }) => {
    return (
      <div>
        {courses.map((course) => {
          const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
          return (
            <div key={course.id}>
              <h2>{course.name}</h2>
              {course.parts.map((part) => (
                <div key={part.id}>
                  <span>{part.name} {part.exercises}</span> <br />
                </div>
              ))}
              <strong>Total exercises: {total}</strong>
            </div>
          );
        })}
      </div>
    );
  };

  export default Course;