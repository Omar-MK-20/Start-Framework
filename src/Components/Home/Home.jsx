import avataaars from '../../assets/avataaars.svg'
import Star from "../../Layout/Star/Star"


function Home() {
    const starColor = "white";
    // console.log("hello");
    return (
        <>
            <div className="home bg-green d-flex justify-content-center align-items-center pt-5 pb-3 mt-5">
                <div className="text-white text-center py-5">
                    <img className="avatarImg" src={avataaars} alt="avatar" />
                    <h2 className="fs-1 fw-bold pt-5">START FRAMEWORK</h2>
                    <Star color={starColor}/>
                    <p className="pt-3">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}

export default Home