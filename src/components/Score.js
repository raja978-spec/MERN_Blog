import { useEffect, useState } from "react";
import axios from "axios";
import './score.css'

export default function Score() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/score')
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
  
    <div className='cont'>
    <h1 className="header">Qutrix Registration Details</h1>
    <table className="data-table">
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>Deparment</th>
          <th>College name</th>
          <th>Phone no</th>
          <th>Score</th>
          <th>Time</th>
           </tr>
      </thead>
      <tbody>
      {
        data.map((item)=>{
        
        return(
          <tr >
                <td>{item.regno}</td>
                <td>{item.name}</td>
                <td>{item.departmentname}</td>
                <td>{item.collegename}</td>
                <td>{item.phoneno}</td>
                <td>{item.score}</td>
                <td>{item.time}</td>
              </tr>
        )}
      )}  
      
      </tbody>
    </table>
  </div>
  


  );
}

