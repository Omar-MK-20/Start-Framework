import Star from "../../Layout/Star/Star"


function Contact() {
	const starColor = "dark-blue"
	return (
		<>
			<div className="contact d-flex justify-content-center align-items-center text-center pt-5 pb-3 mt-5 flex-column">
				<div className="dark-blue">
					<h2 className="fs-1 fw-bold pt-5">CONTACT SECTION</h2>
					<Star color={starColor} />
				</div>

				<form className="text-start w-90 w-lg-50 position-relative my-5" action="">
					<div className="position-relative py-2 my-2">
						<input className="form-control border-0 border-bottom p-3" type="text" name="userName" id="userName" autoComplete="username" placeholder="userName" />
						<label className="green d-inline-block label" htmlFor="userName">userName:</label>
					</div>
					<div className="position-relative py-2 my-2">
						<input className="form-control border-0 border-bottom p-3" type="number" name="userAge" id="userAge" autoComplete="age" placeholder="userAge" />
						<label className="green d-inline-block label" htmlFor="userAge">userAge:</label>
					</div>
					<div className="position-relative py-2 my-2">
						<input className="form-control border-0 border-bottom p-3" type="email" name="userEmail" id="userEmail" autoComplete="email" placeholder="userEmail" />
						<label className="green d-inline-block label" htmlFor="userEmail">userEmail:</label>
					</div>
					<div className="position-relative py-2 my-2">
						<input className="form-control border-0 border-bottom p-3" type="password" name="userPassowrd" id="userPassword" autoComplete="current-password" placeholder="userPassword" />
						<label className="green d-inline-block label" htmlFor="userPassowrd">userPassowrd:</label>
					</div>
					<button className="btn btn-green mt-2" type="button">Send Message</button>
				</form>
			</div>



		</>
	)
}

export default Contact