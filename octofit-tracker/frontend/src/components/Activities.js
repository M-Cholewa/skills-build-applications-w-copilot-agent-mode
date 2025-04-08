import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://fluffy-lamp-vqjjpwv4prjcwrr6-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-header bg-success text-white">
        <h1 className="card-title">Activities</h1>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity.id}>
                <td>{activity.id}</td>
                <td>{activity.name}</td>
                <td>{activity.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3">Add Activity</button>
      </div>
    </div>
  );
}

export default Activities;
