import { useEffect, useState } from "react";
import axios from 'axios';
//Imprt Route
import { Outlet, Link } from "react-router-dom";

function Students() {
  const [student, setStudent] = useState(['']);
  //check errors
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/")
      .then(res => {
        console.log(res.data)
        setStudent(res.data);
   
      })
      .catch(err => {
        console.log(err);
        setError(err); // Set the error state
      });
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 h-75 mt-5 bg-white rounded">
        <Link to="/NewStudent">
          <button className="btn btn-success m-2"  >ADD STUDENT</button>
        </Link>

        {/*Check Student Arry Data is Empty Or Not*/}
        {student.length === 0 ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (



          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {student.map((data, i) => (
                <tr key={i}>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>
                    {/*Route the EditeStudent Page*/}
                    <Link to={`/Edit/${data.ID}`}>
                      <button className="btn btn-info">UPDATE</button>
                    </Link>
                  </td>

                  <td><button className="btn btn-danger">DELETE</button></td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Students;
