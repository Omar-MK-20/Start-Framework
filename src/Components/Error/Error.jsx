import Star from "../../Layout/Star/Star"


function Error() {

    const starColor = 'dark-blue'

  return (<>
        <div className="error d-flex justify-content-center align-items-center text-center pt-5 pb-3 mt-5 flex-column">
            <h3 className="dark-blue fa-8x">Oops!</h3>
            <Star color={starColor}/>
            <p className=" dark-blue fa-2x">We can't seem to find the page you're looking for.</p>
            <p className="text-danger fw-bold">Error code: 404</p>
        </div>
    </>
  )
}

export default Error