import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Day9 = () => {
  return (
    <>
        <div>
            <h3>Welcome to day 9: REACT ROUTER</h3>

            <nav className="navb">
                <Link to="/">Home</Link> |{" "}
                <Link to="about">About</Link> |{" "}
                <Link to="contact">Contact</Link> |{" "}
                <Link to="dashboard">Dashboard</Link>
            </nav>

            <Outlet/>
        </div>
    </>
  )
}

export default Day9