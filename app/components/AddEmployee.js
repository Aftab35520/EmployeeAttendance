"use client";
import { useState } from "react";
import { url } from "./glogle";

export default function AddEmployee() {
  const [popup,setpopup]=useState(false)
  const [popupdetail,setpopupdetail]=useState({
    FullName:'',
    _id:''
  })
  const [EmployeeDetail, setDetail] = useState({
    FullName: "",
    FatherName: "",
    Address: "",
    MobileNo: '',
    Email: "",
    Destination:"",
    Sallary:""
  });

  const FetchAfterEvent = (e) => {
    setpopup(true)
    setpopupdetail(e)
    setDetail({
      FullName: "",
      FatherName: "",
      Address: "",
      MobileNo: '',
      Email: "",
      Destination:"",
      Sallary:""
    });
  };

  const changeEandler = (e) => {
    setDetail({ ...EmployeeDetail, [e.target.name]: e.target.value });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    EmployeeDetail.FullName !== "" &&
    EmployeeDetail.FatherName !== "" &&
    EmployeeDetail.Address !== "" &&
    EmployeeDetail.MobileNo !== '' &&
    EmployeeDetail.Email !== ""
      ? await fetch(`${url}api/addemployee`, {
          method: "POST",
          body: JSON.stringify(EmployeeDetail),
          headers: {
            "content-type": "application/json",
          },
        })
          .then(async (data) => await data.json())
          .then((data) => FetchAfterEvent(data))
          .catch((err) => err)
      : console.log(0);
  };
  return (
    <div className="relative ">
      {
        popup==true?
        <div className="absolute top-1/2 left-[calc(50%-100px)] bg-blue-400 p-6 rounded-md cursor-pointer" onClick={()=>setpopup(false)}>
        <p>Employee detail Saved</p>
        <p>Name:{popupdetail.FullName}</p>
        <p>Id:{popupdetail._id}</p>
      </div>
      :<div/>
      }
      
      <p className="text-xl text-center mb-5">New Employee Details</p>
      <form className="flex flex-col items-center p-9" onSubmit={HandleSubmit}>
        <input
          type="text"
          value={EmployeeDetail.FullName}
          className="border-2 outline-none   w-full p-3 rounded-sm mb-3"
          placeholder="Employee Full Name"
          name="FullName"
          onChange={changeEandler}
        />
        <input
          type="text"
          value={EmployeeDetail.FatherName}
          className="border-2 outline-none   w-full p-3 rounded-sm mb-3"
          placeholder="Father Name"
          name="FatherName"
          onChange={changeEandler}
        />
        <input
          type="text"
          value={EmployeeDetail.Address}
          className="border-2 outline-none   w-full p-3 rounded-sm mb-3"
          placeholder="Address"
          name="Address"
          onChange={changeEandler}
        />
        <input
          type="number"
          value={EmployeeDetail.MobileNo}
          className="border-2 outline-none   w-full p-3 rounded-sm mb-3"
          placeholder="Mobile Number"
          name="MobileNo"
          onChange={changeEandler}
        />
        <input
          type="email"
          value={EmployeeDetail.Email}
          className="border-2 outline-none   w-full p-3 rounded-sm mb-3"
          placeholder="Email Address"
          name="Email"
          onChange={changeEandler}
        />
       
        <input
          type="submit"
          className="border-2 outline-none  bg-blue-400  w-full p-3 rounded-sm mb-3 cursor-pointer"
        />
      </form>
    </div>
  );
}
