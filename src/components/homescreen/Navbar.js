import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {
const [show, setShow] = useState(false)

const navbarTransition = () => {
    if(window.scrollY > 100){
        setShow(true)
    }
    else{
        setShow(false)
    }
}

useEffect(() => {

    window.addEventListener("scroll", navbarTransition)
    return () => {
        window.removeEventListener("scroll", navbarTransition)
    }
}, [])



    return (
        <div className={`nav ${ show && "nav__black"}`}>
            <div className="nav__contents">

            <img 
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"/>
            <img 
            className="nav__avatar"
            src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" 
            alt="Avatar"/>
            </div>
    
        </div>
    )
}

export default Navbar
