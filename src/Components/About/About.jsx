import Star from "../../Layout/Star/Star"



function About() {

    const starColor = "white";

    return (
        <>
            <div className="about bg-green d-flex justify-content-center align-items-center text-center pt-5 pb-3 mt-5 text-white">
                <div className="container">
                    <div>
                        <h2 className="fs-1 fw-bold pt-5">ABOUT COMPONENT</h2>
                        <Star color={starColor} />
                    </div>
                    <div className="text-start row row-cols-2 justify-content-around px-5 py-3">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About