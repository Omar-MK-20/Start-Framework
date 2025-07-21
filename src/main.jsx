import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import Error from './Components/Error/Error.jsx'

let router = createBrowserRouter(
    [
        {path:'/', Component:App, children:
            [
                {index:true, Component:Home},
                {path:'about', Component:About},
                {path:'portfolio', Component:Portfolio},
                {path:'contact', Component:Contact},
                {path:'*', Component:Error}
            ]
        }
        
    ]
);



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);
