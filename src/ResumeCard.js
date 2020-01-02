import React from "react"
import './ResumeCard.css'

class ResumeCard extends React.Component {
    render() {
        return(
            <div className="ResumeCard">
                <h2>{this.props.title}</h2>
                <h4 className="subhead">{this.props.subhead}</h4>
                <h4 className="date">{this.props.date}</h4>
                <p>{this.props.descr}</p>
            </div>
        )
    }
}

export default ResumeCard