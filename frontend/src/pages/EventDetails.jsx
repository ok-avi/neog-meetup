import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"

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
            {data?<div className="row ">
                <div className="col-md-6">
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
                    <section className="py-3 px-4 bg-body-secondary rounded my-3">
                        <div className="py-2 ">
                            <p className="my-0">{data.startTime} to</p>
                            <p className="my-0">{data.endTime}</p>
                        </div>
                        <div className="py-2">
                            <p>{data.address.city} <br /> {data.address.pincode} {data.address.state}, {data.address.country}</p>
                        </div>
                        <p> <span>&#8377;</span> {data.pricing}</p>
                    </section>
                    <section>
                        <h3>Speakers: ({data.speakers.length})</h3>
                        <div className="row gx-3 mt-4">
                            {data.speakers.map(speaker=><div className=" mx-auto mb-3 py-4 text-center col-sm-4 bg-body-secondary  rounded">
                                <img className="img-fluid rounded-circle " src={speaker.imageUrl} alt="" />
                                <h4 className="mb-0 mt-3">{speaker.name}</h4>
                                <p className="mt-0">{speaker.designation}</p>
                            </div>)}
                        </div>
                    </section>
                </div>
            </div>
            :<p>loading...</p>}
        </main>
    </>
  )
}

export default EventDetails