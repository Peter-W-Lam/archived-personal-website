import React from "react"

import './Home.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
            </div>
        )
    }
}

export default Home