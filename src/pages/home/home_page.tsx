import React from "react"
import Home from "@/components/HomePage/Home";
import Nav from "../../components/Header/Nav.jsx";
import Footer from "../../components/Footer/Footer.jsx"

export default function Home_page(){
    return (
        <div>
            <Nav />
            <Home />
            <Footer />
        </div>
        
    )
}