import { Component } from "react";
import "../reactBlocks.css"


class Main extends Component {
    render() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}

export default Main;