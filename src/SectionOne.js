import React from "react"
import Button from "./Button"
import './SectionOne.css'
import Portrait from './assets/portrait.png'


class SectionOne extends React.Component {
    render() {
        return (
            <div className="SectionOne">
                <div className="welcome-text">
                    <h2>Hello, I'm</h2>
                    <h1>Peter Lam</h1>
                    <h4>Student &amp; Front-End Developer</h4>
                    <div className="intro-btns">
                        <Button name="Get in touch" filled={true} onClick={() => window.location.href="/contact"}/>
                        <Button name="Download CV" filled={false} id="download-cv-btn"/> 
                    </div>
                </div>
                <div className="welcome-portrait">
                    <img src={Portrait} alt="Portrait of Peter Lam" />
                </div>
            </div>
        )
    }
}

export default SectionOne