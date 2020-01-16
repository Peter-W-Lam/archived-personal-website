import React from "react"
import './Contact.css'
import Email from './assets/contact-1.png'
import LinkedIn from './assets/contact-2.png'
import Github from './assets/contact-3.png'


class Contact extends React.Component {
    render() {
        return (
            <div className="Contact">
                <h1>Let's get in touch!</h1>
                <h2>Here are some ways to find me:</h2>

                <div className="cards">
                    <div className="card">
                        <a href="mailto:peter.lam@tufts.edu"><img src={Email} alt="Icon of envelope" /></a>
                        <p>Email</p>
                    </div>
                    <div className="card">
                        <a href="#linkedin"><img src={LinkedIn} alt="Icon of LinkedIn" /></a>
                        <p>LinkedIn</p>
                    </div>
                    <div className="card">
                        <a href="#github"><img src={Github} alt="Icon of Github" /></a>
                        <p>Github</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact