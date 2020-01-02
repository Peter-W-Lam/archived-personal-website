import React from "react"
import './SectionFour.css'

// Skill img imports
import Design1 from './assets/design-1.png'
import Design2 from './assets/design-2.png'
import Design3 from './assets/design-3.png'
import Dev1 from './assets/dev-1.png'
import Dev2 from './assets/dev-2.png'
import Dev3 from './assets/dev-3.png'
import Dev4 from './assets/dev-4.png'
import Dev5 from './assets/dev-5.png'
import Dev6 from './assets/dev-6.png'


class SectionFour extends React.Component {
    render() {
        return (
            <div className="SectionFour">
                <div className="section-heading">
                    <h1>Skills</h1>
                </div>
                <div className="dev-skills">
                    <h2>Development</h2>
                    <div className="skill-tiles">
                        <img src={Dev1} alt="Icon for React.js"/>
                        <img src={Dev2} alt="Icon for JavaScript"/>
                        <img src={Dev3} alt="Icon for HTML"/>
                        <img src={Dev4} alt="Icon for CSS"/>
                        <img src={Dev5} alt="Icon for C++"/>
                        <img src={Dev6} alt="Icon for Swift"/>
                    </div>
                </div>
                <div className="design-skills">
                    <h2>Design</h2>
                    <div className="skill-tiles">
                        <img src={Design1} alt="Icon for Sketch" />
                        <img src={Design2} alt="Icon for Photoshop" />
                        <img src={Design3} alt="Icon for Illustrator" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionFour