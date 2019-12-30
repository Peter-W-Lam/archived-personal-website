import React from "react"
import Button from "./Button"
import './Home.css'
import SectionOne from './SectionOne'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <SectionOne />
            </div>
        )
    }
}

export default Home