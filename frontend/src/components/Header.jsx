import { Link } from "react-router-dom"
import { useState } from "react"

const Header = ({search,setSearch,searchHandler}) => {
  
  
  return (
    <nav className="navbar px-5 py-2 navbar-expand-sm bg-body-">
      <div className="container-fluid ">
        <Link to={"/"} className=" navbar-brand" href="#">Meetup</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
          <form className="mt-2 d-flex" role="search">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search by title and tags" aria-label="Search" />
            <button onClick={searchHandler} className="btn btn-outline-secondary  fw-medium" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header