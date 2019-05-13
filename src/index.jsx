import ReactDOM from 'react-dom'
import './main.css'
import React, { Component } from 'react'


class App extends Component {
    constructor() {
        super()
        this.state = {
            clickedX: 0,
            clickedY: 0,
            deltaX: 0,
            deltaY: 0,
            x: 0,
            y: 0,
            moving: false
        }
    }
    mouseDown = evt => {
        this.setState({
            moving: true,
            clickedX: evt.clientX,
            clickedY: evt.clientY
        })
    }
    mouseUp = () => {
        this.setState({
            moving: false,
            x: this.state.x + this.state.deltaX,
            y: this.state.y + this.state.deltaY,
            clickedX: 0,
            clickedY: 0,
            deltaX: 0,
            deltaY: 0
        })
    }
    move = evt => {
        if (this.state.moving) {
            this.setState({
                deltaX: evt.clientX - this.state.clickedX,
                deltaY: evt.clientY - this.state.clickedY,
            })
        }
    }
    render = () => {
        return (
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2PEtRg_Pyw4V9XMHPL1xJ3LePMYPhRhdR4P0ISiDHmSjEyxIOg"
                draggable={false}
                onMouseUp={this.mouseUp}
                style={{
                    position: "absolute",
                    left: this.state.x + this.state.deltaX + "px",
                    top: this.state.y + this.state.deltaY + "px"
                }}
                onMouseLeave={this.mouseUp}
                onMouseMove={this.move}
                onMouseDown={this.mouseDown}></img>)
    }

}

ReactDOM.render(<App />, document.getElementById("root"))