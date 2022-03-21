import React, { useState } from 'react'
import style from './Input.module.css'

export const Input = ({addEmp}) => {
    const [empname,setEmpName]=useState("")
    const [empdept,setEmpDept]=useState("")
    const [empgender,setEmpGender]=useState("")
    const [emprole,setEmpRole]=useState("")
    const [empsalary,setEmpSalary]=useState("")
  return (
    <div className={style.input_div}>
        <input type="text" empname={empname} onChange={(e)=>{setEmpName(e.currentTarget.value)}} placeholder='Enter Name'/>
        <input type="text" empdept={empdept} onChange={(e)=>{setEmpDept(e.currentTarget.value)}} placeholder='Enter Department'/>
        <input type="text" empgender={empgender} onChange={(e)=>{setEmpGender(e.currentTarget.value)}} placeholder='Enter Gender'/>
        <input type="text" emprole={emprole} onChange={(e)=>{setEmpRole(e.currentTarget.value)}} placeholder='Enter Role'/>
        <input type="text" empsalary={empsalary} onChange={(e)=>{setEmpSalary(e.currentTarget.value)}} placeholder='Enter Salary'/>
        <button onClick={()=>{
        addEmp(empname,empdept,empgender,emprole,empsalary);
        setEmpName("");
        setEmpDept("");
        setEmpGender("");
        setEmpRole("");
        setEmpSalary("");
        }}>ADD EMPLOYEE</button>
    </div>
  )
}
