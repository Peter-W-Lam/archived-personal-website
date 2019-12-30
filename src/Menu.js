import React from 'react'
import './Menu.css'
import Logo from './assets/logo.svg'
import Github from './assets/github.jpg'
import LinkedIn from './assets/linkedin.jpg'
import MenuIcn from './assets/menu.svg'
class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            page: 0, 
            open: false, 
            height: 0
        }
        this.linkColor = this.linkColor.bind(this)
    }

    // Selected page color should be dark if looked at on desktop/tablet
    // Otherwise, the selected pages should be white
    linkColor() {
        if (window.innerWidth > 500) {
            return({
                color: "#293241"
            })
        } else { 
            return({
                color: "#FFF"
            })
        }
    }

    render() {
        return(
            <div className="Menu">
                <div className="nav-top">
                    <img src={Logo} alt="Personal logo" />
                    <img className="menu-icn" src={MenuIcn} onClick={() => {this.setState({open: true})}} />
                </div>
                <div style={this.state.open == true ? {width: "100vw"} : {width: "0vw"}} id="myNav" className="overlay">
                    <a href="#" className="closebtn" onClick={() => {this.setState({open: false})}}>&times;</a>

                    <div className="overlay-content">
                        <a onClick={() => this.setState({page: 0})}
                           style={this.state.page === 0 ? this.linkColor() : {}}
                           href="#about">Home</a>
                        <a onClick={() => this.setState({page: 1})}
                           style={this.state.page === 1 ? this.linkColor() : {}}
                           href="#projects">Projects</a>
                        <a onClick={() => this.setState({page: 2})}
                           style={this.state.page === 2 ? this.linkColor() : {}}
                           href="#contact">Contact</a>
                    </div>
                </div>
                <div className="socials">
                     <a href="#linkedin">
                         <img src={LinkedIn} alt="LinkedIn Logo" />
                     </a>
                     <a href="#github">
                         <img src={Github} alt="Github Logo" />
                     </a>
                 </div> 
                
            </div>
        )
    }
}

export default Menu 