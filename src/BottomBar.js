import React from "react"
import './BottomBar.css'
import GithubLogo from './assets/github-logo.svg'
import LinkedInLogo from './assets/linkedin-logo.svg'

class BottomBar extends React.Component {
    render() {
        return (
            <div className="BottomBar">
                <ul className="menu-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Writing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="social-icons">
                    <a href="#"><img src={GithubLogo} alt="Github Logo" /></a>
                    <a href="#"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a>
                </div>
            </div>
        )
    }
}

export default BottomBar