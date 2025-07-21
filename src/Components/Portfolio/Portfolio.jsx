import Star from "../../Layout/Star/Star"
import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"




function Portfolio() {
    const starColor = "dark-blue"

    const [source, setSource] = useState(null);

    function getSource(e)
    {
        setSource(e.target.currentSrc);
    }


    return (
        <>
            <div className="container pt-5 pb-3 mt-5">
                <div className="dark-blue text-center">
                    <h2 className="fs-1 fw-bold pt-5">PORTFOLIO SECTION</h2>
                    <Star color={starColor} />
                </div>

                <div className="row gy-5 py-3">
                    <div className="col-md-6 col-lg-4 px-4" >
                        <div className="inner position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=> {getSource(e)}}>
                            <img className="d-inline-block w-100 rounded-3" src={port1} alt="" />
                            <div className="plusTag rounded-3">
                                <FontAwesomeIcon icon={faPlus} size="6x" color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 px-4" >
                        <div className="inner position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=> {getSource(e)}}>
                            <img className="d-inline-block w-100 rounded-3" src={port2} alt="" />
                            <div className="plusTag rounded-3">
                                <FontAwesomeIcon icon={faPlus} size="6x" color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 px-4" >
                        <div className="inner position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=> {getSource(e)}}>
                            <img className="d-inline-block w-100 rounded-3" src={port3} alt="" />
                            <div className="plusTag rounded-3">
                                <FontAwesomeIcon icon={faPlus} size="6x" color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 px-4" >
                        <div className="inner position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=> {getSource(e)}}>
                            <img className="d-inline-block w-100 rounded-3" src={port1} alt="" />
                            <div className="plusTag rounded-3">
                                <FontAwesomeIcon icon={faPlus} size="6x" color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 px-4" >
                        <div className="inner position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=> {getSource(e)}}>
                            <img className="d-inline-block w-100 rounded-3" src={port2} alt="" />
                            <div className="plusTag rounded-3">
                                <FontAwesomeIcon icon={faPlus} size="6x" color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 px-4" >
                        <div className="inner position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=> {getSource(e)}}>
                            <img className="d-inline-block w-100 rounded-3" src={port3} alt="" />
                            <div className="plusTag rounded-3">
                                <FontAwesomeIcon icon={faPlus} size="6x" color="white" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <img src={source} alt="" />
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Portfolio