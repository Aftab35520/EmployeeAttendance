'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from "react"
export default function Navbar(prop) {
  const router = useRouter()
    const [margins,setmargins]=useState("0px")
    const [arrow,setarrow]=useState("←")
  return (
    <div className="w-[300px] h-full bg-slate-900 text-white fixed left-0 top-0 p-6 text-xl "  style={{marginLeft:[margins],transition: 'margin-left 0.1s ease-in-out'}}>
        <p className="relative w-full">Jaybee Escop 2024 <span className="absolute left-[115%]  cursor-pointer hover:text-red-700 bg-slate-900 p-1 rounded-[50%]" 
        onClick={(e)=>{setmargins(margins=="-275px"?"0px":"-275px"),setarrow(arrow=="➔"?"←":"➔"),prop.getWidth(margins=="-275px"?275:0)}
        }>{arrow}</span></p>
        <p className="w-full h-[200px] mt-3 mb-12 bg-black"></p>
        <p onClick={()=>router.push("/")}  className="bg-slate-200 p-3 mb-3 text-black cursor-pointer hover:bg-slate-500"><Link href="/admin">DashBoard</Link></p>
        <p onClick={()=>router.push("/markattendance")} className="bg-slate-200 p-3 mb-3 text-black cursor-pointer hover:bg-slate-500"><Link href="/markattendance">Mark Attendance</Link></p>
        <p onClick={()=>router.push("/wages")} className="bg-slate-200 p-3 mb-3 text-black cursor-pointer hover:bg-slate-500"><Link href="/wages">Calculate Wages</Link></p>
        <p onClick={()=>router.push("/addemployee")} className="bg-slate-200 p-3 mb-3 text-black cursor-pointer hover:bg-slate-500"><Link href="/addemployee">Add Employee</Link></p>
    </div>
  )
}
