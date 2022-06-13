import React from "react";

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-title">
                    {this.props.title}
                </div>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}