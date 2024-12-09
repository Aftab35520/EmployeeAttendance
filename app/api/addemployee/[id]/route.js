import EmployeeModel from "@/app/dbs/Employee"
import { NextResponse } from "next/server"


export async function PUT(req,res) {
    let id=await res.params
    id=id.id
    const data=await req.json()
    if(data.Status=="Entry"){
        const Entery = await EmployeeModel.updateOne(
            { _id: id },
            {
                $push: {
                    Attandance: {
                        Entry: data.date,
                        Exit: '' 
                    }
                }
            }
        );

    }
    else if(data.Status=="Exit"){
        let Edata=await EmployeeModel.findOne({_id:id})
        let attandance=Edata.Attandance
        let last=attandance[attandance.length-1]
        last.Exit= data.date
        
        let check=await EmployeeModel.updateOne(
            {_id:id},
            {
                $set:{
                    Attandance:attandance
                }
            }
        )
    }
    return NextResponse.json({e:1})
}

export async function DELETE(req,res) {
    try{
        let id=await res.params
        id=id.id
        await EmployeeModel.deleteOne({_id:id})
        return NextResponse.json({Status:"Employee Deleted"})
    }
    catch(e){
        return NextResponse.json({Status:"Error occured Cannot Delete Employee"})
    }
}

