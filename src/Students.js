import {React,useContext} from 'react'
import { Context } from './Context';
import"./Students.css";
import axios from 'axios';
const Students = () => {
const {formList, setFormList} = useContext(Context);

  return (
    <div>
        <ul>
      {formList.map((data, index) => (
        <li key={index}>
          <div className="val1">{data.jobid}</div>
          <div className="val2">{data.name} </div>
          <div className="val3">{data.address} </div>
          <div className="val4">{data.department} </div>
          <div className="val5">{data.salary}</div>
          <div className="val5">{data.joke}</div>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Students
