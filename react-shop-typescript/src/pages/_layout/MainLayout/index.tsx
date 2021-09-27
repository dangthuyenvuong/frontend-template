import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'

const MainLayout: React.FC = ({ children }) => {
    function hoverEvent(event: any ) {
        
        // dropdown.current.classList.add('show','hovered')
        // event.preventDefault()
        event.currentTarget.classList.add('hovered', 'show')
        document.querySelectorAll(".dropdown-toggle, dropdown-menu").forEach(e => {
            e.setAttribute("aria-expaned", 'true')
        })
        document.querySelectorAll(".dropdown-menu").forEach(e => {
            e.classList.add('show')
        })
         
    };
    function mouseLeaveEvent (event: any ) {
        event.currentTarget.classList.remove('show')
        document.querySelectorAll(".dropdown-menu, dropdown-menu").forEach(e => {
            e.classList.remove('show')
        })
    }   

    console.log(document.querySelector('#modalShoppingCart'))
    return (
        <>
            <Header hoverEvent={hoverEvent} mouseLeaveEvent={mouseLeaveEvent}/>
            <Navbar hoverEvent={hoverEvent} mouseLeaveEvent={mouseLeaveEvent}/>
            {children}
            <Footer />
        </>
    )
}

export default MainLayout
