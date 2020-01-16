import React from "react"
import './Button.css'
class Button extends React.Component {
    render() {
        var style = {}
        if (this.props.filled === false) {
            style = {
                background: "#FFF", 
                border: "2px solid #000000", 
                color: "#293241"
            }
        } else {
            style = {
                background: "#293241", 
                boxShadow: "0 3px 9px 2px rgba(41,50,65,0.32)", 
                color: "#FFF"
            }
        }
        return (
            <button className="Button" style={style} id={this.props.id} onClick={this.props.onClick}>{this.props.name}</button>
        )
    }
}

export default Button