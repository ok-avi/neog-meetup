import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"
import Loading from "../components/Loading"

//http://localhost:3000/events/67f91e36973ba42efd67f4a3
const EventDetails = () => {
    const {eventID} = useParams()
    const {data,loading,error} = useFetch(`https://neog-meetup-backend.vercel.app/events/${eventID}`)
     
    // console.log(data&& JSON.stringify(data,null,2))
  return (
    <>
        <Header />
        <main className="px-5 pb-4">
            <hr />
            {data?<div className="row g-5">
                <div className="col-md-6 ">
                    <h1 className=" mb-4">{data.title}</h1>
                    <p className="mb-0">Hosted By:</p>
                    <h4>{data.hostedBy}</h4>
                    <img src={data.imageUrl} className=" img-fluid" alt="" />
                    <h3 className="py-2 mt-3">Details:</h3>
                    <p>{data.details}</p>
                    <section className="my-3">
                        <h3>Additional Information:</h3>
                        <p className="mb-1"><strong>Dress Code:</strong> {data.descriptions.dressCode} </p>
                        <p className="mb-1"><strong>Age Restrictions:</strong> {data.descriptions.ageRestrictions} </p>
                    </section>
                    <section>
                        <h3>Event Tags:</h3>
                        <div className="text-light d-flex g-3 flex-wrap ">
                            {data.tags.map(tag=><div className="mb-2 rounded bg-danger mx-1 px-3 py-2">{tag}</div>)}

                        </div>
                    </section>
                </div>
                <div className="col-md-6 py-3">
                    <section className="py-3 px-4 bg-body-secondary rounded my-3 ">
                        <div className="py-2 row">
                            <div className="col-3">
                                <div>
                                    <strong>Start Time: </strong>
                                    <span className="float-end">---&#62;</span>
                                </div>
                                <div>
                                    <strong>End Time: </strong>
                                    <span className="float-end">---&#62;</span>
                                </div>
                            </div>
                            <div className="col">
                                <p className="my-0">{data.startTime} to</p>
                                <p className="my-0">{data.endTime}</p>
                            </div>
                        </div>
                        <div className="py-2 row">
                            <div className="col-3">
                                <span ><strong>Address: </strong></span>
                                <span className="float-end">---&#62;</span>
                            </div>
                            <div className="col">
                                <p >{data.address.city} <br /> {data.address.pincode} {data.address.state}, {data.address.country}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <strong>Pricing:</strong> 
                                <span className="float-end">---&#62;</span>
                            </div>
                            <div className="col">{data.pricing.toString()!=="free"&&<span>&#8377;</span>} {data.pricing}</div>
                        </div>
                    </section>
                    <section>
                        <h3>Speakers: ({data.speakers.length})</h3>
                        <div className="row gx-3 mt-4">
                            {data.speakers.map(speaker=><div className="me-4  mb-3 py-4 text-center col-sm-4 bg-body-secondary  rounded">
                                <img className="img-fluid rounded-circle " src={speaker.imageUrl} alt="" />
                                <h4 className="mb-0 mt-3">{speaker.name}</h4>
                                <p className="mt-0">{speaker.designation}</p>
                            </div>)}
                        </div>
                    </section>
                </div>
            </div>
            :<Loading/>}
        </main>
    </>
  )
}

export default EventDetails