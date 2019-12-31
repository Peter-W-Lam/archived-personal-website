import React from "react"
import BioCard from './BioCard'
import './SectionTwo.css'

class SectionTwo extends React.Component {
    render() {
        return(
            <div className="SectionTwo">
                <div className="section-heading">
                    <h1>Who Am I?</h1>
                </div>
                <div className="cards">
                    <BioCard num="01" 
                             title="Student"
                             description="I’m a senior at Tufts University, majoring in Computer Science and English."
                             />
                    <BioCard num="02" 
                             title="Developer + Designer"
                             description="I’m a senior at Tufts University, majoring in Computer Science and English."
                             link="See my portfolio"
                             to="/portfolio"
                             />
                    <BioCard num="03" 
                             title="Writer"
                             description="I’m a senior at Tufts University, majoring in Computer Science and English."
                             />
                </div>

            </div>
        )
    }
}

export default SectionTwo