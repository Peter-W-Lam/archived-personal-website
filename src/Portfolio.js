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
                    <h1>Selected Writing Samples</h1>
                </div>
                <div className="writing-links">
                    <p><a href="https://tuftsdaily.com/arts/2019/10/06/power-memory-coates-water-dancer/">Review of "The Water Dancer" by Ta-Nehisi Coates</a> (Tufts Daily)</p>
                    <p><a href="https://tuftsdaily.com/arts/2019/11/19/carmen-maria-machado-publishes-personal-memoir-dream-house/">Review of "In the Dream House" by Carmen Maria Machado</a> (Tufts Daily)</p>
                    <p><a href="https://sites.tufts.edu/humanfactorspl/2018/03/08/the-design-of-the-hamburger-menu-icon/">UI/UX: The History Behind the Hamburger Menu Icon</a></p>
                    <p><a href="https://sites.tufts.edu/humanfactorspl/2018/03/19/dont-hold-your-breath-wait-hate-and-user-psychology/">"Don't Hold Your Breath": A UI analysis of waiting</a></p>
                </div>
            </div>
        )
    }
}

export default Portfolio