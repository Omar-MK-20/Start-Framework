import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


function Star({color}) {

    // console.log(color)
    
    return (
        <>
            <div className="d-flex justify-content-center align-items-center gap-3 pt-2">
                <span className={"line bg-"+color}></span>
                <span><FontAwesomeIcon icon={faStar}/></span>
                <span className={"line bg-"+color}></span>
            </div>
        </>
    )
}

export default Star