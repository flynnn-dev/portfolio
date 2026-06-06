import React, {useEffect} from 'react'
import {navLinks} from "../constants/index.js";
import {useState} from "react";

const NavBar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScroll(true);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
            <header className={`navbar ${scroll ? "scrolled" : ""}`}>
                <div className="inner">
                    <a href="#hero" className="logo">
                        JL | Flynnn-dev
                    </a>

                    <nav className="desktop">
                        <ul>
                            {navLinks.map(({link, name}) => (
                                <li className="group" key={name}>
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className="underline"/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <a href="#contact" className="contact-btn group">
                        <div className="inner">
                            <span>Contact Me</span>
                        </div>
                    </a>
                </div>
            </header>
    )
}
export default NavBar
