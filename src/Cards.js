import React from "react"
import ReactDOM from "react-dom";
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
                    <img src={RightArrow} />
                </button>
                <button className="arrow" id="right-arr-btn" onClick={this.handleRightScroll}>
                    <img src={LeftArrow} />
                </button>
                <div className="stack">
                    <div className="card" id="card-5">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a quick project to learn more about how koalas survive in the wild.</p>
                                <div className="buttons">
                                    <button>Demo</button>
                                    <button>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-6">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a quick project to learn more about how koalas survive in the wild.</p>
                                <div className="buttons">
                                    <button>Demo</button>
                                    <button>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stack">
                <div className="card" id="card-7">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a quick project to learn more about how koalas survive in the wild.</p>
                                <div className="buttons">
                                    <button>Demo</button>
                                    <button>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-8">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a quick project to learn more about how koalas survive in the wild.</p>
                                <div className="buttons">
                                    <button>Demo</button>
                                    <button>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stack">
                    <div className="card" id="card-3">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a quick project to learn more about how koalas survive in the wild.</p>
                                <div className="buttons">
                                    <button>Demo</button>
                                    <button>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="card" id="card-4">
                    <div className="overlay">
                        <div className="content">
                            <p>This was a quick project to learn more about how koalas survive in the wild.</p>
                            <div className="buttons">
                                <button>Demo</button>
                                <button>Code</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="stack">
                    <div className="card" id="card-1">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a quick project to learn more about how koalas survive in the wild.</p>
                                <div className="buttons">
                                    <button>Demo</button>
                                    <button>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-2">
                        <div className="overlay">
                            <div className="content">
                                <p>This was a quick project to learn more about how koalas survive in the wild.</p>
                                <div className="buttons">
                                    <button>Demo</button>
                                    <button>Code</button>
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