import React from 'react'
import style from './Output.module.css'
export const Output = ({list}) => {
  return (
    <div>
        {
            list.map((emp)=>{
                return (
                <div key={emp.id} className={style.card}>
                    <div>Name: {emp.name}</div>
                    <div>Gender: {emp.gender}</div>
                    <div>Role: {emp.role}</div>
                    <div>Department: {emp.dept}</div>
                    <div>Salary: {emp.salary}</div>
                </div>
                )
            })
        }
    </div>
  )
}
