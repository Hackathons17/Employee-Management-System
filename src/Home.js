import {React,useContext} from 'react'
import { useState, useEffect } from "react";
import "./Home.css"
import axios from 'axios';
import { Context } from './Context';

import { useNavigate } from "react-router-dom";
const Home = () => {
    const [formData, setFormData] = useState({ 
        jobid: "",
        name: "",
        address: "",
        department:"",
        salary:"",
        joke:""
     });
   
  const {formList, setFormList} = useContext(Context);
  const navigate =useNavigate();
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setFormList(storedData);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.get(`https://icanhazdadjoke.com/`
      )
      .then(result=>{
           
            if(result.status==="200"){
                console.log(" successfull");
                setFormData({...formData,[formData.joke]:result.joke});
                
            }
            else{
                console.log(" unsuccessfull : eroor 404");
              
            }
          }
      )
            .catch((error) => {
              if (error.response) {
                  alert(error.response.status)
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                }
          });
    setFormList([...formList, formData]);
    setFormData({jobid:"", name: "",address:"", department: "",salary:"" });
   
  };
  const handleClick2=()=>{
    navigate("/Students")
  }

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formList));
  }, [formList]);

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        name="jobid"
        value={formData.jobid}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
      />
      <input
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
      />
      <button type="submit" >Submit</button>

      <button type="button" onClick={handleClick2} >View students</button>
      
    </form>
    

  </div>
  
  )
}

export default Home
