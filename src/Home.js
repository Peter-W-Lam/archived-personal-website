import React from "react"
import Button from "./Button"
import './Home.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </div>
        )
    }
}

export default Home