/**
 * Diamond Group Component
 */

import React from 'react'

export default class DiamondGroup extends React.Component {
    getStyle() {
        let groupSize = this.props.eachRow * 2 - 1
        let childrenCount = this.props.children.length
        let childrenTrail = childrenCount % groupSize
        let childrenGroups = Math.round(childrenCount / groupSize)
        childrenGroups += childrenTrail == 0 || childrenTrail >= this.props.eachRow ? -0.5 : 0

        let width = (this.props.size + this.props.spacing) * this.props.eachRow - this.props.spacing
        let height = (this.props.size + this.props.spacing) * childrenGroups + this.props.size

        return {
            width: `${width}px`,
            height: `${height}px`
        }
    }
    getStyledChildren() {
        let isOdd = false
        let currentID = 0
        let keyInc = 0
        let rowGroup = 0
        return React.Children.map(this.props.children, (child, key) => {
            currentID = (key + keyInc) % this.props.eachRow
            if(currentID == 0) {
                isOdd = !isOdd
                rowGroup++
                if(isOdd) {
                    keyInc++
                }
            }
            return React.cloneElement(
                child,
                {size: this.props.size, isOdd: isOdd, isFirst: currentID == 0, rowGroup: (rowGroup - 1), offset: currentID, spacing: this.props.spacing},
                child.props.children
            )
        })
    }
    render() {
        return (
            <div className="diamond-viewport" {...this.props.size}>
                <ul className="diamond-group" style={this.getStyle()}>
                    {this.getStyledChildren()}
                </ul>
            </div>
        )
    }
}

