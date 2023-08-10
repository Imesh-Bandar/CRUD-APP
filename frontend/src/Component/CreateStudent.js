import { useState } from 'react'
import '../Component/CreateStudent.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateStudent() {

    //Store Data 
    const [Name, setName] = useState();
    const [Email, SetEmail] = useState();

    //Usernavigate Home Page
    const navigate = useNavigate()
    //Submit Function
    function handleSubmit(event) {

        event.preventDefault();
        //Api Link with Name and EMail
        axios.post('http://localhost:8081/Create', { Name, Email })
            .then(res => {
                console.log("data", res);
                //Navigte  Home Page 
                navigate('/')
            })
            .catch(
                err => console.error(err),
            )

    }
    return <>
        <div>
            <div className="d-flex m-5 vh-100   justify-content-center align-items-center img">

                <form className="w-50 h2  mt-5 bg-white rounded fom" onSubmit={handleSubmit}>
                    <h2 className='m-5 '>ADD NEW STUDENT</h2>
                    <div class="form-group  m-5">
                        <label for="inputName">Name</label>

                        <input type="text" className="form-control" id="Name" placeholder="Enter your name" onChange={e => setName(e.target.value)}></input>
                    </div><div class="form-group m-5">
                        <label for="inputName">Email</label>
                        <input type="email" className="form-control" id="Email" placeholder="Enter your name" onChange={e => SetEmail(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-info m-5">Submit</button>
                </form>
            </div>
        </div>
    </>
}

export default CreateStudent