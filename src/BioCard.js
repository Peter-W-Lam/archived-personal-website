import React from "react"
import './BioCard.css'

class BioCard extends React.Component {
    render() {
        return(
            <div className="BioCard">
                <div className="text">
                    <h1>{this.props.num}</h1>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <a href={this.props.to}>{this.props.link}</a>
                </div>
                
            </div>
        )
    }
}

export default BioCard