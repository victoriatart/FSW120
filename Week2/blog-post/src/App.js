import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import blogData from "./components/BlogData"
import "./style.css"

function App() {
    const blogComponents = blogData.map(item => <MainContent key={item.title} item={item} />)
    
    return (
        <div>
            <NavBar />
            <Header />
            {blogComponents}
            <Footer />
        </div>
    )
}

export default App