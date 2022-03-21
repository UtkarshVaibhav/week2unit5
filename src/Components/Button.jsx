import React from 'react'

export const Button = ({showSpecificData,showAll,asc,dec}) => {
  return (
    <div>
        <button onClick={()=>{showAll()}}>Show All Departments</button>
        <button onClick={()=>{showSpecificData("Marketing")}}>Show Marketing</button>
        <button onClick={()=>{showSpecificData("HR")}}>Show HR</button>
        <button onClick={()=>{showSpecificData("IT")}}>Show IT</button>
        <button onClick={()=>{showSpecificData("Finance")}}>Show Finance</button>
        <button onClick={()=>{showSpecificData("Operations")}}>Show Operations</button>
        <button onClick={asc}>Sort By Salary Ascending</button>
        <button onClick={dec}>Sort By Salary Descending</button>
    </div>
  )
}
