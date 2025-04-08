import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://fluffy-lamp-vqjjpwv4prjcwrr6-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-header bg-danger text-white">
        <h1 className="card-title">Workouts</h1>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(workout => (
              <tr key={workout.id}>
                <td>{workout.id}</td>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-danger mt-3">Add Workout</button>
      </div>
    </div>
  );
}

export default Workouts;
