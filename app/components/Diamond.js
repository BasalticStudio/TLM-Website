/**
 * Diamond Group
 */

import React from 'react'

export default class Diamond extends React.Component {
    constructor() {

    }
    getWrapperStyle() {
        let offsetFix = this.props.isOdd ? 0.5 : 0
        if(!this.props.isFirst) {
            if(this.props.isOdd) { offsetFix-- }
        }
        let rowFix = this.props.isOdd ? 1 : 0.5
        let top = this.props.rowGroup * this.props.size * 0.5 + this.props.spacing * this.props.rowGroup
        let left = (this.props.offset + offsetFix) * (this.props.size + this.props.spacing)
        return {
            width: `${this.props.size}px`,
            height: `${this.props.size}px`,
            top: `${top}px`,
            left: `${left}px`
        }
    }
    extraStyle() {
        let baseStyle = this.props.isOdd ? "odd" : "even"
        baseStyle += this.props.isFirst ? " first" : ""
        return `${baseStyle} ${this.props.className || ""}`
    }
    getInnerStyle() {
        let style = {}

        if(this.props.fillImage) {
            style['background'] = `url(${this.props.fillImage}) no-repeat center`
            style['backgroundSize'] = `cover`
        }

        return style
    }
    render() {
        return (
            <li className={`diamond-wrapper ${this.extraStyle()}`} style={this.getWrapperStyle()}>
                <div className="diamond-box">
                    <div className="diamond-box-inner" style={this.getInnerStyle()}>
                        {this.props.children}
                    </div>
                </div>
            </li>
        )
    }
}
