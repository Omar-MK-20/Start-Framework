import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"





function Footer() {
    return (
        <>
            <footer className="bg-dark-blue p-5">
                <div className="card-group column-gap-3 my-4 mx-3">
                    <div className="card bg-dark-blue border-0">
                        <div className="card-body inner text-white text-center p-3">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="card bg-dark-blue border-0">
                        <div className="card-body inner text-white text-center p-3">
                            <h3>AROUND THE WEB</h3>
                            <div className="row justify-content-center row-gap-2">
                            <span className="icon"><FontAwesomeIcon icon={faFacebook}/></span>
                            <span className="icon"><FontAwesomeIcon icon={faTwitter}/></span>
                            <span className="icon"><FontAwesomeIcon icon={faLinkedinIn}/></span>
                            <span className="icon"><FontAwesomeIcon icon={faGlobe}/></span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-dark-blue border-0">
                        <div className="card-body inner text-white text-center p-3">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer