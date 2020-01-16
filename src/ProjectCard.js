import React from "react"
import './ProjectCard.css'

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="ProjectCard">
                <img src={this.props.image} alt={this.props.alt} />
            </div>
        )
    }
}

export default ProjectCard