import { Link } from "react-router-dom"
import Header from "./components/Header"
import useFetch from "./useFetch.jsx"
import { useState } from "react"

const App = () => {
  const [eventType,setEventType] = useState("Both")
  const [search,setSearch] = useState("")
  // const [filteredEvent,setFilteredEvent] = useState()
  const {data, loading, error} = useFetch("https://neog-meetup-backend.vercel.app/events")
  
  let filteredEvent = eventType==="Both"?data : data?.filter(event=>event.type===eventType)
  // console.log(filteredEvent,data)
  // data&&setFilteredEvent(data)
  
  

  function searchHandler(e){
    e.preventDefault()
    // console.log(search.length,search,search.trim())
     filteredEvent = data&&data.filter(event=>event.type.toLowerCase()===search.toLowerCase().trim())
  }
    console.log(filteredEvent)
  return (
    <>
      <Header search={search} setSearch={setSearch} searchHandler={searchHandler

      }  />
      <main className="px-5 pb-4">
        <hr className="" />
        <div className="mb-3 row py-3">
          <h1 className="col-sm-6 fw-bold">Meetup Events </h1>
          <div className="col-sm-6 ">
            <select  onChange={(e)=>setEventType(e.target.value)} className="form-select w-50 float-end">
              <option value="Both">Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
        <div className="row g-4 ">
          {filteredEvent&&(
            filteredEvent.map(event=>(
              <div className="col-sm-4 ">
                <Link to={`/eventDetails/${event._id}`} className="card py-0 px-0">
                  <img src={event.imageUrl} alt="" />
                  <div className=" card-img-overlay">
                    <p className=" fw-medium bg-white card-text float-start py-md-2 px-md-4 px-sm-2 py-sm-1 rounded">{event.type} Event</p>
                  </div>
                </Link>
                <Link className="text-decoration-none text-dark  mx-1 mb-0 fw-light">{event.startTime}</Link>
                <h5 className="  mx-1">
                  <Link className="text-decoration-none text-dark">{event.title}</Link> 
                </h5>
              </div>
            ) )
            
            
            
          )}

        </div>
      </main>
    </>
  )
}

export default App