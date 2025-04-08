import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://fluffy-lamp-vqjjpwv4prjcwrr6-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-header bg-info text-white">
        <h1 className="card-title">Teams</h1>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.id}</td>
                <td>{team.name}</td>
                <td>{team.members.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info mt-3">Create Team</button>
      </div>
    </div>
  );
}

export default Teams;
