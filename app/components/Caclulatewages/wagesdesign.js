"use client";
import { useEffect, useState } from "react";
import MonthAttendance from "./MonthAttendance";

export default function Wagesdesign({
  name,
  father,
  email,
  address,
  mobile,
  attendance,
  date,
  callChild,
}) {
  const [FilterAttendance, SetFilterAttendance] = useState(attendance);
  const [show, setshow] = useState(false);
  let Totalhour = parseFloat(0);
  let Tea = 0;
  for (let i = 0; i < FilterAttendance.length; i++) {
    let end = FilterAttendance[i].Exit;
    let Start = FilterAttendance[i].Entry;
    let diff = ((new Date(end) - new Date(Start)) / (1000 * 60 * 60)).toFixed(
      3
    );
    Totalhour += parseFloat(diff);
    if (diff > 8) {
      Tea + 1;
    }

    // console.log(new Date(date.Start).toLocaleDateString(),new Date(Start).toLocaleDateString(),)
  }
  useEffect(() => {
    const filterdata = attendance.filter(
      ({ Entry, Exit }) =>
        new Date(Entry).toLocaleDateString() >=
          new Date(date.Start).toLocaleDateString() &&
        new Date(Exit).toLocaleDateString() <=
          new Date(date.End).toLocaleDateString()
    );

    SetFilterAttendance(filterdata);
  }, [callChild]);

  return (
    <div className="border p-3 mb-3 border-black">
      <div className="grid grid-cols-2 mt-3">
        <div>
          <p>Name: {name}</p>
          <p>Father Name: {father}</p>
          <p>Mobile No:{mobile}</p>
          <p>Address: {address}</p>
          <p>Email: {email}</p>
        </div>
        <div>
          <p>Total Hour worked: {Totalhour}</p>
          <p>Deduction: {}</p>
          <p>Sallary: {Totalhour * 10000}</p>
        </div>
      </div>
      <p
        className="text-red-500 cursor-pointer mt-2 mb-2"
        onClick={() => setshow(!show)}
      >
        Show Full Month Attendance ⬇
      </p>
      {show == true ? (
        <div className="mb-[2px] border-2  p-[1px] grid grid-cols-3">
          <p>Entry </p>
          <p>Exit </p>
          <p>TotalHour</p>
        </div>
      ) : (
        <></>
      )}
      {show == true ? (
        FilterAttendance.map((e, i) => (
          <MonthAttendance key={i} entry={e.Entry} exit={e.Exit} />
        ))
      ) : (
        <></>
      )}
      <hr />
    </div>
  );
}
