import { Link } from "react-router-dom"
import Header from "./components/Header"
import useFetch from "./useFetch.jsx"
import { useState } from "react"

const App = () => {
  const [eventType,setEventType] = useState("Both")
  const [search,setSearch] = useState()
  // const [filteredEvent,setFilteredEvent] = useState()
  const {data, loading, error} = useFetch("https://neog-meetup-backend.vercel.app/events")
  
  // let filteredEvent = search?data.filter(event=>event.type.toLowerCase()===search.toLowerCase().trim() ||event.title.toLowerCase()===search.toLowerCase().trim()) : eventType==="Both"?data : data?.filter(event=>event.type===eventType)
  let filteredEvent;

  if (search) {
    const searchText = search.toLowerCase().trim();
    filteredEvent = data.filter(event =>
      event.tags.find(tag=>tag.toLowerCase()===searchText)  ||
      event.title.toLowerCase() === searchText
    );
  } else if (eventType === "Both") {
    filteredEvent = data;
  } else {
    filteredEvent = data?.filter(event => event.type === eventType);
  }

  // console.log(filteredEvent,data)
  // data&&setFilteredEvent(data)
  
  

  // function searchHandler(e){
  //   e.preventDefault()
    
  // }
  function selectHandler(e){
    setSearch("")
    setEventType(e.target.value)
  }
    // console.log(filteredEvent)
  return (
    <>
      <Header  />
      <main className="px-5 pb-4">
        <hr className="" />
        <div className="mb-3 row py-3">
          <h1 className="col-sm-4 fw-bold">Meetup Events </h1>
          <div className="col-sm-4 ">
            <select  onChange={selectHandler} className="form-select w-50 float-end">
              <option value="Both">Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          <div className="col-sm-4">
            <form className=" d-flex" role="search">
              <input value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search by title and tags" aria-label="Search" />
              {/* <button onClick={searchHandler} className="btn btn-outline-secondary  fw-medium" type="submit">Search</button> */}
            </form>
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