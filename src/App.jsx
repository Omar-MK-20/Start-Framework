import { Outlet } from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import Copyright from './Layout/Copyright/Copyright'
import Footer from './Layout/Footer/Footer'
import NavBar from './Layout/NavBar/NavBar'



function App() {

    return (
        <>
            <NavBar/>

            <Outlet/>

            <Footer/>
            <Copyright/>
        </>
    )
}

export default App
