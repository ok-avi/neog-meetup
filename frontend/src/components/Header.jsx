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
        
      </div>
    </nav>
  )
}

export default Header