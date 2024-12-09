"use client";
import { useEffect, useState } from "react";
import { url } from "../glogle";
import Wagesdesign from "./wagesdesign";

export default function Calculatewages() {
  const [callChild,SetChildFun]=useState(true)
  const [date,setDate]=useState(
    {
      Start:'',
      End:''
    }
  )
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

  const changeHandle=(e)=>{
    setDate({
      ...date,[e.target.name]:e.target.value
    })
  }

  const SubmitHandle=(e)=>{
    e.preventDefault()
    SetChildFun(!callChild)
  }
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <p className="font-bold">Loream ipsum</p>
      <form className=" flex  w-full" onSubmit={SubmitHandle}>
        <div className="flex flex-col border-2 p-3 m-3">
          <label>Start Date</label>
          <input type="date" max={today} className="  cursor-pointer" name="Start" onChange={changeHandle}/>
        </div>
        <div className="flex flex-col border-2 p-3 m-3">
          <label>End Date</label>
          <input type="date" max={today} className="  cursor-pointer" name="End" onChange={changeHandle}/>
        </div>
        <div className="flex flex-col justify-center border-2 p-3 m-3">
          <input type="submit" className=" cursor-pointer"/>
        </div>
        
      </form>

      {Api.map((data, i) => (
        <Wagesdesign
          key={i}
          index={i + 1}
          name={data.FullName}
          father={data.FatherName}
          email={data.Email}
          address={data.Address}
          id={data._id}
          mobile={data.MobileNo}
          attendance={data.Attandance}
          date={date}
          callChild={callChild}
        />
      ))}
    </div>
  );
}
