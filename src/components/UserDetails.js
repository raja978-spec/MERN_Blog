import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../Loginstyle.css'
export default function UserDetails() {
    
  const [formData, setFormData] = useState({
    regno:'',
    name: '',
    collegeName: '',
    phoneNumber: '',
    departmentName:'',
    score:0,
    time:"0sec"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate=useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const Data=[formData.regno,formData.name,formData.collegeName,formData.departmentName,formData.phoneNumber,formData.score].join(',');
    axios.get('http://localhost:3001/data/'+Data)
    .then((res)=>console.log(res))
    .catch(err=>console.log(err))
    navigate(`/Home/${formData.regno}`)
};

  return (
    <>
      <div class="con">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <h2>student details</h2>      
                    <hr></hr>
                </div>
                <div class="form-group">
                    <label for="departmentname">Phone number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" required onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label for="regno">Registration Number</label>
                    <input type="text" id="regno" name="regno" required onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label for="collegename">College Name</label>
                    <input type="text" id="collegeName" name="collegeName" required onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label for="departmentname">Department Name</label>
                    <input type="text" id="departmentName" name="departmentName" required onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn">Login</button>
                </div>
            </form>
    </div>    
    </>
    
      );
}

