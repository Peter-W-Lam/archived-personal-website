import React from "react"
import './Portfolio.css'
import Cards from './Cards'
class Portfolio extends React.Component {
    render() {
        return (
            <div className="Portfolio">
                <div className="section-heading">
                    <h1>Development and Design Projects</h1>
                </div>
                <Cards />
                <div className="section-heading">
                    <h1>Selected Writing</h1>
                </div>
                <div className="writing-links">
                    <p><a href="#">Review of "The Water Dancer" by Ta-Nehisi Coates</a> (Tufts Daily)</p>
                    <p><a href="#">Review of "In the Dream House" by Carmen Maria Machado</a> (Tufts Daily)</p>
                    <p><a href="#">UI/UX Review of the Snapchat Update</a></p>
                    <p><a href="#">UI/UX Review of Waiting</a></p>
                </div>
            </div>
        )
    }
}

export default Portfolio