import React from "react"
import './BottomBar.css'
import GithubLogo from './assets/github-logo.svg'
import LinkedInLogo from './assets/linkedin-logo.svg'
import {Link} from "react-router-dom"
class BottomBar extends React.Component {
    render() {
        return (
            <div className="BottomBar">
                <ul className="menu-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="social-icons">
                    <a href="https://github.com/Peter-W-Lam"><img src={GithubLogo} alt="Github Logo" /></a>
                    <a href="https://www.linkedin.com/in/peterwlam/"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a>
                </div>
            </div>
        )
    }
}

export default BottomBar