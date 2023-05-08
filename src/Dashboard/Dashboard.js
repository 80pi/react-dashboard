import React,{ useEffect, useState }  from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";
import {setData} from './DashboardSlice';





const Dashboard=()=>{
    const [dataFromApi,setApiData]=useState(null)
    const dispatch = useDispatch();    
       
    const getCustomersData = async() => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setApiData(data)
        dispatch(setData(data))
    }

    useEffect(()=>{
        getCustomersData();
        },[]) // eslint-disable-line react-hooks/exhaustive-deps
        

    return(
        
        <div className="App">
        <h2>Dashboard</h2>
      <tbody>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>phone</th>
        </tr>
        {dataFromApi&&dataFromApi?.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </div>
        
    )

}

export default Dashboard