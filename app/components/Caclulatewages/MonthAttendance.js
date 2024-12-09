
export default function MonthAttendance({entry,exit}) {
  return (
    <div className="mb-[2px] border p-[1px] grid grid-cols-3">
      <p>{entry} </p>
      <p>{exit}</p>
      <p>{((new Date(exit) - new Date(entry)) / (1000 * 60 * 60)).toFixed(3)}</p>
    </div>
  )
}
