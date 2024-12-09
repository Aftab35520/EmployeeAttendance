import { url } from "../glogle";

export default function AttendanceLayout({
  name,
  id,
  father,
  address,
  index,
  attandance,
}) {

  const EntryHandle = async (e) => {
    (e.currentTarget.style.background = "blue"),
      (e.currentTarget.style.color = "white"),
      (e.currentTarget.style.pointerEvents = "none");
    const date = new Date().toLocaleString('en-US');
    console.log(date)
    await fetch(`${url}api/addemployee/${id}`, {
      method: "PUT",
      body: JSON.stringify({ Status: "Entry", date }),
      headers: {
        "content-type": "application.json",
      },
    })
      .then(async (res) => await res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  };
  const ExitHandle = async (e) => {
    (e.currentTarget.style.background = "red"),
    (e.currentTarget.style.color = "white");
    const date = new Date().toLocaleString('en-US');
    await fetch(`${url}api/addemployee/${id}`, {
      method: "PUT",
      body: JSON.stringify({ Status: "Exit", date }),
      headers: {
        "content-type": "application.json",
      },
    })
      .then(async (res) => await res.json())
      .then((data) =>  data)
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-6 border p-3 border-black mb-1">
      <p className=" p-2 overflow-hidden">{index}</p>
      <p className=" p-2 overflow-hidden">{name}</p>
      <p className=" p-2 overflow-hidden">{father}</p>
      <p className=" p-2 overflow-hidden">{id}</p>
      <p className=" p-2 overflow-hidden">{address}</p>
      <div className="grid grid-cols-2">
        <p
          onClick={EntryHandle}
          className={`p-2 mr-2 text-center cursor-pointer border-2 ${
            attandance?.Exit == ""
              ? "pointer-events-none bg-[blue] text-white"
              : ""
          }`}
        >
          Entry
        </p>
        <p
          onClick={ExitHandle}
          className={`p-2 mr-2 text-center cursor-pointer border-2 ${
            attandance?.Exit == ""
              ? "pointer-events-auto "
              : "pointer-events-none"
          } `}
        >
          Exit
        </p>
      </div>
    </div>
  );
}
