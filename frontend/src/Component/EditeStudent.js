import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Component/EditeStudent.css'

function EditeStudent() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const navigate = useNavigate('');
    const { id } = useParams('');  

    useEffect(() => {
        // Fetch the student data by id and update the state
        axios.get(`http://localhost:8081/${id}`)
            .then(res => {
                const student = res.data[0]; 
                setName(student.Name);
                setEmail(student.Email);
            })
            .catch(err => console.log(err));
    }, [id]);

    function handleUpdate(event) {
        event.preventDefault();
        
        // Update URL
        axios.put(`http://localhost:8081/Update/${id}`, { Name, Email })
            .then(res => {
                alert("Update successful");  
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="d-flex m-5 vh-100 justify-content-center align-items-center img">
                <form className="w-50 h2 mt-5 bg-white rounded fom" onSubmit={handleUpdate}>
                    <h2 className='m-5'>EDIT NEW STUDENT</h2>
                    <div className="form-group m-5">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="Name" placeholder="Enter your name" value={Name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group m-5">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="Email" placeholder="Enter your email" value={Email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-info m-5" >UPDATE</button>
                </form>
            </div>
        </div>
    );
}

export default EditeStudent;
