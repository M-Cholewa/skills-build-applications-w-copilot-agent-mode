import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fluffy-lamp-vqjjpwv4prjcwrr6-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-header bg-warning text-dark">
        <h1 className="card-title">Users</h1>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-warning mt-3">Add User</button>
      </div>
    </div>
  );
}

export default Users;
