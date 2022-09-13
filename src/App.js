import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./pages/Navbar";
import AboutMe from "./pages/AboutMe";


export default function App(){
     return(
         <BrowserRouter>
             <Routes>
                 <Route path="/" element={<Navbar/>}>
                     <Route index element={<AboutMe/>} />
                 </Route>
             </Routes>
         </BrowserRouter>

     )
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App/>);
