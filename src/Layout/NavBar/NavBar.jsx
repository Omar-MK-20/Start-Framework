import { useState } from "react";
import { NavLink } from "react-router";



function NavBar() {

    const [navLen, setNavLen] = useState(false)

    window.addEventListener('scroll', () => 
    {

        if (globalThis.window.scrollY > 30) 
        {
            setNavLen(true);
        }
        else 
        {
            setNavLen(false);
        }
    })


    return (
        <>
            <div className="navbar navbar-expand-lg bg-dark-blue fixed-top">
                <div className={navLen ? "container" : "container py-3"}>
                    <NavLink className="navbar-brand text-white fs-2 fw-bold" to="/">START FRAMEWORK</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarItems">
                        <ul className="navbar-nav ms-auto column-gap-3 px-2 mb-2">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold" aria-current="page" to='about'>ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold" aria-current="page" to='portfolio'>PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold" aria-current="page" to='contact'>CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar