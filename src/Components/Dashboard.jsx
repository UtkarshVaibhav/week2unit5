import React, { useEffect, useState } from 'react'
import { Button } from './Button';
import { Input } from './Input'
import { Output } from './Output';

export const Dashboard = () => {
    const [list,setList]=useState([]);
    const addEmp=(name,dept,gender,role,salary)=>{
        if(name!==''&&dept!==''&&gender!==''&&role!==''&&salary!=='')
        {
            const payload={
                name,
                dept,
                gender,
                role,
                salary
            }
            const payloadjson=JSON.stringify(payload);
            fetch('http://localhost:3000/data',{
                method:"POST",
                body: payloadjson,
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(()=>{getEmpList()})
        }
    }
    useEffect(()=>{getEmpList()},[]);
    const getEmpList=()=>{
        fetch("http://localhost:3000/data")
        .then((res)=>res.json())
        .then((res)=>setList(res))
        .catch((err)=>{console.log(err)})
    }
    const showAll=()=>{
        fetch("http://localhost:3000/data")
        .then((res)=>res.json())
        .then((res)=>setList(res))
        .catch((err)=>{console.log(err)})
    }
    const showSpecificData=(label)=>{
        fetch("http://localhost:3000/data")
        .then((res)=>res.json())
        .then((res)=>{
            const updatedList = res.filter((emp)=>emp.dept===label);
            setList(updatedList);
        })
    }
    const asc=()=>{
        fetch("http://localhost:3000/data")
        .then((res)=>res.json())
        .then((res)=>{
            const updatedList = res.sort((a,b)=>(+a.salary)-(+b.salary));
            setList(updatedList);
        })
    }
    const dec=()=>{
        fetch("http://localhost:3000/data")
        .then((res)=>res.json())
        .then((res)=>{
            const updatedList = res.sort((a,b)=>(+b.salary)-(+a.salary));
            setList(updatedList);
        })
    }
  return (
    <div>
        <Input addEmp={addEmp}/>
        <hr />
        <Button showSpecificData={showSpecificData} showAll={showAll} asc={asc} dec={dec}/>
        <hr />
        <Output list={list}/>
    </div>
  )
}
