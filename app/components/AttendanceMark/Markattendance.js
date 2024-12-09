'use client'
import { useEffect, useState } from "react";
import { url } from "../glogle";
import AttendanceLayout from "./AttendanceLayout";
export default function Markattendance() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    async function Fetchapidata(params) {
      await fetch(`${url}api/addemployee`, {
        method: "GET",
      })
        .then(async (data) => await data.json())
        .then((data) => setdata(data))
        .catch((err) => err)
    }
    Fetchapidata()
  },[])
  return (
    <div className="p-3">
      <div className="p-3 pr-0 w-full flex justify-end">
        <input
          type="text"
          className=" border border-black p-2 outline-none"
          placeholder="Search Employee"
        />
      </div>
      <div className="grid grid-cols-6 border p-3 border-black mb-3 font-bold">
        <p>S.no</p>
        <p>Name</p>
        <p>Father Name</p>
        <p >Employee Id</p>
        <p>Address</p>
        <p>Mark Attendance</p>
      </div>
      {data.map((data,i) => (
        <AttendanceLayout key={i} index={i+1} name={data.FullName} father={data.FatherName} email={data.Email} address={data.Address} id={data._id} attandance={data.Attandance[data.Attandance.length-1]}/>
      ))}
    </div>
  );
}
