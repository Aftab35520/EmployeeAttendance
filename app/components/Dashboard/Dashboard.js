"use client";
import { useEffect, useState } from "react";
import { url } from "../glogle";
export default function Dashboard() {
  const [Api, setApi] = useState([]);
  useEffect(() => {
    async function Fetchapidata(params) {
      await fetch(`${url}api/addemployee`, {
        method: "GET",
      })
        .then(async (data) => await data.json())
        .then((data) => setApi(data))
        .catch((err) => err);
    }
    Fetchapidata();
  }, []);

  const RemoveEmployee=async(id)=>{
    await fetch(`${url}api/addemployee/${id}`,{
      method:"DELETE"
    })
    .then(async res=>await res.json())
    .then(data=>{alert(data.Status),window.location.assign("/")})
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <p className="w-fullp-3 font-bold  text-center m-3">Total Empoyee :{Api.length}</p>
      <p className="w-full bg-blue-500 p-3 font-bold text-white">
        Active Employe
      </p>
      <div className="grid grid-cols-4 border p-3 m-2 font-bold">
          <p>Name</p>
          <p>EmployeeId</p>
          <p>Desination</p>
        </div>
      {Api?.map((e) => (
        <div className="grid grid-cols-4 border p-3 m-2">
          <p>{e.FullName}</p>
          <p>{e._id}</p>
          <p>Desination</p>
          <p className="text-red-600 cursor-pointer " onClick={()=>RemoveEmployee(e._id)}>Remove ⓧ</p>
        </div>
      ))}

      
    </div>
  );
}
