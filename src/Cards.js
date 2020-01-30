import React from "react"
import "./Cards.css"

import LeftArrow from './assets/left-arrow.svg'
import RightArrow from './assets/right-arrow.svg'
class Cards extends React.Component {
    constructor() {
        super()
        this.handleLeftScroll = this.handleLeftScroll.bind(this)
        this.handleRightScroll = this.handleRightScroll.bind(this)
    }
    
    handleLeftScroll() {
        if (this.refs.cards) {
            this.refs.cards.scrollLeft += 350
        }
    }

    handleRightScroll() {
        if (this.refs.cards) {
            this.refs.cards.scrollLeft -= 350
        }
    }

    render() {
        return(
            <div className="Cards" ref="cards">
                <button className="arrow" id="left-arr-btn" onClick={this.handleLeftScroll}>
                    <img src={RightArrow} alt="Right arrow icon"/>
                </button>
                <button className="arrow" id="right-arr-btn" onClick={this.handleRightScroll}>
                    <img src={LeftArrow} alt="Left arrow icon" />
                </button>
                <div className="stack">
                    <div className="card" id="card-1">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a summer project to design an application for patients with binge eating disorder.</p>
                                <div className="buttons">
                                    <button>See More</button>
                                    {/* <button>Code</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-2">
                        <div className="overlay">
                            <div className="content">
                                <p>An accountability clock for writers facing a word-count-based deadline. </p>
                                <div className="buttons">
                                    <button onClick={() => window.location.href='https://peterlam.me/doom-clock/'}>Demo</button>
                                    <button onClick={() => window.location.href='https://github.com/Peter-W-Lam/doom-clock'}>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stack">
                <div className="card" id="card-3">
                        <div className="overlay">
                            <div className="content">
                                <p>A front-end implementation of a Dribbble design.</p>
                                <div className="buttons">
                                    {/* https://github.com/Peter-W-Lam/violet-notes */}
                                    <button onClick={() => window.location.href='http://peterlam.me/violet-notes/#/'}>Demo</button>
                                    <button onClick={() => window.location.href='https://github.com/Peter-W-Lam/violet-notes'}>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-4">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a quick project to learn React, specifically state and props</p>
                                <div className="buttons">
                                    <button onClick={() => window.location.href='http://peterlam.me/react-calculator/'}>Demo</button>
                                    <button onClick={() => window.location.href='https://github.com/Peter-W-Lam/react-calculator'}>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}

export default Cards