/**
 * Character Story Component
 */

import React from 'react'

export default class CharacterStory extends React.Component {

    componentDidMount() {
        let modelFrame = this.refs.model.getDOMNode()
        let modelRect = modelFrame.getBoundingClientRect()
        modelFrame.height = `${modelRect.width * 9/16}px`
    }

    getMainStyle() {
        let baseStyle = "character-story"
        if(this.props.rightMode) { baseStyle += " right" }
        if(this.props.singleMode) { baseStyle += " single" }
        return baseStyle
    }

    render() {
        return (
            <article className={this.getMainStyle()}>
                <div className="character-story-model">
                    <iframe width="100%" ref="model" src={this.props.embedLink} frameBorder="0" allowFullScreen mozAllowFullScreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
                </div>
                <div className="character-story-entry">
                    <div className="character-story-label">{this.props.label}</div>
                    {this.props.children}
                </div>
            </article>
        )
    }
}
